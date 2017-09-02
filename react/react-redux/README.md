# react-redux

Contains study files for Sections 3-4 of the [Modern React with Redux](https://www.udemy.com/react-redux/learn/v4/content) UDemy course by [StephenGrider](https://github.com/StephenGrider).

The boilerplate code is cloned from [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter).

## Table of Contents

- [What the project does](#what-the-project-does)
- [Installation](#installation)
- [Some Learnings](#some-learnings)
    - [Babel](#babel)
    - [React Components](#react-components)
    - [JSX](#jsx)

## What the project does

A very simple book catalog.

## Installation
Once copied, go to the home directory of this project and run:

```
> npm install
```

To run the project:
```
> npm start
```

## Some Learnings

### Redux

A container or manager of application data. React (or other similar frameworks) translates these data into something that can be seen and interacted with by the user. All application data is centralized into a single object called *state*.

### Reducer

A function that returns a portion of application state or data.

### Action

An object that is used to change the application data.

### Action Creator

Function that returns an action(s).

### Dispatch

Propagates an action to all reducers. Reducers will then decide the value of the data it will return based from the action.

### React-Redux

A library whose sole purpose is to connect Redux with the React application.

