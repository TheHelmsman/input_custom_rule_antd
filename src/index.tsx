import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const Application = document.getElementById("container");
if (Application) createRoot(Application).render(<App />);
