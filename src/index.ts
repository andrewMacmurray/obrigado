import * as Chess from "./chess/controller";
import * as Switch from "./switch/controller";

const sceneContainer = document.getElementById("scene");

Chess.Init(sceneContainer, () =>
  Switch.Init(sceneContainer, () => console.log("done"))
);
