import { container } from "tsyringe";
import { IStackRoutesHandler, StackRoutesHandler } from "./stack/handler";

container.registerSingleton<IStackRoutesHandler>(
  "IStackRoutesHandler",
  StackRoutesHandler
);
