export const importTonDependencies = async () => {
	const ton = await import('ton');

	const { beginCell, Dictionary, Builder, Slice, BitString, Cell, Address } =
		ton;

	(window as any).beginCell = beginCell;
	(window as any).Dictionary = Dictionary;
	(window as any).Builder = Builder;
	(window as any).Slice = Slice;
	(window as any).BitString = BitString;
	(window as any).Cell = Cell;
	(window as any).Address = Address;

	return {
		beginCell,
		Dictionary,
		Builder,
		Slice,
		BitString,
		Cell,
		Address,
	};
};
