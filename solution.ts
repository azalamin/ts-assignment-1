type FormatData = string | number | boolean;

const formatValue = (value: FormatData): FormatData => {
	if (typeof value === "string") {
		return value.toUpperCase();
	}

	if (typeof value === "number") {
		return value * 10;
	}

	return !value;
};

const getLength = (value: string | any[]): number => {
	if (Array.isArray(value)) {
		return value.length;
	}

	return value.length;
};

class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getDetails(): string {
		return `Name: ${this.name}, Age: ${this.age}`;
	}
}
