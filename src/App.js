
const Pet = () => {
    return React.createElement("div", {},[
        React.createElement("h1", {}, "Chloe"), 
        React.createElement("h2", {}, "Cat"),
        React.createElement("h2", {}, "Simease")
    ])
}



const App = ( ) => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet),
    );
 }

 ReactDOM.render(
     React.createElement(App),
     document.getElementById("root")
 )