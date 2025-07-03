import type {IController, IScope} from "angular";
import {
	type DebounceService,
	DebounceServiceToken,
} from "./debounce/debounce.service";

function autocompleteController(
	this: IController,
	$scope: IScope,
	debounceService: DebounceService
) {
	const ctrl = this;

	ctrl.$onInit = () => {
		ctrl.inputId = ctrl.inputId ?? "search";
	};

	ctrl.listId = `autocomplete-list-${$scope.$id}`;

	ctrl.isFocused = false;

	ctrl.value = "";

	ctrl.onType = debounceService(() => {
		ctrl.onFetch(ctrl.value);
	}, 250);
}

autocompleteController.$inject = ["$scope", DebounceServiceToken];

export {autocompleteController};
