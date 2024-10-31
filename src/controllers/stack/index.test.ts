import 'reflect-metadata';
import { MemoryStack } from "@repositories/memoryStack";
import { StackController } from '.';

describe('StackController tests', () => {
  let memoryStack: MemoryStack;
  let controller: StackController;

  beforeEach(() => {
    memoryStack = new MemoryStack();
    controller = new StackController(memoryStack);
  });

  it('should push a value to the stack', async () => {
    await controller.push(1);
    expect(memoryStack.peek()).toBe(1);
  });

  it('should pop a value from the stack', async () => {
    await controller.push(1);
    await controller.push(2);
    const top = await controller.pop();
    expect(top).toBe(2);
    expect(memoryStack.peek()).toBe(1);
  });

  it('should peek at the top of the stack', async () => {
    await controller.push(1);
    expect(await controller.peek()).toBe(1);
  });

  it('should throw an error when poping an empty stack', async () => {
    await expect(async () => controller.pop()).rejects.toThrow('Stack is empty');
  });

  it('should throw an error when peeking an empty stack', async () => {
    await expect(async () => controller.peek()).rejects.toThrow('Stack is empty');
  });
});
