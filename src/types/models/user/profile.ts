export interface IUpdateProfile {
  name: string;
  username: string;
}

// GET PROFILE

export interface IGetProfile {
  id: number;
  name: string;
  username: string;
  role: string;
  profile_image: string;
}

export interface IGetProfileResponse {
  success: boolean;
  data: IGetProfile;
}
