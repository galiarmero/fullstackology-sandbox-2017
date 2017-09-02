# react-basics

Contains study files for Sections 1-2 of the [Modern React with Redux](https://www.udemy.com/react-redux/learn/v4/content) UDemy course by [StephenGrider](https://github.com/StephenGrider).

The boilerplate code is cloned from [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter).

## Table of Contents

- [What the project does](#what-the-project-does)
- [Installation](#installation)
- [Some Learnings](#some-learnings)
    - [Babel](#babel)
    - [React Components](#react-components)
    - [JSX](#jsx)

## What the project does

A single-page YouTube video streaming app with simple search feature that utilizes the [YouTube Data API](https://developers.google.com/youtube/v3/docs/search).

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

### Babel

Babel transpiles ES6/ES2015 code into plain old ES5 that is supported by most browsers.
This allows writing of bleeding-edge JavaScript that will work on current browsers.

To know if an ES6 construct is already supported by a browser, check out [ES6 compatibility table](https://kangax.github.io/compat-table/es6/).

An online console that transpiles code is provided by the [Babel REPL](https://babeljs.io/repl/).

### React Components

Independent, reusable pieces of the UI. They accept inputs called "props" and return elements describing what should appear in the DOM. They can be defined in two ways:

1. JavaScript function: returns an element

    ```
    function Home(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    ```

2. ES6 class: contains a `render()` method that returns an element

    ```
        class Welcome extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}</h1>;
            }
        }
    ```

More from the [official documentation](https://facebook.github.io/react/docs/components-and-props.html).

### JSX

The elements returned in components above aren't strings, they are called JSX (aka "XML in JS"). It's a syntax extension to JavaScript that allows definition of HTML elements in JavaScript code.
