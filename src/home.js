import { createH1, createPara } from "./webpage.js";

function displayHome() {
  const main = document.createElement("main");
  const section = document.createElement("section");
  section.className = "about";

  main.appendChild(section);
  section.appendChild(createH1("Lorem ipsum"));
  section.appendChild(
    createPara(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequatur repellat maiores nostrum maxime magni rerum perspiciatis adipisci consequuntur soluta?"
    )
  );

  return main;
}

export default displayHome;
