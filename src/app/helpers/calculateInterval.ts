export function calculateInterval (level: number): number {
	return 100 + Math.max(0, 10 - level) * 50;
}
