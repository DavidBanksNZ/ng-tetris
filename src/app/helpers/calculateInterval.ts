export function calculateInterval (level: number): number {
	return Math.max(1, 10 - level) * 50;
}
