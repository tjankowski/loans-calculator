## Summary

Responsive loan caluclator demo.
Min and maximum values of the calculation attributes can be changed through constants. `vh` used as a unit for most UI properties to keep UI responsive to height of the window.

Project structure:

- `/api` - contains logic to fetch data from API
- `/assets` - place to store assets
- `/components` - place for stateles reusable UI compoents
- `/containers` - place for components with state and UI logic
- `/store`- place for application state and logic

3rd party libraries used for project:

- `styled-components` - to style UI
- `lodash.debounce` - to limit calls to API on user interaction
- `react-loading-skeleton` - to display placeholders during data fetching
- `material-ui` - for custom slider and icons

To improve:

- create UI tests
- refactor styled components
- create landscape UI for mobile
- optimize React performance for rerenders - limit callbacks recreations, use dependecies for hooks

## Usage

### `Setup`

Requirements to run:

- one of latest NodeJS versions - created using `14.3.0`
- `yarn` or `npm` to download dependecies and run scripts

### Quick start

1. Install dependecies using `yarn` or `npm`
2. Run in development mode using start script `yarn start` or `npm start`

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

#### Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
