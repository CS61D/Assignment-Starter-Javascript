import { describe, expect, it } from "vitest";

import doubleAge from "../problems/Problem7";

describe("doubleAge Function", () => {
	it("Basic test case: should double the age property when it exists and is a number", () => {
		const input = '{"name": "Alice", "age": 30}';
		const result = doubleAge(input);
		expect(result).toEqual({ name: "Alice", age: 60 });
	});

	it("Empty input test case: should add an age property with value 0 when it doesn't exist", () => {
		const input = '{"name": "Bob"}';
		const result = doubleAge(input);
		expect(result).toEqual({ name: "Bob", age: 0 });
	});

	it("Normal test case 1: should handle negative age and double it", () => {
		const input = '{"name": "Charlie", "age": -25}';
		const result = doubleAge(input);
		expect(result).toEqual({ name: "Charlie", age: -50 });
	});

	it("Normal test case 2: should handle age as a float and double it", () => {
		const input = '{"name": "David", "age": 35.5}';
		const result = doubleAge(input);
		expect(result).toEqual({ name: "David", age: 71 });
	});

	it("Complex test case: should handle other properties and return an object with doubled age", () => {
		const input = '{"name": "Eva", "age": 40, "city": "New York"}';
		const result = doubleAge(input);
		expect(result).toEqual({ name: "Eva", age: 80, city: "New York" });
	});

	it("Large test case 1: should double the age property in a large object", () => {
		const input =
			'{"name": "Alice", "age": 30, "city": "London", "job": "Engineer", "hobbies": ["Reading", "Traveling"]}';
		const result = doubleAge(input);
		expect(result).toEqual({
			name: "Alice",
			age: 60,
			city: "London",
			job: "Engineer",
			hobbies: ["Reading", "Traveling"],
		});
	});

	it("Large test case 2: should add an age property with value 0 in a large object without it", () => {
		const input =
			'{"name": "Bob", "city": "Paris", "job": "Designer", "hobbies": ["Painting", "Cooking"]}';
		const result = doubleAge(input);
		expect(result).toEqual({
			name: "Bob",
			age: 0,
			city: "Paris",
			job: "Designer",
			hobbies: ["Painting", "Cooking"],
		});
	});

	it("Large test case 3: should double the age property in a large object with nested objects", () => {
		const input =
			'{"name": "Charlie", "age": 25, "address": { "street": "123 Main St", "city": "Berlin" }, "projects": [{ "name": "Project A", "progress": 75 }, { "name": "Project B", "progress": 90 }]}';
		const result = doubleAge(input);
		expect(result).toEqual({
			name: "Charlie",
			age: 50,
			address: { street: "123 Main St", city: "Berlin" },
			projects: [
				{ name: "Project A", progress: 75 },
				{ name: "Project B", progress: 90 },
			],
		});
	});
});
