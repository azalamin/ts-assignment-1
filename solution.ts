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
	return users.reduce<User[]>((acc, user): User[] => {
		if (user.isActive) {
			acc.push(user);
		}
		return acc;
	}, []);
};

interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
	console.log(
		`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`
	);
};

const getUniqueValues = (arr1: any[], arr2: any[]) => {
	return [...arr1, ...arr2].reduce((acc, item) => {
		if (!acc.includes(item)) {
			acc.push(item);
		}
		return acc;
	}, []);
};
