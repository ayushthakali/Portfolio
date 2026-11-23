import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Enables scroll-reveal styles only once JavaScript is running.
document.documentElement.classList.add("js-reveal");

createRoot(document.getElementById("root")).render(<App />);
