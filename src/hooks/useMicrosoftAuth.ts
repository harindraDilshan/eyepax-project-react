import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/authConfig';

export const useMicrosoftAuth = () => {
  const { instance, accounts, inProgress } = useMsal();

  const login = async () => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    instance.logoutPopup();
  };

  const getAccessToken = async () => {
    if (accounts.length === 0) {
      throw new Error('No accounts found');
    }

    try {
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      });
      return response.accessToken;
    } catch (error) {
      // If silent token acquisition fails, try popup
      const response = await instance.acquireTokenPopup(loginRequest);
      return response.accessToken;
    }
  };

  return {
    login,
    logout,
    getAccessToken,
    isAuthenticated: accounts.length > 0,
    account: accounts[0],
    inProgress,
  };
};