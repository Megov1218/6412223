1. Explain the need and benefits of component lifecycle
The component lifecycle in React helps manage how a component is created, updated, and removed from the DOM. 
It provides special built-in methods (called lifecycle hooks) that allow us to run specific code at different stages of a component's existence. 
This is especially useful for tasks like data fetching, cleanup, or logging. 
By using lifecycle methods effectively, developers can improve performance, ensure data is loaded at the right time, and avoid bugs caused by unexpected rendering behavior.

2. Identify various lifecycle hook methods
React class components offer several lifecycle hooks. 
The most commonly used ones are constructor(), componentDidMount(), componentDidUpdate(), and componentWillUnmount(). 
These help manage what happens when a component is created, updated, or removed. 
There are also special hooks like componentDidCatch() used for error handling. 
These hooks give fine control over the behavior and logic at each stage of the component’s lifecycle.

3. List the sequence of steps in rendering a component 

The typical lifecycle of a class-based component follows these steps:

Constructor() – Initializes state and props.

Render() – Returns the JSX to be displayed.

componentDidMount() – Called once the component is mounted.

componentDidUpdate() – Runs after re-render due to state/props change.

componentWillUnmount() – Called just before the component is removed.

componentDidCatch() – Catches errors in child components.

This order ensures that the component is correctly set up, updated, and cleaned up when no longer needed.