const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child-1" },
    React.createElement("h1", { id: "heading" }, "Im, an h1 tag")
  ),
  React.createElement(
    "div",
    { id: "child-2" },
    React.createElement("h1", {}, "Im, second h1 tag")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
