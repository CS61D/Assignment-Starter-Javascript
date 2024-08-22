import { describe, expect, it } from "vitest";

import indexAndConcat from "../problems/Problem4";

describe("indexAndConcat Function", () => {
	it("Basic test case: should concatenate index with each string", () => {
		const arr = ["a", "b", "c"];
		const result = indexAndConcat(arr);
		expect(result).toEqual(["0a", "1b", "2c"]);
	});

	it("Empty input test case: should return an empty array when the input array is empty", () => {
		const arr = [];
		const result = indexAndConcat(arr);
		expect(result).toEqual([]);
	});

	it("Normal test case 1: should handle mixed character strings", () => {
		const arr = ["apple", "banana", "cherry"];
		const result = indexAndConcat(arr);
		expect(result).toEqual(["0apple", "1banana", "2cherry"]);
	});

	it("Normal test case 2: should handle strings with special characters", () => {
		const arr = ["$100", "@user", "#hashtag"];
		const result = indexAndConcat(arr);
		expect(result).toEqual(["0$100", "1@user", "2#hashtag"]);
	});

	it("Complex test case: should handle long strings", () => {
		const arr = [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Suspendisse non erat ut sapien condimentum fringilla.",
		];
		const result = indexAndConcat(arr);
		expect(result).toEqual([
			"0Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"1Suspendisse non erat ut sapien condimentum fringilla.",
		]);
	});
});
