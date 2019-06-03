import * as Animation from './animation'
import View from './view.html'

export function Init(sceneContainer: Element, onComplete: () => void) {
  appendView()
  animate()

  function appendView() {
    sceneContainer.innerHTML = View
  }

  function animate() {
    Animation.Play(onComplete)
  }
}
