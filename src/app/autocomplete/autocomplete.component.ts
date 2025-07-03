import {autocompleteController} from "./autocomplete.controller";
import {autocompleteModule} from "./autocomplete.module";
import template from "./autocomplete.template.html?raw";
import "./autocomplete.style.scss";

type AutocompleteInputs = {
	/**
	 * ID for input element.
	 *
	 * @default "search"
	 */
	inputId?: string;

	/**
	 * Placeholder text for input element.
	 */
	inputPlaceholder?: string;

	/**
	 * List of suggestions to display.
	 */
	options: string[];

	/*
	 * Callback function to fetch suggestions.
	 */
	onFetch: (query: string) => void;

	/**
	 * Callback function when an option is selected.
	 */
	onSelect: (option: string) => void;
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
	},
});

export type {AutocompleteInputs};
