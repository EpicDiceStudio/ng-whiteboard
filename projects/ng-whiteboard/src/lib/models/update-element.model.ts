import { WhiteboardElement } from './whiteboard-element.model';

export interface IUpdateElement {
  element: WhiteboardElement;
  triggerEvents?: boolean;
}
