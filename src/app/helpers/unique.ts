export function unique<T> (values: T[]): T[] {
	if (values.length === 0) {
		return [];
	}
	const uniqueValues = [values[0]];
	for (let i = 1, n = values.length; i < n; i++) {
		if (uniqueValues.indexOf(values[i]) === -1) {
			uniqueValues.push(values[i]);
		}
	}
	return uniqueValues;
}
