sap.ui.jsview("hunterDoublas.HunterDoublas.view.FlexibleColumnLayout", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf hunterDoublas.HunterDoublas.view.FlexibleColumnLayout
	 */
	getControllerName: function () {
		return "hunterDoublas.HunterDoublas.controller.FlexibleColumnLayout";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf hunterDoublas.HunterDoublas.view.FlexibleColumnLayout
	 */
	createContent: function (oController) {
		var oBar = new sap.m.Bar({
			id: 'barMain',
			contentLeft: [new sap.m.Button({
					id: 'B-logOutP1',
					type: sap.m.ButtonType.Transparent, //sap.m.ButtonType.Back,
					icon: "sap-icon://log",
					enabled: true,
					press: function () {}
				}),
				new sap.m.Label({
					id: 'L_User',
					width: '100%',
					text: 'Riddhi Trivedi'
				}).addStyleClass("ClassForLabelUserName")
			],
			contentMiddle: [new sap.m.Label({
				id: 'L_AppName',
				fontSize: "200px",
				width: '100%',
				text: 'MOLD ADMINISTRATION'
			}).addStyleClass("ForFormName")],
			contentRight: [new sap.m.Image({
				id: 'companyLogo',
				src: "Images/newlogo_dark.png",
				width: "200px",
				press: function () {}
			})]
		});

		var oFlexibleColumnLayout = new sap.f.FlexibleColumnLayout(
			{
				id : "FlexibleColumnLayout",
				// enableScrolling : false,
				layout: "{/layout}", // sap.f.LayoutType
				backgroundDesign: sap.m.BackgroundDesign.Solid, // sap.m.BackgroundDesign
				stateChange: [oController.onStateChanged, oController] // function|array
			});

		var oPage = new sap.m.Page({
			title: "Title",
			 
			height : "100%",
			content: [oFlexibleColumnLayout]
		});
		
			var app = new sap.m.App(this.createId("app"), {
			initialPage: "oPage"
		});
			oPage.setCustomHeader(oBar);
		app.addPage(oPage); 
	

		return app;
	}

});