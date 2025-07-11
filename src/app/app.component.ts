import { appController } from "./app.controller";
import { appModule } from "./app.module";
import template from "./app.template.html?raw";
import "./app.style.scss";

appModule.component("app", {
	template,
	controller: appController,
});
