import angular from "angular";
import { debounceModule } from "./debounce/debounce.module";
import { scopeElementModule } from "./scope-element/scope-element.module";

const autocompleteModule = angular.module("autocomplete", [
	debounceModule.name,
	scopeElementModule.name,
]);

export { autocompleteModule };
