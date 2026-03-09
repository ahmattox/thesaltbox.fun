# The Salt Box

Website for a Magic: The Gathering Cube event in Baltimore. Built with React and
Next.js.

http://thesaltbox.fun/

## Prerequisites

- [Node 24](https://nodejs.org/en/): [nvm](https://github.com/creationix/nvm) is
  recommended for installing and managing Node versions. After installing, run
  `$ nvm install` or `$ nvm use` in the project directory.
- [Yarn](https://classic.yarnpkg.com/en/docs/install) to install JavaScript
  dependencies.

## Setup

In the project directory, install dependencies with:

```sh
$ yarn install
```

## Development

Run the development server with:

```sh
$ yarn dev
```

View the site in a browser at `http://localhost:3000`

### Updating

After pulling changes, or when switching between branches with different
dependencies, update all installed dependencies with:

```sh
$ yarn install
```

### Validating and Formatting

A few tools are used to enhance and validate JavaScript. It's recommended to
install plugins for these in your text editor if available to validate and
format automatically.

- [TypeScript](https://www.typescriptlang.org) is used to type check JavaScript.
  Run `$ yarn types:check` to check manually.
- [Prettier](https://prettier.io) formats JavaScript and CSS, enforcing
  consistency and reducing incidental changes. Run `$ yarn format` to manually
  format, or `$ yarn format:check` to verify.
- [ESLint](https://eslint.org) checks for some kinds of JavaScript errors and
  consistent style. Run `$ yarn lint` to manually check.

## Project Use

This repository is not formally licensed; however, if you're hosting a small
cube event feel free to use it as a starting point. I'd ask you to credit the
source, make substantial changes to the visual style to avoid confusion.
