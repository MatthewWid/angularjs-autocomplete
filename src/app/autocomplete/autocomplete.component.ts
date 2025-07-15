import { autocompleteController } from "./autocomplete.controller";
import { autocompleteModule } from "./autocomplete.module";
import template from "./autocomplete.template.html?raw";
import "./autocomplete.style.scss";

type AutocompleteOption = {
	id: number;
	title: string;
};

type AutocompleteInputs = {
	/**
	 * ID for input element.
	 *
	 * @default "autocomplete-input"
	 */
	inputId?: string;

	/**
	 * Placeholder text for input element.
	 *
	 * @default "Search..."
	 */
	inputPlaceholder?: string;

	/**
	 * List of suggestions to display.
	 */
	options: AutocompleteOption[];

	/*
	 * Callback function to fetch suggestions.
	 */
	onFetch: (query: string) => Promise<void>;

	/**
	 * Callback function when an option is selected.
	 */
	onSelect: (option: AutocompleteOption) => void;

	/**
	 * Callback function when the options list is closed.
	 */
	onClose: () => void;
};

autocompleteModule.component("autocomplete", {
	template,
	controller: autocompleteController,
	bindings: {
		inputId: "@",
		inputPlaceholder: "@",
		options: "=",
		onFetch: "<",
		onSelect: "<",
		onClose: "<",
	},
});

export type { AutocompleteOption, AutocompleteInputs };
