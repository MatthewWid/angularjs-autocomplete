import { debounceModule } from "./debounce.module";

type DebounceService = <Args extends unknown[]>(
	callback: (...args: Args) => void,
	delay: number,
) => typeof callback;

const DebounceServiceToken = "autocomplete.debounceService";

debounceModule.factory(
	DebounceServiceToken,
	(): DebounceService => (callback, delay) => {
		let timeoutId: ReturnType<typeof setTimeout> | undefined;

		return (...args) => {
			clearTimeout(timeoutId);

			timeoutId = setTimeout(() => {
				callback(...args);
			}, delay);
		};
	},
);

export { DebounceServiceToken };
export type { DebounceService };
