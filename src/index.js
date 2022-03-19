import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Recipt from "./routes/Recipt";
import Header from "./Header";
import Home from "./routes/Home";
import Blogs from "./routes/Blog";
import Contact from "./routes/Contact";
import Login from "./routes/Login";



const rootElement = document.getElementById("root");
render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Recipt" element={<Recipt />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </div>,
  rootElement
);