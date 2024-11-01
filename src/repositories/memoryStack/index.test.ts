import { MemoryStack } from './index';

describe('MemoryStack tests', () => {
  let memoryStack: MemoryStack;

  beforeEach(() => {
    memoryStack = new MemoryStack();
  });

  it('should push a value to the stack', () => {
    memoryStack.push("1");
    expect(memoryStack.peek()).toBe("1");
  });

  it('should pop a value from the stack', () => {
    memoryStack.push("1");
    expect(memoryStack.pop()).toBe("1");
  });

  it('should peek at the top of the stack', () => {
    memoryStack.push("1");
    memoryStack.push("2");
    expect(memoryStack.peek()).toBe("2");
  });

  it('should return undefined when popping an empty stack', () => {
    expect(memoryStack.pop()).toBeUndefined();
  });
});
