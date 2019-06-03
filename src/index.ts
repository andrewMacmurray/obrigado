import * as Chess from "./chess/chess";
import * as Switch from "./switch/switch";
import * as Bbq from "./bbq/bbq";

const scene = document.getElementById("scene");

Bbq.run(scene)
  .then(() => Chess.run(scene))
  .then(() => Switch.run(scene));
