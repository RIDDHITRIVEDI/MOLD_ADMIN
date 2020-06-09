sap.ui.jsview("hunterDoublas.HunterDoublas.view.detail", {

	getControllerName: function () {
		return "hunterDoublas.HunterDoublas.controller.detail";
	},
	createContent: function (oController) {

		var Avatar = new sap.f.Avatar(
			"Avatar", // string
			{
				src: "../../../../../../../{products>ProductPicUrl}",
				displaySize: "S",
				displayShape: "Square"
			}
		);

		var oTitleFlex = new sap.m.Title(
			"TitleFlex", 
			{
				text: "{products>first}",
				wrapping: true,
				class: "sapUiTinyMarginEnd"
			}
		);

		var oFlexBoxAvtar = new sap.m.FlexBox(
			"FlexBoxAv", // string
			{
				wrap:"NoWrap",
				fitContainer: true,
			//	alighItems: "center",
				items : [Avatar, oTitleFlex],
				class: "sapUiTinyMarginEnd"
			}
		);

		var oFlexBox = new sap.m.FlexBox(
			"FlexBox", // string
			{
				wrap: "Wrap",
				fitContainer: true,
			//	alighItems: "center",
				items: [oFlexBoxAvtar]
			}
		);

		var oExpandedHeadingText = new sap.m.Title({
			text: "{products>Last}",
			wrapping: true,
			class: "sapUiSmallMarginEnd"
		});

		var oOverflowToolbarButtonFullScreen = new sap.m.OverflowToolbarButton(
			"OverflowToolbarButtonFullScreen", {
				icon: "sap-icon://full-screen",
				tooltip: "Enter Full Screen Mode",
				visible: "{= ${/actionButtonsInfo/midColumn/fullScreen} !== null }",
				type: sap.m.ButtonType.Transparent,
				press: [function (oEvent) { /*handleFullScreen()*/ }, this]
			}
		);
		var oOverflowToolbarButtonExitFullScreen = new sap.m.OverflowToolbarButton(
			"OverflowToolbarButtonExitFullScreen", {
				icon: "sap-icon://exit-full-screen",
				tooltip: "Exit Full Screen Mode",
				visible: "{= ${/actionButtonsInfo/midColumn/exitFullScreen} !== null }",
				type: sap.m.ButtonType.Transparent,
				press: [function (oEvent) { /*handleExitFullScreen()*/ }, this]
			}
		);
		var oOverflowToolbarButtonCloseScreen = new sap.m.OverflowToolbarButton(
			"OverflowToolbarButtonClosecreen", {
				icon: "sap-icon://decline",
				tooltip: "Close column",
				visible: "{= ${/actionButtonsInfo/midColumn/closeColumn} !== null }",
				type: sap.m.ButtonType.Transparent,
				press: [function (oEvent) { /*handleClose()*/ }, this]
			}
		);

		var oButtonEdit = new sap.m.Button(
			"ButtonEdit", {
				text: "Edit",
				type: sap.m.ButtonType.Emphasized,
				press: "toggleAreaPriority"
			}
		);
		var oButtonDelete = new sap.m.Button(
			"Buttondelete", {
				text: "Delete",
				type: sap.m.ButtonType.Transparent
			}
		);
		var oButtonCopy = new sap.m.Button(
			"ButtonCopy", {
				text: "Copy",
				type: sap.m.ButtonType.Transparent
			}
		);
		var oButtonToogleFooter = new sap.m.Button(
			"ButtonToogleFooter", {
				text: "Toogle Footer",
				type: sap.m.ButtonType.Transparent,
				press: "onToggleFooter"
			}
		);
		var oButtonAction = new sap.m.Button(
			"ButtonAction", {
				type: sap.m.ButtonType.Transparent,
				icon: "sap-icon://action"
			}
		);

		var oObjectPageDynamicHeaderTitle = new sap.uxap.ObjectPageDynamicHeaderTitle(
			"ObjectPageDynamicHeaderTitle", {
				expandedHeading: [oExpandedHeadingText],
				snappedHeading: [oFlexBox],
				navigationActions: [oOverflowToolbarButtonFullScreen, oOverflowToolbarButtonExitFullScreen, oOverflowToolbarButtonCloseScreen],
				actions: [oButtonEdit, oButtonDelete, oButtonCopy, oButtonToogleFooter, oButtonAction]
			}
		);

		var oAvatarHeaderContentPic = new sap.f.Avatar(
			"AvatarHeaderContentPic", // string
			{
				src: "../../../../../../../{products>ProductPicUrl}",
				displaySize: "L",
				displayShape: "Square",
				class: "sapUiTinyMarginEnd"
			}
		);
		var oLabelMainCategory = new sap.m.Label({
			text: "Main Category"
		});
		var oTextMainCategory = new sap.m.Text({
			text: "{products>Category}"
		});

		var oVBoxMainCategory = new sap.m.VBox(
			"VBoxMainCategory", // string
			{
				//			justifyContent: "center",
				class: "sapUiSmallMarginEnd",
				Items: [oLabelMainCategory, oTextMainCategory]
			}
		);
		var oLabelSubCategory = new sap.m.Label({
			text: "SubCategory"
		});
		var oTextSubCategory = new sap.m.Text({
			text: "{products>Category}"
		});

		var oVBoxSubCategory = new sap.m.VBox(
			"VBoxSubCategory", // string
			{
				//	justifyContent: "center",
				class: "sapUiSmallMarginEnd",
				Items: [oLabelSubCategory, oTextSubCategory]
			}
		);

		var oLabelPrice = new sap.m.Label({
			text: "Price"
		});
		var oObjectNumberPrice = new sap.m.ObjectNumber(
			"ObjectNumberPrice", // string
			{
				Number: "{products>CurrencyCode} {products>Price}",
				emphasized: false
			}
		);

		var oVBoxPrice = new sap.m.VBox(
			"VBoxPrice", // string
			{
				//		justifyContent: "center",
				class: "sapUiSmallMarginEnd",
				Items: [oLabelPrice, oObjectNumberPrice]
			}
		);

		var oFlexBoxHeaderContent = new sap.m.FlexBox(
			"oFlexBoxHeaderContent", {
				wrap: "Wrap",
				fitContainer: true,
				alighItems: "Stretch",
				Items: [oAvatarHeaderContentPic, oVBoxMainCategory, oVBoxSubCategory, oVBoxPrice]
			}
		);

		var oSFLabelProdID = new sap.m.Label({
			text: "Product ID"
		});
		var oTextProdID = new sap.m.Text({
			text: "Product ID"
		});
		var oSFLabelProddesc = new sap.m.Label({
			text: "Description"
		});
		var oTextProDesc = new sap.m.Text({
			text: "Description"
		});
		var oSFLabelSupplier = new sap.m.Label({
			text: "Supplier"
		});
		var oTextSupplier = new sap.m.Text({
			text: "Supplier"
		});

		var oSimpleForm = new sap.ui.layout.form.SimpleForm(
			"SimpleForm", {
				maxContainerCols: 2,
				editable: false,
				layout: "ResponsiveGridLayout",
				labelSpanL: 12,
				labelSpanM: 12,
				emptySpanL: 0,
				emptySpanM: 0,
				columnsL: 1,
				columnsM: 1,
				content: [oSFLabelProdID, oTextProdID, oSFLabelProddesc, oTextProDesc, oSFLabelSupplier, oTextSupplier]
			}
		);
	
		var oObjectPageSubSection = new sap.uxap.ObjectPageSubSection(
			"ObjectPageSubSection", // string
			{
				blocks: [oSimpleForm]
			}
		);
	

		var oObjectPageSection = new sap.uxap.ObjectPageSection(
			"ObjectPageSection", // string
			{
				title: "General Information",
				subSections: [oObjectPageSubSection]
			}
		);
		
			var oTableFI = new sap.m.Table(
			"TableNew", {
				items: [],
				width: "auto"

			}
		);
		
		function createColumnsCI() {
			oTableFI.addColumn(new sap.m.Column({
				
				width: "90%"
			}));

			oTableFI.bindItems("Operations>/Operations", new sap.m.ColumnListItem({
				type: sap.m.ListType.Navigation,
				press: [oController.onListItemPress, oController],
				cells: [
					new sap.m.ObjectIdentifier({
						title: "{Operations>Name}"
					})
					
				]
			}));
		}

		createColumnsCI();
		
			var oObjectPageSubSectionSuppliers = new sap.uxap.ObjectPageSubSection(
			"ObjectPageSubSectionSuppliers", // string
			{
				blocks: [oTableFI]
			}
		);
			var oObjectPageSectionSupplier = new sap.uxap.ObjectPageSection(
			"ObjectPageSectionSupplier", // string
			{
				title : "Supplier",
				subSections: [oObjectPageSubSectionSuppliers]
			}
		);
 
		var oPageLayout = new sap.uxap.ObjectPageLayout(
			"PageLayout", {
				showTitleInHeaderContent: true,
				alwaysShowContentHeader: false,
				showFooter: true,
				preserveHeaderStateOnScroll: false,
				headerContentPinnable: true,
				isChildPage: true,
				upperCaseAnchorBar: false,
				headerTitle: [oObjectPageDynamicHeaderTitle],
				headerContent: [oFlexBoxHeaderContent],
				sections: [oObjectPageSection, oObjectPageSectionSupplier]
			}
		);
		return oPageLayout;
	}
});