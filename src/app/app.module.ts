import angular from "angular";
import { autocompleteModule } from "./autocomplete/autocomplete.module";
import { productModule } from "./product/product.module";

const appModule = angular.module("app", [
	productModule.name,
	autocompleteModule.name,
]);

export { appModule };
