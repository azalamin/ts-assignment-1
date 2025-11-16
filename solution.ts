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
	return items.reduce<Item[]>((acc, item): Item[] => {
		if (item.rating >= 4) {
			acc.push(item);
		}
		return acc;
	}, []);
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

const users = [
	{ id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
	{ id: 2, name: "Asha", email: "asha@example.com", isActive: false },
	{ id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users));
