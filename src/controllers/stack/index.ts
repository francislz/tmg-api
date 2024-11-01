import { MemoryStack } from '@repositories/memoryStack';
import { injectable } from 'tsyringe';
import { EmptyStackError } from '@exceptions/stack';

export interface IStackController {
  push(value: string): Promise<void>;
  pop(): Promise<string>;
  peek(): Promise<string>;
}

@injectable()
export class StackController implements IStackController {
  constructor(private readonly stack: MemoryStack) {}

  async push(value: string): Promise<void> {
    this.stack.push(value);
  }

  async pop(): Promise<string> {
    const data = this.stack.pop();
    if (!data) {
      throw new EmptyStackError();
    }
    return data;
  }

  async peek(): Promise<string> {
    const data = this.stack.peek();
    if (!data) {
      throw new EmptyStackError();
    }
    return data;
  }

}
