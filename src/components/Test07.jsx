/**
Task: Change the code so:

If isLoggedIn is true ➔ show "Welcome back!"

If isLoggedIn is false ➔ show "Please log in."
 */

function Test07() {
  const isLoggedIn = true;

  return (
    <h1>{!isLoggedIn ? 'Please login'
      : 'Welcome back!'}</h1>
  );
}

export default Test07;
