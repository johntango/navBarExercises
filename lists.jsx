const numbers = [1, 2, 3, 4, 5];

const updatedNums = numbers.map((number) => {
  return <li>{number}</li>;
});

ReactDOM.render(<ul>{updatedNums}</ul>, document.getElementById("root"));
