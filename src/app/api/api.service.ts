import type { IHttpService, IRequestConfig } from "angular";
import type { Optional } from "@/types/optional.type";
import { apiModule } from "./api.module";
import { BaseUrlToken } from "./base-url.constant";

type PaginatedResponse<Fields = Record<string, never>> = Fields & {
	total: number;
	skip: number;
	limit: number;
};

type RequestOptions = Omit<Optional<IRequestConfig, "method">, "url">;

const ApiServiceToken = "api.apiService";

function apiServiceFactory($http: IHttpService, baseUrl: string) {
	return {
		fetch: async <Response>(path: string, options: RequestOptions = {}) => {
			const { method = "GET" } = options;

			const url = new URL(path, baseUrl);

			return $http<Response>({
				...options,
				url: url.toString(),
				method,
			}).then((response) => response.data);
		},
	};
}

apiServiceFactory.$inject = ["$http", BaseUrlToken];

type ApiService = ReturnType<typeof apiServiceFactory>;

apiModule.factory(ApiServiceToken, apiServiceFactory);

export { ApiServiceToken };
export type { ApiService, PaginatedResponse };
