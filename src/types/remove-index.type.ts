/**
 * Remove all index signatures from a type.
 *
 * @see {@link https://stackoverflow.com/a/66252656/2954591}
 */
type RemoveIndex<Type> = {
	[Key in keyof Type as string extends Key
		? never
		: number extends Key
			? never
			: symbol extends Key
				? never
				: Key]: Type[Key];
};

export type { RemoveIndex };
