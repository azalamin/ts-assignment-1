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
