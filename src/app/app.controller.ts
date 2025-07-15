import type { IController } from "angular";
import type { RemoveIndex } from "@/types/remove-index.type";
import type {
	AutocompleteInputs,
	AutocompleteOption,
} from "./autocomplete/autocomplete.component";
import options from "./options.mock.json";

type AppControllerFields = {
	options: AutocompleteInputs["options"];
	selectedOption: AutocompleteOption | null;
	onFetch: AutocompleteInputs["onFetch"];
	onSelect: AutocompleteInputs["onSelect"];
};

type AppController = RemoveIndex<IController> & AppControllerFields;

function appController(this: AppController) {
	const ctrl = this;

	ctrl.options = options;

	ctrl.selectedOption = null;

	ctrl.onFetch = (query) => {
		console.log("Fetching options for query:", query);
	};

	ctrl.onSelect = (option) => {
		console.log("Selected option:", option);
		ctrl.selectedOption = option;
	};
}

export { appController };
export type { AppControllerFields as AppControllerScope, AppController };
