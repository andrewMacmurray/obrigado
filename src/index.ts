import * as Chess from "./chess/chess";
import * as Switch from "./switch/switch";
import * as Bbq from "./bbq/bbq";
import * as Message from './message/message'

const scene = document.getElementById("scene");

// Chess.run(scene)

Bbq.run(scene)
  .then(() => Chess.run(scene))
  .then(() => Switch.run(scene))
  .then(() => Message.run(scene))
