import { MemoryStack } from '@repositories/memoryStack';
import { injectable } from 'tsyringe';
import { EmptyStackError } from '@exceptions/stack';

export interface IStackController {
  push(value: any): Promise<void>;
  pop(): Promise<any>;
  peek(): Promise<any>;
}

@injectable()
export class StackController implements IStackController {
  constructor(private readonly stack: MemoryStack) {}

  async push(value: any): Promise<void> {
    this.stack.push(value);
  }

  async pop(): Promise<any> {
    const data = this.stack.pop();
    if (!data) {
      throw new EmptyStackError();
    }
    return data;
  }

  async peek(): Promise<any> {
    const data = this.stack.peek();
    if (!data) {
      throw new EmptyStackError();
    }
    return data;
  }

}
