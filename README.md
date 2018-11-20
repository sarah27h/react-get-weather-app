React Get Weather app
===============================

## Table of Contents

* [About the Project](#about-the-project)
* [Installing Instructions](#installing-instructions)
* [ Offline First ](#offline-first)
* [Credits](#credits)
* [License](#license)

## About the Project

This project is a single page application from scratch to work as an interactive weather app built using React.js. 
- user-friendly interface
- 100% Responsive for all screen sizes and 
- Accessible for screen reader users with 
- cross-browsers
- Fetched weather from  openweathermap API using AJAX.
- Built a autocomplete for country
- Using an error handling messages to improve the user experience.

## Installing Instructions 

- download zip folder or clone project > https://github.com/sarah27h/react-get-weather-app.git

- For develoment mode
    - `cd` to your project directory
    - install all project dependencies with `yarn install`
    - open project in browser and start the development server with `yarn start`

- For production mode
    - `cd` to your project directory
    - install `yarn build`
    - to serve with static Server
    - `serve -s build
    - Local host at http://localhost:5000


## Offline First

Note: Service Worker works only in production mode
- `cd` to project directory
- Use `serve -s build`
- Make sure you are in online mode (offline not selected)

## Credits

- React Docs https://reactjs.org/docs/getting-started.html
- Weather data from openweathermap API
- https://developer.mozilla.org/en-US/
- wW3schools.com
- Stackoverflow
- For fetching data https://www.robinwieruch.de/react-fetching-data/
- Quicksand font from Google Fonts
- weather icons used in Logo by Elias Bikbulatov from https://www.flaticon.com/authors/elias-bikbulatov

## License

This project is licensed under the terms of the <a href="https://choosealicense.com/licenses/mit/" rel="nofollow">MIT</a> license.
