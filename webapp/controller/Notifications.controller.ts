/* eslint-disable @typescript-eslint/no-unsafe-call */
import BaseController from "uxc/integration/controller/BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";

// UI5 Web Components
import WebCFIllustratedMessage from "@ui5/webcomponents-fiori/dist/IllustratedMessage";
import WebCFNotificationList from "@ui5/webcomponents-fiori/dist/NotificationList";

// Icons & Illustrations
import "@ui5/webcomponents-icons/dist/sort";
import "@ui5/webcomponents-icons/dist/action-settings";
import "@ui5/webcomponents-icons/dist/crm-sales";
import "@ui5/webcomponents-icons/dist/expense-report";
import "@ui5/webcomponents-fiori/dist/illustrations/NoNotifications";

/**
 * @namespace uxc.integration.controller
 */
export default class Notifications extends BaseController {
	public onClearAllNotifications(): void {
		const oView = this.getView();
		const oNotificationList = oView.byId("notificationsPopoverList") as unknown as WebCFNotificationList;
		const oEmptyMessage = oView.byId("emptyNotificationsMessage") as unknown as WebCFIllustratedMessage;

		// @ts-expect-error: WebCFNotificationList does not have a setVisible method
		if (oNotificationList && oNotificationList.setVisible) {
			// @ts-expect-error: WebCFNotificationList does not have a setVisible method
			oNotificationList.setVisible(false);
		}

		// @ts-expect-error: WebCFIllustratedMessage does not have a setVisible method
		if (oEmptyMessage && oEmptyMessage.setVisible) {
			// @ts-expect-error: WebCFIllustratedMessage does not have a setVisible method
			oEmptyMessage.setVisible(true);
		}

		const oAppViewModel = this.getView().getModel("appView") as JSONModel;
		if (oAppViewModel) {
			oAppViewModel.setProperty("/notificationsCount", 0);
		}
	}
}
