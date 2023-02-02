import { createH1, createImg } from "./webpage";

function createMenuItem(src, text) {
  const plate = document.createElement("div");
  plate.className = "plate";

  const image = createImg(src);
  const header = createH1(text);

  plate.appendChild(image);
  plate.appendChild(header);

  return plate;
}

function displayMenu() {
  const main = document.createElement("main");
  main.className = "menu-container";

  const section = document.createElement("section");
  section.className = "menu";

  const menuHeader = document.createElement("div");
  menuHeader.className = "menu-header";

  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-picks";

  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";

  main.appendChild(section);

  section.appendChild(menuHeader);
  section.appendChild(menuContainer);
  menuHeader.appendChild(createH1("Choose your McMenú®"));
  menuContainer.appendChild(menuGrid);

  menuGrid.appendChild(createMenuItem("images/mcpollo.png", "McPollo"));
  menuGrid.appendChild(createMenuItem("images/mcpollo.png", "McPollo"));
  menuGrid.appendChild(createMenuItem("images/mcpollo.png", "McPollo"));
  menuGrid.appendChild(createMenuItem("images/mcpollo.png", "McPollo"));
  menuGrid.appendChild(createMenuItem("images/mcpollo.png", "McPollo"));
  menuGrid.appendChild(createMenuItem("images/mcpollo.png", "McPollo"));

  return main;
}

export default displayMenu;
