import { TweenMax, Bounce, TimelineMax, Power2, Elastic } from "gsap";
import { id, hidden, visible, shuffle } from "../utils";

export function Play(): Promise<{}> {
  const fire = id("fire");

  const pinecones = [
    "pinecone-1",
    "pinecone-3",
    "pinecone-2",
    "pinecone-4"
  ].map(id);

  const logs = [
    "fire-log-1",
    "fire-log-2",
    "fire-log-3",
    "fire-log-4",
    "fire-log-5"
  ].map(id);

  const smokeTrails = [
    "smoke-trail-1",
    "smoke-trail-3",
    "smoke-trail-2",
    "smoke-trail-4"
  ].map(id);

  const fish = ["fish-1", "fish-2", "fish-3"].map(id);

  return new Promise(animateAll);

  function animateAll(onComplete) {
    const tl = new TimelineMax({ onComplete });

    tl.add(fallLogs());
    tl.add(fallPinecones(), 0.8);
    tl.add(riseSmoke());
    tl.add("fish", "-=0.75");
    tl.add(riseSmoke(), "-=0.5");
    tl.add(riseSmoke(), "-=0.5");
    tl.add(riseSmoke(), "-=0.5");
    tl.add(enterFish(), "fish");
    tl.add(fadeOut());
    return tl;
  }

  function fadeOut() {
    const tl = new TimelineMax();
    tl.staggerTo([fish[0], fish[2], fish[1]], 0.5, hidden, 0.1, 0);
    tl.to(fire, 0.5, hidden, 0.3);
    return tl;
  }

  function enterFish() {
    return TweenMax.staggerFromTo(
      fish,
      1,
      { ...hidden, y: -200 },
      { ...visible, y: 0, ease: Elastic.easeOut.config(2, 1) },
      0.5
    );
  }

  function riseSmoke() {
    const tl = new TimelineMax();
    shuffle(smokeTrails).forEach((trail, i) => {
      tl.add(riseTrail(trail), i * 0.1);
    });
    return tl;
  }

  function riseTrail(trail) {
    const tl = new TimelineMax();
    const tl2 = new TimelineMax();
    tl.fromTo(trail, 0.5, hidden, visible).to(trail, 0.8, hidden);

    tl2.add(tl, 0);
    tl2.fromTo(trail, 1.3, { y: 150 }, { y: -25, ease: Power2.easeOut }, 0);

    return tl2;
  }

  function fallLogs() {
    return TweenMax.staggerFromTo(
      logs,
      0.8,
      { ...hidden, y: -300 },
      { ...visible, y: 0, ease: Bounce.easeOut },
      0.05
    );
  }

  function fallPinecones() {
    return TweenMax.staggerFromTo(
      pinecones,
      0.8,
      { ...hidden, y: -400 },
      { ...visible, y: 0, ease: Bounce.easeOut },
      0.15
    );
  }
}
