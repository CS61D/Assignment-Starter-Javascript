import { describe, expect, it } from "vitest";

import largestMystery from "../problems/Problem2";

describe("largestMystery Function", () => {
	it("Basic test case: should return the largest number when all numbers pass the mystery function", () => {
		const arr = [10, 20, 30, 40];
		const mysteryFunc = (num) => num % 10 === 0; // Returns true for multiples of 10
		const result = largestMystery(arr, mysteryFunc);
		expect(result).toBe(40);
	});

	it("Empty input test case: should return Number.NEGATIVE_INFINITY for an empty array", () => {
		const arr = [];
		const mysteryFunc = (num) => num < 0; // Always returns false
		const result = largestMystery(arr, mysteryFunc);
		expect(result).toBe("No number passes the function!");
	});

	it("Normal test case 1: should return the largest positive number that passes the mystery function", () => {
		const arr = [5, 15, 25, 35];
		const mysteryFunc = (num) => num % 5 === 0; // Returns true for multiples of 5
		const result = largestMystery(arr, mysteryFunc);
		expect(result).toBe(35);
	});

	it("Normal test case 2: should return Number.NEGATIVE_INFINITY when no number passes the mystery function", () => {
		const arr = [-1, -2, -3, -4];
		const mysteryFunc = (num) => num > 10; // Always returns false
		const result = largestMystery(arr, mysteryFunc);
		expect(result).toBe("No number passes the function!");
	});

	it("Complex test case: should return the largest negative number that passes the mystery function", () => {
		const arr = [-5, 15, 25, 35];
		const mysteryFunc = (num) => num < 0; // Returns true for negative numbers
		const result = largestMystery(arr, mysteryFunc);
		expect(result).toBe(-5);
	});

	it("Test case: should return the largest even number in the array", () => {
		const arr = [3, 7, 2, 8, 6, 1];
		const mysteryFunc = (num) => num % 2 === 0; // Returns true for even numbers
		const result = largestMystery(arr, mysteryFunc);
		expect(result).toBe(8);
	});

	it("Test case: should return the largest odd number in the array", () => {
		const arr = [2, 4, 6, 1, 3, 5];
		const mysteryFunc = (num) => num % 2 !== 0; // Returns true for odd numbers
		const result = largestMystery(arr, mysteryFunc);
		expect(result).toBe(5);
	});

	it("Test case: should return the largest negative number in the array", () => {
		const arr = [-1, -5, -2, -8, -3];
		const mysteryFunc = (num) => num < 0; // Returns true for negative numbers
		const result = largestMystery(arr, mysteryFunc);
		expect(result).toBe(-1);
	});

	it("Test case: should return the largest positive number less than 50", () => {
		const arr = [30, 40, 60, 70, 20];
		const mysteryFunc = (num) => num < 50; // Returns true for numbers less than 50
		const result = largestMystery(arr, mysteryFunc);
		expect(result).toBe(40);
	});
});
