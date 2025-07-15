import type { IDirective, IScope } from "angular";
import { scopeElementModule } from "./scope-element.module";

type ScopeElementCollection = Record<string, HTMLElement | undefined>;

type ScopeElementsDirectiveScope<
	ExpectedElements extends ScopeElementCollection = ScopeElementCollection,
> = IScope & {
	scopeElements?: ExpectedElements;
};

const scopeElementDirectiveName = "scopeElement";

/**
 * Place marked elements into the current scope under the `scopeElement` namespace.
 *
 * @see {@link https://stackoverflow.com/a/41963119/2954591}
 *
 * @example
 * ```html
 * <div scope-element="myElement"></div>
 * ```
 *
 * ```typescript
 * angular.module("myModule", [scopeElementModule.name]);
 * ```
 *
 * ```typescript
 * type MyScope = { ... } & ScopeElementsDirectiveScope<{
 * 	myElement: HTMLDivElement;
 * }>;
 *
 * function MyController($scope: MyScope) {
 * 	if ($scope.scopeElements?.myElement) {
 * 		myElement.innerText = "Hello, World!";
 * 	}
 * }
 * ```
 */
function scopeElementDirective(): IDirective<ScopeElementsDirectiveScope> {
	return {
		restrict: "A",
		link: ($scope, element, attrs) => {
			const rawElement = element[0];

			if (!rawElement) {
				return;
			}

			if (!$scope.scopeElements) {
				$scope.scopeElements = {};
			}

			$scope.scopeElements[attrs[scopeElementDirectiveName]] = rawElement;
		},
	};
}

scopeElementModule.directive(scopeElementDirectiveName, scopeElementDirective);

export type { ScopeElementsDirectiveScope };
