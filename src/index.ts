import * as Chess from "./chess/controller";
import * as Switch from "./switch/controller";
import * as Bbq from "./bbq/controller";

const sceneContainer = document.getElementById("scene");

Bbq.Init(sceneContainer, () =>
  Chess.Init(sceneContainer, () =>
    Switch.Init(sceneContainer, () => console.log("done"))
  )
);
