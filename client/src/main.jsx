import { createRoot } from "react-dom/client";
import { SessionProvider } from "./context/SessionProvider.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <SessionProvider>
    <App />
  </SessionProvider>
);
