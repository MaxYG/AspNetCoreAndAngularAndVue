"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var i18n_providers_1 = require("./i18n-providers");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
i18n_providers_1.getTranslationProviders().then(function (providers) {
    var options = { providers: providers };
    platform.bootstrapModule(app_module_1.AppModule, options);
});
//# sourceMappingURL=main.js.map