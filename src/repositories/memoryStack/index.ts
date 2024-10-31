import 'reflect-metadata';

import { IMemoryStack } from "./memory-stack.interface";
import { singleton } from "tsyringe";

@singleton()
export class MemoryStack implements IMemoryStack {
  private stack: any[] = [];

  push(value: any) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}
