# 🧪 JSX Practice Assignment Solutions

## 📜 Description

This assignment is a collection of tasks to practice writing JSX.  
You can find the original assignment [here](https://github.com/Konadu-Akwasi-Akuoko/React-Assignment-01-Jomacs).

---

## Task 01 Solutions

**Task:** The task was to fix `Parent Element` error.

**Solution:** See `Test01.jsx`. Snippet below:

```jsx
function TestO1() {
  return (
    <>
    <h1>Hello World!</h1>
    <p>Welcome to React!</p>
    </>
  );
}

export default TestO1;
```

> The Fix: To fix the error, I enclosed the JSX elements within **React fragments** `<></>`.

---

## Task 02 Solutions

**Task:** The task was to Correct the `className` usage. Incorrect code bellow:

```jsx
function TestO2() {
  return <h1 class="title">Hello JSX</h1>;
}

export default TestO2;
```

> Wrongly using `class` instead of `className`.  
> The Fix: I replaced `className` with `class`.

**The Solution:** See `Test02.jsx`. Snippet below:**

```jsx
function TestO2() {
  return (
    <h1 className="title">Hello JSX</h1>
  );
}

export default TestO2;
```

---

## Task 03 Solutions

**Task:** Add a `Self-Closing Tag`.
Incorrect code bellow:

```jsx
function Test03() {
  return (
    <div>
      <img src="logo.png" >
      <p>React Logo</p>
    </div>
  );
}

export default Test03;
```

> The img tag should be self-closing.  
> The Fix: I added `/>` to close the tag. The correct code is:

```jsx
function Test03() {
  return (
    <div>
      <img src="logo.png" />
      <p>React Logo</p>
    </div>
  );
}

export default Test03;
```

---

## Task 04 Solutions

**Task:** Fix the for Attribute `(use htmlFor)`.

Incorrect code bellow:

```jsx
function Test04() {
  return (
    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" />
    </div>
  );
}

export default Test04;
```

> The Fix: I replaced `for` with the right JSX attribute `htmlFor`. The correct code is:

```jsx
function Test04() {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" />
    </div>
  );
}

export default Test04;
```

---

## Task 05 Solutions

**Task:** Insert a JavaScript Variable using `{}`.

Incorrect code bellow:

```jsx
function Test05() {
  const user = "Akwasi";
  return <h1>Welcome user</h1>;
}

export default Test05;
```

> The Fix: I inserted the variable using `{}`. The correct code is:

```jsx
function Test05() {
  const user = "Akwasi";
  return <h1>Welcome {user}</h1>; // The variable was inserted here.
}

export default Test05;
```

---

## Task 06 Solutions

**Task:** Correct Attribute Name to `CamelCase`.

Incorrect code bellow:

```jsx
function Test06() {
  const showAlert = () => {
    alert("Clicked");
  };
  return <button onclick="showAlert">Click Me</button>;
}

export default Test06;
```

> The Fix: I replaced `onclick` with `onClick`. The correct code is:

```jsx
function Test06() {
  const showAlert = () => {
    alert("Clicked");
  };
  return (
    <button
      onClick={showAlert}
    >
      Click Me
    </button>
  );
}

export default Test06;
```

---

## Task 07 Solutions

**Task:** Use a `Ternary Expression` Inside JSX.

Incorrect code bellow:

```jsx
function Test07() {
  const isLoggedIn = false;

  return <h1>Welcome back!</h1>;
}

export default Test07;
```

> The Fix: I used a ternary expression inside JSX. The correct code is:

```jsx
function Test07() {
  const isLoggedIn = false;

  return (
    <h1>{!isLoggedIn ? 'Please login'
      : 'Welcome back!'}</h1> // The ternary expression was inserted here.
  );
}

export default Test07;
```

---

## Task 08 Solutions

**Task:** Write JSX to Display a Simple List.

Starter code bellow:

```jsx
function Test08() {
  return (
    // Your code here
  );
}

export default Test08;
```

> The Fix: See `Test08.jsx`. Snippet below:

```jsx
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
```

---

## Task 09 Solutions

**Task:** Render a `Button with Dynamic Text`.

Starter code bellow:

```jsx
function Test09() {
  const name = "Jomacs";

  return (
    // Your code here
  );
}

export default Test09;
```

> The Fix: See `Test09.jsx`. Snippet below:

```jsx
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
```

---

## Task 10 Solutions

**Task:** Use Logical `AND (&&)` to Conditionally Show Text.

Starter code bellow:

```jsx
function Test10() {
  const isAdmin = true;

  return (
    // Your code here
  );
}

export default Test10;
```

> The Fix: See `Test10.jsx`. Snippet below:

```jsx
function Test10() {
  const isAdmin = true;

  return (
    // Your code here
    <h2>
      {isAdmin && 'Admin Panel'}
    </h2>
  );
}

export default Test10;
```

---

## Solution Page

![Solution image](image.png)

---

## Conclusion

This assignment was a good exercise to practice writing JSX. I have enjoyed it! Also, learned a lot about React and JSX syntax.
