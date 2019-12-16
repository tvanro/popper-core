// @flow
import type { Rect } from '../types';

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
export default (element: HTMLElement): Rect => ({
  x: element.offsetLeft,
  y: element.offsetTop,
  width: element.offsetWidth,
  height: element.offsetHeight,
});