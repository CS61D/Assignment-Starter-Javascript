import { describe, expect, it } from "vitest";

import multiplyBy from "../problems/Problem3";

describe("multiplyBy Function", () => {
	it("Basic test case: should multiply each element by 2", () => {
		const arr = [1, 2, 3];
		const multiplier = 2;
		const result = multiplyBy(arr, multiplier);
		expect(result).toEqual([2, 4, 6]);
	});

	it("Empty input test case: should return an empty array when the input array is empty", () => {
		const arr = [];
		const multiplier = 5;
		const result = multiplyBy(arr, multiplier);
		expect(result).toEqual([]);
	});

	it("Normal test case 1: should multiply each element by 0.5", () => {
		const arr = [10, 20, 30];
		const multiplier = 0.5;
		const result = multiplyBy(arr, multiplier);
		expect(result).toEqual([5, 10, 15]);
	});

	it("Normal test case 2: should multiply negative numbers by -1", () => {
		const arr = [-3, -7, -2];
		const multiplier = -1;
		const result = multiplyBy(arr, multiplier);
		expect(result).toEqual([3, 7, 2]);
	});

	it("Complex test case: should multiply each element by 100", () => {
		const arr = [0.01, 0.05, 0.1];
		const multiplier = 100;
		const result = multiplyBy(arr, multiplier);
		expect(result).toEqual([1, 5, 10]);
	});
});
