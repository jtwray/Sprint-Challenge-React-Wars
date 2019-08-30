# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React.js is a javascript library some would consider a framework built by the engineers at Facebook to build large scale applications, both effectively and rapidly. React gives you chance to write alot of vanilla javascript giving a new developer a chance to gain in depth knowledge of the javascript language because React doesnt require you to rely heavily on its Api or internal workings to get things accomplished. React creates and works with the view of the model-view-controller paradigm by updateing the U.I. base of the applications data.React also allows you to compartmentalize your code into components separating concerns when creating an app. This improves readibility for both yourself and the next person looking at your code. Makes it easier to work with the DOM. React uses a virtual DOM to compare to and only update the parts of 'Real' DOM that have changed rather than calling for a full repaint everytime, this helps the browser run alot faster.

2.  What does it mean to _think_ in react?


To 'think in react' is an approach to creating a codebase. You are basically breaking your app/page down into building blocks where each block is reduced down into the samllest version of itself to do what it is created to do. You want the components to be reusable and minimally styled as the styles can be passed in later as props. You want to start with a componenet heirarchy deciphering the responsibilties of each component or building block such that each block does one thing really well. Break it up into components that each represent one piece of a  data model to be parsed by the application. State lives at the top and gets passed down to cihldren as props, generally. Other options are available to 'swing' state around to the bottom without too much prop srilling like context api.




3. Describe state.


    State is a plain javascript object holding information that influences the output of the render. State is managed from within the component itself and can be modified. State changes can be asynchronous.

4.  Describe props.
  

Props is also a plain javascipt object passing key value pairs that influece how the page is rendered. Props are passed to the component similiar to a function's parameters. 


5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A function is said to have a side -efect when it modifies something outside of its own scope or outside of its own function body. 
To sync the effects to a change in state or change of a prop you can use the effect hook and its closing dependency array. You can name a prop or state in the dependecy array To cause that particular useEffect function and anything inside of it to run only when the items listed in dependency array change. Giving an empty dependency array will cause the euseffect function to run once on render, leaving the dependency array out altogether will cause the particular useEffect to run when any state or prop changes.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components are plain javascript functions accepting props as arguments and returning a React element. A Class component extends from React.component as a Class rendering a function that creates a React element and contains state. Presentational components are usually stateless, a child of a container component and are concerened with presenting data about how things look. Container components are stateful, rarely contain markup for how things look , provide data stored in state and passed as props to the children components.


