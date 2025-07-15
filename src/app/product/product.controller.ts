import type { IController } from "angular";
import type { RemoveIndex } from "@/types/remove-index.type";
import type { ProductInputs } from "./product.component";

type ProductController = RemoveIndex<IController> & ProductInputs;

function productController(this: ProductController) {}

export { productController };
export type { ProductController };
