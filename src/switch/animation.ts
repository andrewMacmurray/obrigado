import { TweenMax, RoughEase, TimelineMax } from "gsap";
import { id, hidden, visible } from "../utils";

export function Play(): Promise<{}> {
  const red = id("red-joycon");
  const blue = id("blue-joycon");
  const cartman = id("cartman");
  const kyle = id("kyle");
  const craig = id("craig");
  const screen = id("screen");
  const tv = id("tv");

  return new Promise(animateAll);

  function animateAll(onComplete: (_: PromiseLike<{}>) => void) {
    const tl = new TimelineMax({ onComplete });

    flickerScreen();
    tl.add(fadeInScene());
    tl.add(playGame().duration(4));
    tl.add(fadeOutScene());
  }

  function playGame() {
    const tl = new TimelineMax();
    tl.add(moveJoycon(red), 0);
    tl.add(moveJoycon(blue), 0.8);
    tl.add(moveCharacter(craig), 0);
    tl.add(moveCharacter(kyle), 0.1);
    tl.add(moveCharacter(cartman), 0.2);
    return tl;
  }

  function fadeInScene() {
    const tl = new TimelineMax();
    tl.add(fadeInTv(), 0);
    tl.add(fadeInJoyCons(), 0.1);
    return tl;
  }

  function fadeInJoyCons() {
    const tl = new TimelineMax();
    tl.add(TweenMax.fromTo(red, 0.5, hidden, visible), 0);
    tl.add(TweenMax.fromTo(blue, 0.5, hidden, visible), 0.05);
    return tl;
  }

  function fadeInTv() {
    return TweenMax.fromTo(tv, 0.5, hidden, visible);
  }

  function flickerScreen() {
    return TweenMax.fromTo(
      screen,
      0.3,
      { fill: "#0e8aff" },
      { fill: "#5edcff", ease: RoughEase.ease.config(3) }
    ).repeat(15);
  }

  function fadeOutScene() {
    const tl = new TimelineMax();
    tl.add(TweenMax.to(tv, 0.5, hidden), 0);
    tl.add(TweenMax.to(red, 0.5, hidden), 0.1);
    tl.add(TweenMax.to(blue, 0.5, hidden), 0.2);
    return tl;
  }

  function moveJoycon(joyCon: Element) {
    return timeline([
      TweenMax.to(joyCon, 0.2, { y: -100 }),
      TweenMax.to(joyCon, 0.2, { y: 0 })
    ])
      .repeat(1)
      .repeatDelay(1.5);
  }

  function moveCharacter(character: Element) {
    return timeline([
      TweenMax.to(character, 0.2, { y: -10 }),
      TweenMax.to(character, 0.2, { y: 0 })
    ]).repeat(9);
  }
}

function timeline(steps) {
  const tl = new TimelineMax();
  steps.forEach(step => tl.add(step));
  return tl;
}
