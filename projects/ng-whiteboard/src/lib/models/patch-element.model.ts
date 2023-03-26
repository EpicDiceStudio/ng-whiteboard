import { WhiteboardElement } from './whiteboard-element.model';

export interface IPatchElement {
  element: WhiteboardElement;
  triggerEvents?: boolean;
}
