// Ex 1 - remove all even numbers from the NavBar
function NavBar({ menuitems }) {
  const updatedList = menuitems.map((listItems, index) => {
    return <li key={index.toString()}>{listItems}</li>;
  });
  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
