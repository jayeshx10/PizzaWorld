import "./styles.css";

import { Header } from "/src/components/Header";
import { useEffect } from "react";
import { fakeFetch } from "/src/api/fakeFetch";

export default function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
