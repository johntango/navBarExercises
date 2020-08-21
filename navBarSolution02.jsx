// Ex 2 - remove any item from navbar with less than 2 in stock
function NavBar({ menuitems }) {
  let list1 = menuitems.filter((item) => item.instock >= 2);
  let list2 = list1.map((item, index) => {
    return <li key={index.toString()}>{item.name}</li>;
  });

  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{list2}</ul>;
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
