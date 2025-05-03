/**
Task:

Create a button that says "Click Jomacs!" where "Jomacs" is a JavaScript variable.
 */

function Test09() {
  const name = "Jomacs";

  const handleClick = () => {
    alert(`Clicked ${name}`)
  }

  return (
    // Your code here
    <button onClick={handleClick}>Click {name}</button>
  );
}

export default Test09;
