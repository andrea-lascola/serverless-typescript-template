import "source-map-support/register";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

/* --- Example using DI container - logger - repository

import container from "./inversify.config";
import { IRepository, ILogger } from "./interfaces/interfaces";
import TYPES from "./types";
import { Example } from "./models/example";
*/

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  console.log("start");

  /* --- Example using DI container

  const repo = container.get<IRepository>(TYPES.Repository);
  console.log("got repo from container");

  const logger = container.get<ILogger>(TYPES.Logger);
  console.log("got logger from container");

  const model: Example = repo.get(Example);
  logger.debug(`Account ok: ${model != null}`);
  logger.debug("Dependencies are wired correctly");
  */

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless Webpack (Typescript) v2.0! Your function executed successfully!",
      input: event,
    }, null, 2),
  };
};

export const lambdaHandler = handler;
