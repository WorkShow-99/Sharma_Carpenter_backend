

export const user = (state) => state.user.user;

export const loading = (state) => state.user.loading;

export const error = (state) => state.user.error;

export const isAuthenticated = (state) => state.user.isAuthenticated;

export const isGoogleAuthenticated = (state) => state.user.isGoogleAuthenticated; // New selector for Google auth status

export const isEmailAuthenticated = (state) => state.user.isEmailAuthenticated; // New selector for email auth status

export const userId = (state) => state.user.user?.userId;

export const userEmail = (state) => state.user.user?.email;

export const userName = (state) => state.user.user?.name;

export const userDisplayName = (state) => state.user.user?.displayName;

export const userPhotoURL = (state) => state.user.user?.photoURL;



