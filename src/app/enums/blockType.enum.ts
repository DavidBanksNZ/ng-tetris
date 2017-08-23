export enum BlockType {
	Long = 'long',
	Square = 'square',
	ZigZag = 'zig-zag',
	ReverseZigZag = 'reverse-zig-zag',
	Pyramid = 'pyramid',
	L = 'l',
	ReverseL = 'reverse-l'
}

export const blockTypeEnumKeys = Object.keys(BlockType).filter(key => isNaN(Number(key)));
