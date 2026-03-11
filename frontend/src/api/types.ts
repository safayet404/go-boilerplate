
import type { ServerInferRequest } from "@ts-rest/core";
import { apiContract } from "../../../packages/openapi/src/contracts";

export type TRequests = ServerInferRequest<typeof apiContract>;
