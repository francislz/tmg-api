import { container } from "tsyringe";
import { IStackRoutesHandler, StackRoutesHandler } from "./stack/handler";
import { CacheRoutesHandler, ICacheRoutesHandler } from "./cache/handler";

container.registerSingleton<IStackRoutesHandler>(
  "IStackRoutesHandler",
  StackRoutesHandler
);

container.registerSingleton<ICacheRoutesHandler>(
  "ICacheRoutesHandler",
  CacheRoutesHandler
);
