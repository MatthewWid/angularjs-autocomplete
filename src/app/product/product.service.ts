import {
	type ApiService,
	ApiServiceToken,
	type PaginatedResponse,
} from "@/app/api/api.service";
import { productModule } from "./product.module";
import type { Product } from "./product.type";

const ProductServiceToken = "product.productService";

function productServiceFactory(apiService: ApiService) {
	return {
		/**
		 * @see {@link https://dummyjson.com/docs/products#products-all}
		 */
		getAll: () =>
			apiService
				.fetch<PaginatedResponse<{ products: Product[] }>>("/products")
				.then((response) => response.products),
		/**
		 * @see {@link https://dummyjson.com/docs/products#products-search}
		 */
		getSome: (query: string) =>
			apiService
				.fetch<PaginatedResponse<{ products: Product[] }>>("/products/search", {
					params: { q: query },
				})
				.then((response) => response.products),
		/**
		 * @see {@link https://dummyjson.com/docs/products#products-single}
		 */
		getOneById: (id: number) => apiService.fetch<Product>(`/products/${id}`),
	};
}

productServiceFactory.$inject = [ApiServiceToken];

type ProductService = ReturnType<typeof productServiceFactory>;

productModule.factory(ProductServiceToken, productServiceFactory);

export { ProductServiceToken };
export type { ProductService };
