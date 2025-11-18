import { Client } from "@microsoft/microsoft-graph-client";
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { InteractionType, PublicClientApplication } from "@azure/msal-browser";
import { loginRequest } from "../config/authConfig";

export class GraphService {
  private client: Client | null = null;

  constructor(private msalInstance: PublicClientApplication) {}

  async initializeClient() {
    const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(
      this.msalInstance,
      {
        account: this.msalInstance.getActiveAccount()!,
        scopes: loginRequest.scopes,
        interactionType: InteractionType.Popup,
      }
    );

    this.client = Client.initWithMiddleware({ authProvider });
  }

  async createCalendarEvent(
    subject: string,
    startDate: string,
    endDate: string,
    body: string,
    isAllDay: boolean = true,
    category?: string
  ) {
    if (!this.client) await this.initializeClient();

    const event = {
      subject,
      body: {
        contentType: "HTML",
        content: body,
      },
      start: {
        dateTime: startDate,
        timeZone: "UTC",
      },
      end: {
        dateTime: endDate,
        timeZone: "UTC",
      },
      isAllDay,
      categories: category ? [category] : [],
    };

    return await this.client!.api("/me/calendar/events").post(event);
  }

  async getCalendarEvents(startDate: string, endDate: string) {
    if (!this.client) await this.initializeClient();

    return await this.client!
      .api("/me/calendar/calendarView")
      .query({
        startDateTime: startDate,
        endDateTime: endDate,
      })
      .select("subject,start,end,categories,body")
      .get();
  }

  async deleteCalendarEvent(eventId: string) {
    if (!this.client) await this.initializeClient();
    return await this.client!.api(`/me/calendar/events/${eventId}`).delete();
  }
}