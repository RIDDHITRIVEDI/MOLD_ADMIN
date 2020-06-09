sap.ui.jsview("hunterDoublas.HunterDoublas.view.MasterView", {

	getControllerName: function () {
		return "hunterDoublas.HunterDoublas.controller.MasterView";
	},

	createContent: function (oController) {
		/*	var oOverflowToolbarButtonFirst = new sap.m.OverflowToolbarButton(
				"OverflowToolbarButtonFirst", {
					type: sap.m.ButtonType.Transparent,
					icon: "sap-icon://add", // sap.ui.core.URI
					press: [function (oEvent) {}, this]
				}
			); */

		var oToolBarSpacer = new sap.m.ToolbarSpacer({
			id: "ToolbarSpacer"
		});

		var oSelect = new sap.m.Select({
			id: "Select"
		});

		var oItem1 = new sap.ui.core.ListItem({
			text: "By MOLD#"
		});
		sap.ui.getCore().byId('Select').addItem(oItem1);
		var oItem2 = new sap.ui.core.ListItem({
			text: "By Family Mold#"
		});
		sap.ui.getCore().byId('Select').addItem(oItem2);
		var oItem3 = new sap.ui.core.ListItem({
			text: "By Drawing#"
		});
		sap.ui.getCore().byId('Select').addItem(oItem3);

		var oSearchField = new sap.m.SearchField({
			id: "SearchField",
			width: "10rem"
		});

		var oOverflowToolbarButtonSecond = new sap.m.OverflowToolbarButton(
			"OverflowToolbarButtonSecond", {
				type: sap.m.ButtonType.Transparent,
				icon: "sap-icon://sort", // sap.ui.core.URI
				press: [function (oEvent) {}, this]
			}
		);
		var oOverflowToolbar = new sap.m.OverflowToolbar(
			"overFlowToolBar", {
				content: [oToolBarSpacer, oSelect, oSearchField, oOverflowToolbarButtonSecond]
			}
		);
	


		var oTableFI = new sap.m.Table(
			"Table", {
				items: [],
				width: "auto",
				headerToolbar: new sap.m.OverflowToolbar({
					id: "headerToolBar",
					width: "100%",
					content: [oOverflowToolbar]
				})
			}
		);

		function createColumnsCI() {
			oTableFI.addColumn(new sap.m.Column({
				header: new sap.m.Label({
					text: "FirstName"
				}),
				width: "90%"
			}));
			oTableFI.addColumn(new sap.m.Column({
				header: new sap.m.Label({
					text: "LastName"
				}),
				width: "10%"
			}));

			oTableFI.bindItems("products>/results", new sap.m.ColumnListItem({
				type: sap.m.ListType.Navigation,
				press: [oController.onListItemPress, oController],
				cells: [
					new sap.m.ObjectIdentifier({
						title: "{products>first}",
						text: "{products>Last}"
					}),
					new sap.m.Text({
						text: "{products>first}"
					})
				]
			}));
		}

		createColumnsCI();
			var oButtonUpdPRT = new sap.m.Button(
			"ButtonUpdPRT", {
				text: "Update PRT# From SAP",
				type: sap.m.ButtonType.Transparent
			}
		);
		var oButtonNewPRT = new sap.m.Button(
			"ButtonNewPRT", {
				text: "Get New PRT# From SAP",
				type: sap.m.ButtonType.Transparent
			}
		);
		
		var oTtile = new sap.f.DynamicPageTitle(
			"DynamicTitle", {
				heading: [new sap.m.Title({
					width: "10rem",
					text: "Search"
				})],
				actions: [oButtonUpdPRT, oButtonNewPRT]
			}
		);
		

		var oDynamicPage_Master = new sap.f.DynamicPage(
			"dynamicPage_Master", {
				title: [oTtile],
				content: [oTableFI]
			}
		);
		return oDynamicPage_Master;
	}

});