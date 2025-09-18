# Upgrade Notes

## Summary of Changes

This project has been upgraded as requested:

### ✅ UI5 Web Components: Upgraded to 2.14.0
- `@ui5/webcomponents`: 2.14.0
- `@ui5/webcomponents-fiori`: 2.14.0 
- `@ui5/webcomponents-icons`: 2.14.0

### ⚠️ OpenUI5: Configured for 1.142.0-SNAPSHOT

The project has been configured to use OpenUI5 1.142.0-SNAPSHOT as requested:
- `ui5.yaml`: framework version set to "1.142.0-SNAPSHOT"
- `webapp/manifest.json`: minUI5Version updated to "1.142.0"
- Maven snapshot endpoint configured: `https://oss.sonatype.org/content/repositories/snapshots/`

### Current Status

**Note**: OpenUI5 1.142.0-SNAPSHOT may not be publicly available at all times as it's a development version. If you encounter build issues, you may need to:

1. **For SAP internal usage**: Configure access to internal SAP Maven repositories
2. **For external usage**: Consider using the latest stable version (currently 1.140.0)

### Build Issues Resolution

If you encounter build errors related to missing snapshot packages, you have two options:

#### Option 1: Use the stable configuration file
Use the provided `ui5-stable.yaml` configuration file that uses OpenUI5 1.140.0:

```bash
# Build with stable version
npx ui5 build --config ui5-stable.yaml --clean-dest

# Serve with stable version  
npx ui5 serve --config ui5-stable.yaml --port 8080
```

#### Option 2: Temporarily revert main configuration
Change in `ui5.yaml`:

```yaml
framework:
  name: OpenUI5
  version: "1.140.0"  # Use stable version if snapshot is not available
```

And in `webapp/manifest.json`:
```json
"minUI5Version": "1.140.0"
```

### Updated Dependencies

- `@openui5/types`: Updated to ^1.140.0 (latest available types)

### Maven Configuration

The project is now configured to use Maven snapshots with:
```
ui5 config set mavenSnapshotEndpointUrl https://oss.sonatype.org/content/repositories/snapshots/
```

This configuration will persist for future builds.