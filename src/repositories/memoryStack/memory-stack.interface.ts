export interface IMemoryStack {
  push(value: any): void;
  pop(): any;
  peek(): any;
}
