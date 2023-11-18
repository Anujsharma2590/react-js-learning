const divElement = document.getElementById("root");

// Create a React element using React.createElement
const obj1 = React.createElement("h2", null, "this is inner h2 tag");
// The React.createElement function takes three arguments:
// - The type of the element ("h1" in this case)
// - The properties or attributes of the element (null in this case, as there are none)
// - The content of the element ("this is h1 tag" in this case)

const obj = React.createElement("h1", null, ["this is h1 tag", obj1]);

// Create a root using ReactDOM.createRoot and pass in the root DOM element
//It takes the root DOM element as an argument.
const root = ReactDOM.createRoot(divElement);

// Use the render method of the root to render the React element to the DOM
// The render method is called on the root to render the React element (obj) into the specified DOM element (root).
// This means that the content of the React element will be displayed inside the HTML element with the id "root."
root.render(obj);

// const element = document.createElement("h1");

// element.innerHTML = "this is h1 tag";

// divElement.appendChild(element);
