// use of "props" to set data
function NavBar({ menuitems }) {
  // remove all even numbers in the NavBar
  let list1 = menuitems.filter((item) => item % 2 !== 0);
  let list2 = list1.map((item, index) => {
    return <li key={index.toString()}>{item}</li>;
  });
  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{list2}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
