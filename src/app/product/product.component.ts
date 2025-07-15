import { productModule } from "./product.module";
import template from "./product.template.html?raw";
import type { Product } from "./product.type";
import "./product.style.scss";
import { productController } from "./product.controller";

type ProductInputs = {
	product: Product;
};

productModule.component("product", {
	template,
	controller: productController,
	bindings: {
		product: "=",
	},
});

export type { ProductInputs };
