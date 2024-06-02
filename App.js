const heading = React.createElement("h1", {}, "This is React");

const heading2 = React.createElement("h2", {}, "This is second Heading");

const root = ReactDOM.createRoot(document.getElementById("root"));

const container = React.createElement("div", {}, [heading, heading2])

root.render(container);