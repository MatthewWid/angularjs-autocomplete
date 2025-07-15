import angular from "angular";
import { autocompleteModule } from "./autocomplete/autocomplete.module";

const appModule = angular.module("app", [autocompleteModule.name]);

export { appModule };
