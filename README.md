# Bloom Bridge

Bloom Bridge is a web application built with Next.js, designed to provide a robust and scalable solution for bridging tokens between different blockchain networks. By leveraging LayerZero, Bloom Bridge ensures seamless cross-chain communication and efficient token transfers, enhancing the decentralized finance (DeFi) ecosystem.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Testing](#testing)
- [License](#license)

## Installation

To get started with Bloom Bridge, clone the repository and install the dependencies:

```sh
yarn install
```

## Scripts

The following scripts are available for development and production purposes:

- `build`: Builds the Next.js application for production.
- `start`: Starts the Next.js application in production mode.
- `ts-check`: Runs TypeScript checks.
- `dev`: Starts the Next.js application in development mode on port 3009.
- `export:tokens`: Exports tokens using the provided script.
- `test`: Runs the tests using Vitest.
- `lint`: Lints the codebase using ESLint.
- `clean`: Cleans the build artifacts and node modules.

To run a script, use the following command:

```sh
yarn <script-name>
```

For example, to start the development server:

```sh
yarn dev
```

## Dependencies

Bloom Bridge utilizes a variety of dependencies to provide its functionality. Some of the key dependencies include:

- `next`: The React framework for production.
- `react`: A JavaScript library for building user interfaces.
- `@emotion/react`, `@emotion/styled`: Libraries for writing CSS styles with JavaScript.
- `ethers`: A complete and compact library for interacting with the Ethereum blockchain.
- `mobx`, `mobx-react`, `mobx-utils`: Libraries for state management.
- `@tanstack/react-query`: Powerful asynchronous state management for React.
- `@trpc/client`, `@trpc/server`, `@trpc/react-query`: End-to-end typesafe APIs.
- `@layerzerolabs`: A suite of tools and SDKs from LayerZero to enable cross-chain communication and functionality.

## Development

To start the development server, run:

```sh
yarn dev
```

The application will be available at [http://localhost:3009](http://localhost:3009).

## Testing

To run the test suite, use:

```sh
yarn test
```

This project uses Vitest for running tests.

## License

This project is licensed under the PolyForm Strict License 1.0.0. See the [LICENSE](LICENSE) file for more information.
