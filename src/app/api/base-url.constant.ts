import { apiModule } from "./api.module";

const BaseUrlToken = "api.baseUrl";

apiModule.constant(BaseUrlToken, "https://dummyjson.com");

export { BaseUrlToken };
