# weather-app

A simple weather forecasting app implementing React and Redux as shown in Section 5 of the [Modern React with Redux](https://www.udemy.com/react-redux/learn/v4/content) UDemy course by [StephenGrider](https://github.com/StephenGrider).

The boilerplate code is cloned from [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter).

## Table of Contents

- [What the project does](#what-the-project-does)
- [Installation](#installation)
- [Learnings](#learnings)
    - [middlewares](#middlewares)
    - [react-redux](#react-redux)


## What the project does

Projects the 5-day weather forecast for a given city using the [OpenWeatherMap API](https://openweathermap.org/api).

## Installation
Once copied, go to the home directory of this project and run:

```
> npm install
```

To run the project:
```
> npm start
```

## Learnings

### Middlewares

Sort of a guard that stops an action from flowing through reducers right away. They check the action, perform some checks and operations on it and then decides when to let it proceed to the reducers.

Middlewares in the application are specified during store creation in the index of the app.

```
import myMiddleware from 'my-middle-ware';
const createStoreWithMiddleware = applyMiddleware(myMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
``` 

### redux-promise

[redux-promise](https://www.npmjs.com/package/redux-promise) is a middleware for actions that contain [promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise).

It receives an Action whose payload is a promise. It will either

- dispatch a copy of the action with the resolved value of the promise if the promise is successful
- dispatch a copy of the action with the rejected value of the promise if the promise is failed.

This middleware allows us to work with pure data in reducers rather than dealing with promises.