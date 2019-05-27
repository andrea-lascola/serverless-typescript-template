import "reflect-metadata";

import { Container } from "inversify";

/* --- Example using DI container - import interfaces/services

import TYPES from "./types";
import { ILogger, IRepository } from "./interfaces/interfaces";
import { Logger } from "./services/logger";
import { Repository } from "./services/repository";
*/

const container: Container = new Container();

/* --- Example using DI container - bind types

container.bind<ILogger>(TYPES.Logger).to(Logger);
container.bind<IRepository>(TYPES.Repository).to(Repository);
*/

export default container;
