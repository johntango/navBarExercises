// Ex 2 - remove any item from navbar with less than 2 in stock
// write out both the name and the number in stock in format apple:2
function NavBar({ menuitems }) {
  const updatedList = menuitems.map((item, index) => {
    return <li key={index}>{item.name}</li>;
  });
  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 },
];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
