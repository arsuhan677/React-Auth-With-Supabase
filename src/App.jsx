import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Featured from "./Featured";

function App() {
  const [count, setCount] = useState(0);

  // Load cart count from localStorage on mount
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(cart.length);
  }, []);

  return (
    <div>
      <Nav count={count} />
      <Featured setCount={setCount} />
    </div>
  );
}

export default App;




// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return <div>hello app</div>;
// }

// export default App;
