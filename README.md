## Available Scripts

In the project directory, you can run:

### `npm install`

Run npm install to install project dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.




## User Experience (UX)

### Login Page 
    #### The app is opening on the login view asking the user to enter username and password
    #### Form Validation: username and password are mandatory fields. If the user try login without entering them, a visual indicator will appear to the user that he has to enter the missing field.
    #### When user enters username and password, if they are correct, the recieved token and expire date will be persisted for further requests and the user will be redirected to feeds page
    #### If username or password is incorrect a message will display that username or password is incorrect.
    #### I created a request interceptor to check the validity of the token and if the token is not valid, user will be redirected to login view to login again and get new valid token. 

### Feeds Page
    #### In the initial load it will fetch the first 20 reviews and display it. 
    #### Infinite scrolling is implemented so when user scroll to the end of the page and new request for reviews will be created to fetch the next bunch of reviews.
    #### User can filter reviews by theme and this will create api request for reviews passing the theme id. 
    #### Infinite scrolling working also with filtered reviews correctly.
    #### Themes and sentiments are visualised using different colors and emojis.
    #### Each review is represented by its themes, customer comment and creation date. 

### General Notes
    #### The ids of some review themes don’t map correctly to one of the themes of the list of themes come from themes service and I handled this case by not showing the theme and the sentiment for this theme and that’s why you could see some of the reviews without any themes


## Code Style and quality

ESlint and Prettier are used to force a specific style rules 


## Test Coverage

I created a single test file for each component type (action creators - reducers - services - components ) to demonestrate how these types can be tested.

## Project Dockerization

I created a Docker configuration file that can be used in dev mode to create an image of the project and run the project thought docker.


Thanks a lot :) 







