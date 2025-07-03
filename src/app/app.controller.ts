import type {IController} from "angular";
import type {AutocompleteInputs} from "./autocomplete/autocomplete.component";

function appController(this: IController) {
	const ctrl = this;

	const onSelect: AutocompleteInputs["onSelect"] = (option) => {
		console.log("Selected value:", option);
	};

	ctrl.onSelect = onSelect;
}

export {appController};
