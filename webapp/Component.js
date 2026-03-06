sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/capgemini/z3698miningjson/model/models",
    "sap/ui/model/json/JSONModel"
], (UIComponent, models, JSONModel)  => {
    "use strict";

    return UIComponent.extend("com.capgemini.z3698miningjson.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {


            UIComponent.prototype.init.apply(this, arguments);
 
            var sUrl = sap.ui.require.toUrl("com/capgemini/z3698miningjson/model/minerals.json");
 
            var oModel = new JSONModel(sUrl);
            this.setModel(oModel, "minerals");
 
            // set the device model
            this.setModel(models.createDeviceModel(), "device");
 
            // enable routing
            this.getRouter().initialize();

        }
    });
});


