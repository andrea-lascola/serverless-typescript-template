import * as types from "../src/types";
import { assert } from "chai";

describe("Types module", () => {
    it("did load", async () => {
        assert.isNotNull(types, "Null types definition");
    });
});