// These questions are same as Task2 hence just copied


1. Explain React components

React components are the building blocks of any React application.
They are independent, reusable pieces of code that return React elements, which are essentially pieces of UI. 
Components make it easy to break the UI into smaller, manageable parts. 
Instead of working with one big HTML file, we can use multiple components for each section of the application, making the structure more organized and maintainable.

2. Identify the differences between components and JavaScript functions
While both components and JavaScript functions share similarities in structure, React components are specifically used to return UI elements and are often written using JSX.
A regular JavaScript function performs logic or computation and returns a value, whereas a React component returns JSX that represents part of the UI. 
Additionally, React components can maintain their own state and lifecycle, which regular JavaScript functions do not have.

3. Identify the types of components
React components are mainly of two types: class components and function components.
Class components are ES6 classes that extend React.Component and have access to lifecycle methods and state management. 
Function components, on the other hand, are simpler and written as plain JavaScript functions. 
With the introduction of React Hooks, function components can now manage state and side effects, making them more powerful and widely used today.

4. Explain class component
A class component in React is a JavaScript class that extends from React.Component. 
It must include a render() method that returns JSX. 
Class components have access to lifecycle methods such as componentDidMount and componentDidUpdate, and they use this.state to handle dynamic data. 
Although they’re being used less now with the introduction of hooks, they are still important in understanding React’s evolution.

5. Explain function component
A function component is a simple JavaScript function that returns JSX.
 Unlike class components, function components were initially stateless.
However, with the introduction of React Hooks (like useState and useEffect), function components can now manage state and lifecycle logic too. 
They are cleaner, easier to read, and are now considered the standard way to write components in React.

6. Define component constructor
In class components, the constructor is a special function used for initializing state and binding methods. 
It is called when the component is created, and it's the first method that runs before the component is mounted. 
The constructor typically includes a call to super(props) to make the this.props available within the component.

7. Define render() function
The render() function is a mandatory method in class components. It returns the JSX that defines the component’s UI. 
It’s called whenever the component’s state or props change, allowing React to update the DOM accordingly. 
The render() method must return a single JSX element or a wrapper element that contains multiple child elements.