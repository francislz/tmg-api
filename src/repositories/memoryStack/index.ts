import 'reflect-metadata';
import { singleton } from "tsyringe";

export interface IMemoryStack {
  push(value: any): void;
  pop(): any;
  peek(): any;
}

@singleton()
export class MemoryStack implements IMemoryStack {
  private readonly stack: any[] = [];

  push(value: any) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    if (this.stack.length === 0) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }
}
