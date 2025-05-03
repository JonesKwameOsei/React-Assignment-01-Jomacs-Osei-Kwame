/**
Task:

Use JSX to render a <ul> list of three favorite fruits.
 */

function Test08() { 
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ];
  const listItem = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}</li>)
  return (
    <ul>{listItem}</ul>
  );
}

export default Test08;
