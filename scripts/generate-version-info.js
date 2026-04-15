const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const distResources = path.join(root, "dist", "resources");

// Read project metadata from package.json
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

// Parse framework version and declared libraries from ui5.yaml
const ui5Yaml = fs.readFileSync(path.join(root, "ui5.yaml"), "utf8");
const versionMatch = ui5Yaml.match(/^\s+version:\s*"?([^"\s]+)"?/m);
if (!versionMatch) {
	throw new Error("Could not parse framework version from ui5.yaml");
}
const frameworkVersion = versionMatch[1];

const buildTimestamp = new Date().toISOString().replace(/[-T:.Z]/g, "").slice(0, 12);

// Recursively find all manifest.json files under dist/resources
function findManifests(dir) {
	const results = [];
	if (!fs.existsSync(dir)) return results;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			results.push(...findManifests(fullPath));
		} else if (entry.name === "manifest.json") {
			results.push(fullPath);
		}
	}
	return results;
}

// Collect libraries from their manifest.json in the build output
const libraries = [];
for (const manifestPath of findManifests(distResources)) {
	try {
		const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
		if (manifest["sap.app"]?.type !== "library") continue;

		const libName = manifest["sap.app"].id;
		const lib = {
			name: libName,
			version: frameworkVersion,
			buildTimestamp,
			scmRevision: ""
		};

		const deps = manifest["sap.ui5"]?.dependencies?.libs;
		if (deps && Object.keys(deps).length > 0) {
			lib.manifestHints = { dependencies: { libs: deps } };
		}

		libraries.push(lib);
	} catch {
		// skip non-JSON or malformed files
	}
}

libraries.sort((a, b) => a.name.localeCompare(b.name));

if (libraries.length === 0) {
	console.warn("Warning: No UI5 library manifests found in dist/resources/. " +
		"The generated sap-ui-version.json will have an empty libraries array.");
}

const result = {
	name: pkg.name,
	version: pkg.version,
	buildTimestamp,
	scmRevision: "",
	libraries
};

const outPath = path.join(distResources, "sap-ui-version.json");
fs.writeFileSync(outPath, JSON.stringify(result, null, "\t"));
console.log(`Generated sap-ui-version.json with ${libraries.length} libraries (OpenUI5 ${frameworkVersion})`);
