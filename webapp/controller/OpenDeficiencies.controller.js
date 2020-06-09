sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("hunterDoublas.HunterDoublas.controller.OpenDeficiencies", {

		onInit: function (evt) {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.getRoute("OpenDeficiencies").attachPatternMatched(this._onProductMatched, this);
		},

		_onProductMatched: function (oEvent) {
			var navCon = sap.ui.getCore().byId("navCon");
			switch (oEvent.getParameter("arguments").Value || this._Value || "0") {
			case "0":
				navCon.to(sap.ui.getCore().byId("PageOpenDeficiencies"));
				break;
			case "1":
				navCon.to(sap.ui.getCore().byId("PageStatus"));
				break;
			case "2":
				navCon.to(sap.ui.getCore().byId("PageSamplingStatus"));
				break;
			case "3":
				navCon.to(sap.ui.getCore().byId("PageCloseDeficiencies"));
				break;
			case "4":
				navCon.to(sap.ui.getCore().byId("PageInspectionStatus"));
				break;
			case "5":
				navCon.to(sap.ui.getCore().byId("PagePurchasing"));
				break;
			case "6":
				navCon.to(sap.ui.getCore().byId("PagePartHistory"));
				break;
			case "7":
				navCon.to(sap.ui.getCore().byId("PageHistoricalSamples"));
				break;
			case "8":
				navCon.to(sap.ui.getCore().byId("PageMachine"));
				break;
			case "9":
				navCon.to(sap.ui.getCore().byId("PageMoldSpecs"));
				break;
			case "10":
				navCon.to(sap.ui.getCore().byId("PageProcessData"));
				break;
			case "11":
				navCon.to(sap.ui.getCore().byId("PageMoldHistory"));
				break;

			}

		}

	});

});