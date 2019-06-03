import * as Animation from "./animation";
import View from "./view.html";

export function run(scene: Element): Promise<{}> {
  scene.innerHTML = View;
  return Animation.Play();
}
