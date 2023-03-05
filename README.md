# TiMedi Technical Assessment

This is a technical assessment project for TiMedi. It's built using NextJS, Tailwind, and React Query.

## Installation

To run the project, you need to copy the content of the file `.env` to the file `.env.local`. After doing so, run the following commands in your terminal:

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
