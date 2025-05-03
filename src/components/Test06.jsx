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
