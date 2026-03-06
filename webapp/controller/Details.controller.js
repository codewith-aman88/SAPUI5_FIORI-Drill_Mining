sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
 
    return Controller.extend("com.capgemini.z3698miningjson.controller.Details", {
        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteDetails").attachPatternMatched(this._onObjectMatched, this);
        },
 
        _onObjectMatched: function (oEvent) {
 
            var sLocationId = oEvent.getParameter("arguments").locationId;
            var oView = this.getView();
 
            // Find the index of the location
            var oModel = this.getOwnerComponent().getModel("minerals");
            var aLocations = oModel.getProperty("/Locations");
 
            var iIndex = aLocations.findIndex(loc => loc.LocationID === sLocationId);
            if (iIndex !== -1) {
                var sPath = "/Locations/" + iIndex;
                oView.bindElement({
                    path: sPath,
                    model: "minerals"
                });
            }
        }
    });
});