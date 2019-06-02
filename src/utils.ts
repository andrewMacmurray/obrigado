export function id(selector: string): Element {
  return document.getElementById(selector);
}

export function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}
