import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormatType, formatTypes, IAddImage, WhiteboardElement } from './models';
import { IAddElement } from './models/add-element.model';
import { IRemoveElement } from './models/remove-element.model';
import { IUpdateElement } from './models/update-element.model';

@Injectable({
  providedIn: 'root',
})
export class NgWhiteboardService {
  // Observable string sources
  private eraseSvgMethodCallSource = new Subject<void>();
  private saveSvgMethodCallSource = new Subject<{ name: string; format: formatTypes }>();
  private undoSvgMethodCallSource = new Subject<void>();
  private redoSvgMethodCallSource = new Subject<void>();
  private addImageMethodCallSource = new Subject<IAddImage>();
  private addElementMethodCallSource = new Subject<IAddElement>();
  private removeElementMethodCallSource = new Subject<IRemoveElement>();
  private updateElementMethodCallSource = new Subject<IUpdateElement>();

  // Observable string streams
  eraseSvgMethodCalled$ = this.eraseSvgMethodCallSource.asObservable();
  saveSvgMethodCalled$ = this.saveSvgMethodCallSource.asObservable();
  undoSvgMethodCalled$ = this.undoSvgMethodCallSource.asObservable();
  redoSvgMethodCalled$ = this.redoSvgMethodCallSource.asObservable();
  addImageMethodCalled$ = this.addImageMethodCallSource.asObservable();
  addElementMethodCalled$ = this.addElementMethodCallSource.asObservable();
  removeElementMethodCalled$ = this.removeElementMethodCallSource.asObservable();
  updateElementMethodCalled$ = this.updateElementMethodCallSource.asObservable();

  // Service message commands
  public erase(): void {
    this.eraseSvgMethodCallSource.next();
  }
  public save(format: formatTypes = FormatType.Base64, name: string = 'New board'): void {
    this.saveSvgMethodCallSource.next({ name, format });
  }
  public undo(): void {
    this.undoSvgMethodCallSource.next();
  }
  public redo(): void {
    this.redoSvgMethodCallSource.next();
  }
  public addImage(image: string | ArrayBuffer, x?: number, y?: number): void {
    this.addImageMethodCallSource.next({ image, x, y });
  }
  public addElement(element: WhiteboardElement, triggerEvents = false): void {
    this.addElementMethodCallSource.next({ element, triggerEvents });
  }
  public removeElement(id: string, triggerEvents = false): void {
    this.removeElementMethodCallSource.next({ id, triggerEvents });
  }
  public updateElement(element: WhiteboardElement, triggerEvents = false): void {
    this.updateElementMethodCallSource.next({ element, triggerEvents });
  }
}
