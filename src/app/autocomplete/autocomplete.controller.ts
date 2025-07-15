import type { IController, IScope } from "angular";
import type { RemoveIndex } from "@/types/remove-index.type";
import type {
	AutocompleteInputs,
	AutocompleteOption,
} from "./autocomplete.component";
import {
	type DebounceService,
	DebounceServiceToken,
} from "./debounce/debounce.service";
import type { ScopeElementsDirectiveScope } from "./scope-element/scope-element.directive";

type AutocompleteControllerFields = {
	listId: string;
	searchText: string;
	isExpanded: boolean;
	focusedOption: AutocompleteOption | null;
	isLoading: boolean;
	onBlur: (event: FocusEvent) => void;
	onChange: (event: KeyboardEvent) => void;
	onClear: (event: MouseEvent) => void;
	onKeyDown: (event: KeyboardEvent) => void;
	onSubmit: (event?: Event) => void;
};

type AutocompleteController = RemoveIndex<IController> &
	AutocompleteInputs &
	AutocompleteControllerFields;

type Scope = IScope &
	ScopeElementsDirectiveScope<{
		"autocomplete-input": HTMLInputElement;
	}>;

function autocompleteController(
	this: AutocompleteController,
	$scope: Scope,
	debounceService: DebounceService,
) {
	const ctrl = this;

	ctrl.$onInit = () => {
		ctrl.inputId = ctrl.inputId ?? "autocomplete-input";
		ctrl.inputPlaceholder = ctrl.inputPlaceholder ?? "Search...";
	};

	ctrl.listId = `autocomplete-list-${$scope.$id}`;

	ctrl.searchText = "";

	ctrl.isExpanded = false;

	ctrl.focusedOption = null;

	ctrl.isLoading = false;

	ctrl.onBlur = (event) => {
		if (
			event.relatedTarget &&
			(event.relatedTarget as HTMLElement).getAttribute("role") === "option"
		) {
			return;
		}

		ctrl.isExpanded = false;
	};

	ctrl.onChange = debounceService(() => {
		ctrl.onFetch(ctrl.searchText);
	}, 250);

	ctrl.onClear = () => {
		ctrl.searchText = "";

		ctrl.focusedOption = null;

		$scope.scopeElements?.["autocomplete-input"]?.focus();
	};

	ctrl.onKeyDown = (event) => {
		switch (event.key) {
			case "Enter": {
				ctrl.onSubmit();

				break;
			}
			case "Escape": {
				$scope.scopeElements?.["autocomplete-input"]?.blur();

				break;
			}
			case "ArrowDown": {
				event.preventDefault();

				if (ctrl.focusedOption) {
					const currentIndex = ctrl.options.indexOf(ctrl.focusedOption);

					const nextOption = ctrl.options[currentIndex + 1];

					if (nextOption) {
						ctrl.focusedOption = nextOption;
					}
				} else {
					ctrl.focusedOption = ctrl.options[0] ?? null;
				}

				break;
			}
			case "ArrowUp": {
				event.preventDefault();

				if (ctrl.focusedOption) {
					const currentIndex = ctrl.options.indexOf(ctrl.focusedOption);

					const previousOption = ctrl.options[currentIndex - 1];

					if (previousOption) {
						ctrl.focusedOption = previousOption;
					}
				} else {
					ctrl.focusedOption = ctrl.options[ctrl.options.length - 1] ?? null;
				}

				break;
			}
		}
	};

	ctrl.onSubmit = (event) => {
		if (ctrl.focusedOption) {
			if (event) {
				event.preventDefault();
			}

			ctrl.searchText = ctrl.focusedOption.title;

			ctrl.isExpanded = false;

			ctrl.onSelect(ctrl.focusedOption);
		}
	};

	$scope.$watch("$ctrl.isExpanded", (isExpanded) => {
		if (!isExpanded) {
			ctrl.focusedOption = null;
		}
	});
}

autocompleteController.$inject = ["$scope", DebounceServiceToken];

export { autocompleteController };
export type { AutocompleteControllerFields, AutocompleteController };
