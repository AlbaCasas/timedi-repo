# Ti-Medi Technical Assessment

This is a technical assessment project for Ti-Medi. It's built using NextJS, Tailwind, and React Query.

## Generating a GitHub Token

This project makes use of the GitHub API to search the existing GitHub repositories.

In order to make it run, you will need to generate a valid GitHub token. You can do so by following the instructions detailed in this article:

[GitHub - Creating a personal access token](<[creating-a-personal-access-token](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creaci%C3%B3n-de-un-personal-access-token-classic)>)

## Installation

To run the project, you need to copy the content of the file `.env` to the file `.env.local`. After doing so, replace the value of `NEXT_PUBLIC_GITHUB_TOKEN` with a valid GitHub token. The one specified in the current `.env` file got revoked when pushing the code to GitHub.

After the env variables are set, you can run the following commands in your terminal:

```
yarn
yarn dev
```

The `yarn` command installs all the dependencies needed for the project to run, and the `yarn dev` command starts the server on `localhost:3000`.

## Project Architecture

This project follows a vertical slices architecture, where each feature is grouped together in its own folder. The project has four main folders: `features`, `app`, `core`, and `components`.

### Features

The `features` folder contains all the client-side logic of the project. Inside each feature, you can find the following folders:

- `components`: contains all the components related to that feature.
- `domain`: contains the domain logic related to that feature.
- `services`: contains all the API calls related to that feature.
- `views`: componetizes the different components into a view.

### App

The `app` folder contains the pages and layout for the project as specified by `NextJS 13`.

### Core

The `core` folder contains the setup of the different libraries used in the project.

It also contains core utilities like the `client` used to fetch data or the dates formatting.

### Components

The `components` folder contains the components that make up the design system used in the project.
