# [Rave Site v2](https://rave.domains/)
### Rave Site v1 can be accessed [here](https://fns-old.fantoms.art/).

## How to run locally

To fork the most up-to-date UI, use these steps:

1) Clone the repo & install deps
```
$ git clone https://github.com/FantomsOpera/rave RaveSiteV2
$ # if you are using NPM
$ npm install
$ # if you are using Yarn
$ yarn install
```

2) Run the test suite:
`npm run-script start`

## Routes

### `/`
The homepage

### `/name/:name`
Shows info for a name (:name can be 0x-prefixed, or the site will append .ftm)

### `/info`
Shows treasury info

### `/*`
404 fallback page

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run commit`

**Note, you will have to change the git urls**

Commits to the main branch.

## For later use

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
