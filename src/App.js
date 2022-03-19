import { useState } from 'react'
import { Link, Redirect } from "react-router-dom";
import Login from './routes/Login.js'
import Header from "./Header";


export default function App() {
  const [loggedIn, setLoggedin] = useState();
  return (
    <div>
      <Header />

      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Recipt">Recipt</Link> |{" "}
        <Link to="/Contact">Contact</Link>
      </nav>
      
    </div>
  );
}