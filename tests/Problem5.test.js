import { describe, expect, it } from "vitest";

import uppercaseStringsContainingWaldo from "../problems/Problem5";

describe("uppercaseStringsContainingWaldo Function", () => {
	it("Basic test case: should return 'WALDO' when 'waldo' is found in the string", () => {
		const arr = ["Wheres waldo?", "I found Waldo!", "No waldo here"];
		const result = uppercaseStringsContainingWaldo(arr);
		expect(result).toEqual(["WHERES WALDO?", "NO WALDO HERE"]);
	});

	it("Empty input test case: should return an empty array when the input array is empty", () => {
		const arr = [];
		const result = uppercaseStringsContainingWaldo(arr);
		expect(result).toEqual([]);
	});

	it("Normal test case 1: should ignore mixed case strings with 'waldo'", () => {
		const arr = ["Where's Waldo?", "I found wALdo!", "No WALDO here"];
		const result = uppercaseStringsContainingWaldo(arr);
		expect(result).toEqual([]);
	});

	it("Normal test case 2: should handle special characters in the string", () => {
		const arr = ["$waldo!", "waldo@", "#waldowaldo"];
		const result = uppercaseStringsContainingWaldo(arr);
		expect(result).toEqual(["$WALDO!", "WALDO@", "#WALDOWALDO"]);
	});

	it("Complex test case: should handle long strings with multiple 'waldo' occurrences", () => {
		const arr = [
			"Where's waldo? I found Waldo!",
			"No waldo here. Waldo is hiding.",
		];
		const result = uppercaseStringsContainingWaldo(arr);
		expect(result).toEqual([
			"WHERE'S WALDO? I FOUND WALDO!",
			"NO WALDO HERE. WALDO IS HIDING.",
		]);
	});
});
