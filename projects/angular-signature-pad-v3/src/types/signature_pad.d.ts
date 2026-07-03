declare module 'signature_pad' {
  export interface SignaturePadOptions {
    minWidth?: number;
    maxWidth?: number;
    throttle?: number;
    minDistance?: number;
    backgroundColor?: string;
    penColor?: string;
    velocityFilterWeight?: number;
    onBegin?: (event: MouseEvent | TouchEvent) => void;
    onEnd?: (event: MouseEvent | TouchEvent) => void;
    [option: string]: any;
  }

  export interface Point {
    x: number;
    y: number;
    time: number;
  }

  export type PointGroup = Point[];

  export default class SignaturePad {
    public canvas: HTMLCanvasElement;
    public onBegin?: (event: MouseEvent | TouchEvent) => void;
    public onEnd?: (event: MouseEvent | TouchEvent) => void;

    constructor(canvas: HTMLCanvasElement, options?: SignaturePadOptions);

    public clear(): void;
    public fromData(pointGroups: PointGroup[]): void;
    public fromDataURL(dataUrl: string, options?: any): void;
    public isEmpty(): boolean;
    public off(): void;
    public on(): void;
    public toData(): PointGroup[];
    public toDataURL(type?: string, encoderOptions?: number): string;
    [property: string]: any;
  }
}
