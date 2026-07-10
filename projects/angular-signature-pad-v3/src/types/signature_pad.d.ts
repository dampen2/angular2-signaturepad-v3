declare module 'signature_pad' {
  export interface SignaturePadOptions {
    minWidth?: number;
    maxWidth?: number;
    throttle?: number;
    minDistance?: number;
    backgroundColor?: string;
    penColor?: string;
    velocityFilterWeight?: number;
    [option: string]: any;
  }

  export interface SignatureEvent {
    event: MouseEvent | TouchEvent | PointerEvent;
    type: string;
    x: number;
    y: number;
    pressure: number;
  }

  export type SignaturePadEventName = 'beginStroke' | 'endStroke' | 'beforeUpdateStroke' | 'afterUpdateStroke';

  export interface Point {
    x: number;
    y: number;
    pressure?: number;
    time: number;
  }

  export type PointGroup = Point[];

  export default class SignaturePad {
    public canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement, options?: SignaturePadOptions);

    public addEventListener(type: SignaturePadEventName, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    public clear(): void;
    public fromData(pointGroups: PointGroup[]): void;
    public fromDataURL(dataUrl: string, options?: any): void;
    public isEmpty(): boolean;
    public off(): void;
    public on(): void;
    public toData(): PointGroup[];
    public toDataURL(type?: string, encoderOptions?: number): string;
    public removeEventListener(type: SignaturePadEventName, callback: EventListenerOrEventListenerObject | null, options?: boolean | EventListenerOptions): void;
    [property: string]: any;
  }
}
