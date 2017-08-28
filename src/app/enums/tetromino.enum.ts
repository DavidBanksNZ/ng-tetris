export enum TetrominoType {
	L = 'L',
	O = 'O',
	Z = 'Z',
	S = 'S',
	T = 'T',
	I = 'I',
	J = 'J'
}

export const tetrominoEnumKeys = Object.keys(TetrominoType).filter(key => isNaN(Number(key)));
