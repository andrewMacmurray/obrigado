import { TweenMax, TimelineMax, Elastic } from "gsap";
import { id, hidden, visible } from "../utils";

export function Play(): Promise<{}> {
  const [m1, m2, m3, m4, m5] = Array.from(id("messages").children);

  return new Promise(animateAll);

  function animateAll(onComplete: (_: PromiseLike<{}>) => void) {
    const tl = new TimelineMax({ onComplete });
    tl.add(enterMessage(m1));
    tl.add(enterMessage(m2));
    tl.add(enterMessage(m3), "+=0.5");
    tl.add(enterMessage(m4), "-=0.8");
    tl.add(enterMessage(m5), "-=0.8");
  }

  function enterMessage(message: Element) {
    return TweenMax.fromTo(
      message,
      1.5,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, ease: Elastic.easeOut.config(3, 3) }
    );
  }
}
