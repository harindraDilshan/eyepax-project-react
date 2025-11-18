import { Configuration, PopupRequest } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "c98378f2-3f81-45e6-a9a9-dd9925e5d69f", // From Azure portal
    authority: "https://login.microsoftonline.com/c7886144-869f-423d-a018-9158602dc467",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest: PopupRequest = {
  scopes: ["User.Read", "Calendars.ReadWrite"],
};