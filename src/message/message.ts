import View from './view.html'
import * as Animation  from './animation'

export function run(scene: Element): Promise<{}> {
  scene.innerHTML = View;
  return Animation.Play();
}
