import { TweenMax, Bounce, TimelineMax, Elastic } from "gsap";
import { id, shuffle, hidden, visible } from "../utils";

type Player = "black" | "white";

export function Play(): Promise<{}> {
  const whitePieces = Array.from(id("white-pieces").children);
  const blackPieces = Array.from(id("black-pieces").children);
  const whitePawn = id("white-pawn-1");
  const blackPawn = id("black-pawn-1");
  const whiteBishop = id("white-bishop");
  const blackQueen = id("black-queen");
  const handle = id("handle");
  const counter = id("counter");

  return new Promise(resolve => animateAll(resolve));

  function animateAll(onComplete: (_: PromiseLike<{}>) => void) {

    const tl = new TimelineMax({ onComplete });

    counter.addEventListener('click', () => tl.pause())
    tl.add(enterPieces(blackPieces), 0);
    tl.add(fadeInCounter(), 0.1);
    tl.add(enterPieces(whitePieces), 0.2);
    tl.add(movePiece(whitePawn, "white", -150), 1.1);
    tl.add(movePiece(blackPawn, "black", 150));
    tl.add(movePiece(whiteBishop, "white", -420));
    tl.add(movePiece(blackQueen, "black", 240));
    tl.add(fadeAllPieces(), "+=0.5");
    tl.add(fadeOutCounter(), "-=0.4");
  }

  function enterPieces(pieces: Node[]): Animation[] {
    return TweenMax.staggerFromTo(
      pieces,
      0.5,
      { y: -400, opacity: 0 },
      { y: 0, opacity: 1, ease: Bounce.easeOut },
      0.02
    );
  }

  function fadeInCounter() {
    return TweenMax.fromTo(counter, 0.5, hidden, visible);
  }

  function movePiece(piece: Node, player: Player, distance: number) {
    const tl = new TimelineMax();
    const ease = Elastic.easeOut.config(2, 2);
    const pieceTo = TweenMax.to(piece, 0.5, { x: distance, ease });

    tl.add(moveHandle(player), 0);
    tl.add(pieceTo, 0);
    return tl;
  }

  function moveHandle(player: Player) {
    const config = { transformOrigin: "center" };
    return player === "white"
      ? TweenMax.to(handle, 0.2, { ...config, rotation: 2 })
      : TweenMax.to(handle, 0.2, { ...config, rotation: -2 });
  }

  function fadeAllPieces() {
    const shuffled = shuffle(whitePieces.concat(blackPieces));
    return TweenMax.staggerTo(shuffled, 0.25, hidden, 0.03);
  }

  function fadeOutCounter() {
    return TweenMax.to(counter, 0.5, hidden);
  }
}
