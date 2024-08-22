import { describe, it, expect } from "vitest";

import printIndex from "../problems/Problem1";

describe("printIndex Function", () => {
	it("Problem1 Basic Case", () => {
		// Arrange
		const array = [10, 20, 30, 40, 50];
		const index = 2; // Index is within bounds (0 to 4)

		// Act
		const result = printIndex(index, array);

		// Assert
		expect(result).toBe("Value at index 2 is 30");
	});

	it("Basic test case: should return the value at index 0 using template literals", () => {
		const array = [10, 20, 30];
		const index = 0;
		const result = printIndex(index, array);
		expect(result).toBe("Value at index 0 is 10");
	});

	it("Normal test case 1: should return the value at a positive index using concatenation", () => {
		const array = [5, 15, 25, 35];
		const index = 2;
		const result = printIndex(index, array);
		expect(result).toBe("Value at index 2 is 25");
	});
});
