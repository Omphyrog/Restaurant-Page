function createPara(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function createH1(text) {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
}

function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  const div = document.createElement("div");

  const img = document.createElement("img");
  img.src = "/dist/images/mcdonalds-logo.svg";

  const nav = document.createElement("nav");
  nav.className = "navbar";

  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.id = "home";
  menuBtn.id = "menu";
  contactBtn.id = "contact";

  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  header.appendChild(div);
  header.appendChild(nav);

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  div.appendChild(img);

  return header;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.textContent = "Made by Omphyrog";

  return footer;
}

function createImg(src) {
  const img = document.createElement("img");
  img.src = src;
  return img;
}

export { createPara, createH1, createFooter, createHeader, createImg };
