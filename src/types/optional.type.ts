/**
 * Make one or many properties of a type optional.
 *
 * @see {@link https://stackoverflow.com/a/61108377/2954591}
 */
type Optional<Type, Key extends keyof Type> = Pick<Partial<Type>, Key> &
	Omit<Type, Key>;

export type { Optional };
