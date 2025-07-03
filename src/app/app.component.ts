import {appModule} from "./app.module";
import template from "./app.template.html?raw";
import "./app.style.scss";
import {appController} from "./app.controller";

appModule.component("app", {
	template,
	controller: appController,
});
