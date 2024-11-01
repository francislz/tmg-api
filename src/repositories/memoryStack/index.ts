import 'reflect-metadata';
import { singleton } from "tsyringe";

export interface IMemoryStack {
  push(value: string): void;
  pop(): string | undefined;
  peek(): string | undefined;
}

@singleton()
export class MemoryStack implements IMemoryStack {
  private readonly stack: string[] = [];

  push(value: string) {
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
