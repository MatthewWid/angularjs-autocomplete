import angular from "angular";
import { apiModule } from "@/app/api/api.module";

const productModule = angular.module("product", [apiModule.name]);

export { productModule };
