# UXC Seamless Integration

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/uxc-integration)](https://api.reuse.software/info/github.com/SAP-samples/uxc-integration)

## Description

This sample project demonstrates the seamless integration of [UI5 Web Components](https://github.com/SAP/ui5-webcomponents) into the [OpenUI5](https://github.com/SAP/openui5) framework. The goal is to showcase how modern UI5 Web Components can be used alongside classic OpenUI5 controls within a single application, enabling developers to take advantage of the latest UI technologies without sacrificing compatibility or productivity.

By using this sample, you can explore best practices for embedding UI5 Web Components in OpenUI5 views, handling interoperability, and leveraging the strengths of both frameworks. This integration pattern helps modernize SAP Fiori applications and extend their capabilities with reusable, standards-based UI elements.

### Key features illustrated in this example include

* Side Navigation: An organized layout presenting a clear hierarchical structure.
* Shell Bar: Incorporates all required elements, such as:
   * Side Navigation access
   * Branding element
   * Shell action help
   * User profile with access to the user menu
   * Optional components like notifications or settings
* Shell Search: Provides search functionality fully aligned with SAP's usability guidelines.
* User Settings: Offers personalization options for users to tailor their experience, such as theming and language preferences.
* Notification Experience: Delivers real-time alerts and updates, complete with badge indicators and intuitive interaction patterns.

This example is ideal for developers and designers looking to align their applications with SAP's UXC standards, ensuring consistency, usability, and compliance across the SAP ecosystem.

## Requirements

Either [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/) for dependency management.

## Download and Installation

1. Clone the project:

```sh
git clone https://github.com/SAP-samples/uxc-integration.git
cd uxc-integration
```

(or download from https://github.com/SAP-samples/uxc-integration/archive/main.zip)

2. Use npm (or any other package manager) to install the dependencies:

```sh
npm install
```

## Run the App

Execute the following command to run the app locally for development in watch mode (the browser reloads the app automatically when there are changes in the source code):

```sh
npm start
```

As shown in the terminal after executing this command, the app is then running on http://localhost:8080/index.html.<br>
A browser window with this URL should automatically open.

## Debug the App

In the browser, you can directly debug the original TypeScript code, which is supplied via sourcemaps (need to be enabled in the browser's developer console if it does not work straight away).<br>
If the browser doesn't automatically jump to the TypeScript code when setting breakpoints, use e.g. `Ctrl`/`Cmd` + `P` in Chrome to open the `*.ts` file you want to debug.

## Known Issues

No known issues at this time.

## How to obtain support
[Create an issue](https://github.com/SAP-samples/uxc-integration/issues) in this repository if you find a bug or have questions about the content.

For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
