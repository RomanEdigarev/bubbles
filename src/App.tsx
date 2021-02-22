import React from "react";
import { Header } from "./components/Header/Header";
import { AppBody } from "./components/AppBody/AppBody";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <AppBody />

      {/* Footer */}
    </div>
  );
}

export default App;
