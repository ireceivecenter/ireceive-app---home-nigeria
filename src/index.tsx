import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeNigeria } from "./screens/HomeNigeria";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomeNigeria />
  </StrictMode>,
);
