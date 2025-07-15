import type { IController, IScope } from "angular";
import type { RemoveIndex } from "@/types/remove-index.type";
import type { AutocompleteInputs } from "./autocomplete/autocomplete.component";
import {
	type ProductService,
	ProductServiceToken,
} from "./product/product.service";
import type { Product } from "./product/product.type";

type AppControllerFields = {
	options: AutocompleteInputs["options"];
	products: Record<string, Product>;
	selectedProduct: Product | null;
	onFetch: AutocompleteInputs["onFetch"];
	onSelect: AutocompleteInputs["onSelect"];
	onClose: AutocompleteInputs["onClose"];
};

type AppController = RemoveIndex<IController> & AppControllerFields;

type Scope = IScope;

function appController(
	this: AppController,
	$scope: Scope,
	productService: ProductService,
): void {
	const ctrl = this;

	ctrl.options = [];

	ctrl.products = {};

	ctrl.selectedProduct = null;

	ctrl.onFetch = (query) =>
		productService.getSome(query).then((products) => {
			$scope.$applyAsync(() => {
				const newOptions: typeof ctrl.options = [];

				for (const product of products) {
					ctrl.products[product.id] = product;

					newOptions.push({
						id: product.id,
						title: product.title,
					});
				}

				ctrl.options = newOptions;
			});
		});

	ctrl.onSelect = (option) => {
		ctrl.selectedProduct = ctrl.products[option.id] ?? null;
	};

	ctrl.onClose = () => {
		ctrl.options = [];
	};
}

appController.$inject = ["$scope", ProductServiceToken];

export { appController };
export type { AppControllerFields as AppControllerScope, AppController };
