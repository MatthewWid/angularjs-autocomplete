import { productModule } from "./product.module";

productModule.filter(
	"productCategory",
	() => (category: string) =>
		category
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" "),
);
