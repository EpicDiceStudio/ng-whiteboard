import { WhiteboardElement } from './whiteboard-element.model';

export interface IAddElement {
  element: WhiteboardElement;
  triggerEvents?: boolean;
}
