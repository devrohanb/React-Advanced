import React from "react";
import "./App.css";
import RefsDemo from "./Components/RefsDemo";
import ComponentC from "./Components/ComponentC";
import { UserProvider } from "./Components/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Aditya">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
