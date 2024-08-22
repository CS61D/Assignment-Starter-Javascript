import { describe, expect, it } from "vitest";

import namesAndAges from "../problems/Problem6";

describe("namesAndAges Function", () => {
	it("Basic test case: should combine names and ages into an array of objects", () => {
		const names = ["Alice", "Bob", "Charlie"];
		const ages = [25, 30, 35];
		const result = namesAndAges(names, ages);
		expect(result).toEqual([
			{ name: "Alice", age: 25 },
			{ name: "Bob", age: 30 },
			{ name: "Charlie", age: 35 },
		]);
	});

	it("Empty input test case: should return an empty array when both input arrays are empty", () => {
		const names = [];
		const ages = [];
		const result = namesAndAges(names, ages);
		expect(result).toEqual([]);
	});

	it("Normal test case 1: should handle mixed case names and ages", () => {
		const names = ["alice", "BoB", "CHARLIE"];
		const ages = [25, 30, 35];
		const result = namesAndAges(names, ages);
		expect(result).toEqual([
			{ name: "alice", age: 25 },
			{ name: "BoB", age: 30 },
			{ name: "CHARLIE", age: 35 },
		]);
	});

	it("Normal test case 2: should handle special characters in names", () => {
		const names = ["$John", "@Mary", "#Anna"];
		const ages = [30, 25, 28];
		const result = namesAndAges(names, ages);
		expect(result).toEqual([
			{ name: "$John", age: 30 },
			{ name: "@Mary", age: 25 },
			{ name: "#Anna", age: 28 },
		]);
	});

	it("Complex test case: should handle long arrays of names and ages", () => {
		const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
		const ages = [25, 30, 35, 40, 45];
		const result = namesAndAges(names, ages);
		expect(result).toEqual([
			{ name: "Alice", age: 25 },
			{ name: "Bob", age: 30 },
			{ name: "Charlie", age: 35 },
			{ name: "David", age: 40 },
			{ name: "Eva", age: 45 },
		]);
	});
});
