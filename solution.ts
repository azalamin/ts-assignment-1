type SupportedValue = string | number | boolean;

const formatValue = (value: SupportedValue): SupportedValue => {
	if (typeof value === "string") {
		return value.toUpperCase();
	}

	if (typeof value === "number") {
		return value * 10;
	}

	return !value;
};

const getLength = (value: string | unknown[]): number => {
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
		return `'Name: ${this.name}, Age: ${this.age}'`;
	}
}

interface Item {
	title: string;
	rating: number;
}

const filterByRating = (items: Item[]): Item[] => {
	return items.filter(item => item.rating >= 4);
};

interface User {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
}

const filterActiveUsers = (users: User[]) => {
	return users.filter(user => user.isActive);
};

interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
	const { title, author, publishedYear, isAvailable } = book;
	console.log(
		`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
			isAvailable ? "Yes" : "No"
		}`
	);
};

const getUniqueValues = <T>(arr1: T[], arr2: T[]): T[] => {
	const merged: T[] = [...arr1, ...arr2];
	let uniqueValues: T[] = [];
	for (let i = 0; i < merged.length; i++) {
		let foundIndex = -1;

		for (let j = 0; j < uniqueValues.length; j++) {
			if (merged[i] === uniqueValues[j]) {
				foundIndex = j;
				break;
			}
		}

		if (foundIndex == -1) {
			uniqueValues.push(merged[i]);
		}
	}

	return uniqueValues;
};

interface Product {
	name: string;
	price: number;
	quantity: number;
	discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
	return products.reduce((total, product) => {
		const basePrice = product.price * product.quantity;
		const discountMultiplier = product.discount !== undefined ? 1 - product.discount / 100 : 1;

		return total + basePrice * discountMultiplier;
	}, 0);
};
