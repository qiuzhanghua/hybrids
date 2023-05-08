import "./style.css";
import typescriptLogo from "./typescript.svg";
import hybridsLogo from "./hybrids.svg";
import viteLogo from "./vite.svg";
import "./SimpleCounter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
     <a href="https://hybrids.js.org/" target="_blank">
      <img src="${hybridsLogo}" class="logo" alt="Hybrids logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + Hybrids + TS</h1>
    <p class="read-the-docs">
      Click on the logos above to learn more
    </p>
    <simple-counter count="9"></simple-counter>
  </div>
`;
