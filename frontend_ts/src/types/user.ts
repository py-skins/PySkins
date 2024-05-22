export interface UserRequestData {
  message: string;
  nUser: number;
  userType: number;
  userWorkerType: number;
  userFirstName: string;
  userSecondName: string;
  userLastName: string;
  userBULSTAT: string;
  userFirmName: string;
  userEmail: string;
  accToken: string;
  refreshToken: string;
  expiresIn: string;
}

export interface UserType {
  isAuthenticated: boolean;
  refresh: string;
  access: string;
  budget: number;
  email: string;
  //=============================
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  profilePicture: string;
  //=============================
  userSkinCollection: [];
  //=============================
  userId: number;
}
