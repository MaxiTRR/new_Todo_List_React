import { App } from "./src/components/App/App";
import "./style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
