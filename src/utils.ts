export function id(selector: string): Element {
  return document.getElementById(selector);
}

export function shuffle<T>(array: T[]): T[] {
  return array.concat().sort(() => Math.random() - 0.5);
}

export const visible = { opacity: 1 };
export const hidden = { opacity: 0 };
