# 2026 Portfolio

Deployment [https://recentlyhatched.github.io/2026-portfolio/](https://recentlyhatched.github.io/2026-portfolio/)

## ChromeOS configuration

I've made it even easier to work on ChromeOS by configuring Vite

## Set up

### `git clone git@github.com:recentlyhatched/2026-portfolio.git`
Using SSH

### `cd 2026-portfolio`

### `npm install`
Run to install dependencies

Create a .env file and add `HOST=0.0.0.0`

## Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5713](http://localhost:5713) to view it in the browser. For ChromeOS, follow the *last* network link (with your Crostini IP). It should looks something like Network: http://100.xxx.xx.xxx/5713


### `npm run deploy`
To build dist directory and deploys via GitHub pages


### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Launches a local static server to test your production build, serves files from the dist folder at port 4173, example: http://localhost:4173 \
Allows testing the optimized production version locally before deployment


