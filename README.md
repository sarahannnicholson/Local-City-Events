# Local City Events
My motivation for this project stemmed from trying to find activities while on vacation. I wanted to experience the city as the local people would, and not necessarily like a tourist.
This web application utilizes a variety of social media APIs to provide recommendations to the user. </br>
A user will begin by providing a city name and the application will generate the latest Instagram posts, Foursquare recommendations, and other social media information for that location. The idea is for users to get recommendations to experience a city like the locals.

## Requirements
* node `^4.5.0`
* npm `^3.0.0`

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/sarahannnicholson/Local-City-Events.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works

```bash
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```
If everything works, you should see the following:

<img src="http://i.imgur.com/zR7VRG6.png?2" />

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|
