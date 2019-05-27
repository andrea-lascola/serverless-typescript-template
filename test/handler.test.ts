import { lambdaHandler } from "../src/handler";
import { assert } from "chai";

describe("Test function", () => {
    it("should return 200", async () => {
        const result = await lambdaHandler(null);
        assert.equal(result.statusCode, 200, "Status code != 200");
    });
});
