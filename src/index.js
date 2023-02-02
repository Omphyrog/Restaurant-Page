import displayHome from "./home";
import displayMenu from "./menu";
import { createFooter, createHeader } from "./webpage";

const content = document.querySelector(".content");
content.appendChild(createHeader());
// content.appendChild(displayHome());
content.appendChild(displayMenu());
content.appendChild(createFooter());
