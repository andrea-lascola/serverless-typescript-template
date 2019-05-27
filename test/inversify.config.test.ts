import * as config from "../src/inversify.config";
import { assert } from "chai";

describe("Container config module", () => {
    it("did load", async () => {
        assert.isNotNull(config, "Null inversify container config definition");
    });
});
