# allprops

Waityme application with a focus on a clean, modern, minimaslistic and snappy UX.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This project uses yarn as its dependency manager.
Install yarn from: https://yarnpkg.com/lang/en/docs/install/#windows-stable

Install all of the projects dependencies using:

```
yarn
```

### Setup
Start the application in development mode using:

```
yarn dev
```

## Project Overview 

The project is divided into three main folders - pages, components and layout.


pages - The nextjs pages directory. Nextjs will automatically map the files and folders in this directory to the appropriate URLs.

components - Resusable, shared react components.

layout - Central layout of the application. Exports a Layout component used to wrap the page components.

### Coding Styles

This project uses eslint for automatic code linting

Lint with: 
```
yarn lint
```

Or lint and fix with:
```
yarn lint --fix
```

## Development Workflow

All linting errors should be resolved before pushing a new feature.
Every feature should be built on a dedicated branch and a pull request should be created for the same.
The project maintainer will then review the code, merge it with the dev branch and close the pull request.
The changes will be deployed automatically to now.

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The Javascript User Interface Library Used
* [Nextjs](https://nextjs.org/docs) - The Application Framework Used
* [Material-UI](https://material-ui.com/) - The Design System Used
* [Formik](https://jaredpalmer.com/formik/docs/overview) - The Form State Mangagement Library Used
* [Yarn](https://yarnpkg.com/en/docs) - The Dependency Manager Used
* [Now](https://zeit.co/home) - The Deployment Platform Used

## Author / Code Reviewer

* **David**
