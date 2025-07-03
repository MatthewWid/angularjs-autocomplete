import angular from "angular";
import { debounceModule } from "./debounce/debounce.module";

const autocompleteModule = angular.module("autocomplete", [
	debounceModule.name,
]);

export { autocompleteModule };
