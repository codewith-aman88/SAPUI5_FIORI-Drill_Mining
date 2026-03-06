sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.capgemini.z3698miningjson.controller.View1", {
        onInit() {
        },

         onListItemPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oCtx = oItem.getBindingContext("minerals");
            var sLocationId = oCtx.getProperty("LocationID");
 
            this.getOwnerComponent().getRouter().navTo("RouteDetails", {
                locationId: sLocationId
            });
        }
 

    });
});