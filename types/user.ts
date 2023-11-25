export interface IUser {
  id: string | null;
  user_account_registered_with: string | null;
  user_account_email_address: string | null;
  user_account_user_name: string | null | null;
  user_account_password: string | null;
  user_account_first_name: string | null | null;
  user_account_last_name: string | null | null;
  user_account_phone_number: string | null | null;
  user_account_gender: string | null;
  user_account_more_about_gender: string | null;
  user_account_show_gender: boolean | null;
  user_account_date_of_birth: string | null;
  user_account_physical_address: string | null;
  user_account_profile_picture_url: string | null;
  user_account_profile_picture_url_id: string | null;
  user_account_profile_picture_verified: boolean | null;
  user_account_profile_is_completed: boolean | null;
  user_account_is_verified: boolean | null;
  user_account_is_online: boolean | null;
  user_account_is_active: boolean | null;
  user_account_is_locked: boolean | null;
  user_account_is_reported: boolean | null;
  user_account_requested_inactive_status: boolean | null;
  user_account_is_fake: boolean | null;
  user_account_verification_code: string | null;
  user_account_verification_code_created_at: string | null;
  user_account_verification_code_expiry_at: string | null;
  user_account_password_reset_code: string | null;
  user_account_password_reset_code_created_at: string | null;
  user_account_password_reset_code_expiry_at: string | null;
  user_account_information_created_at: string | null;
  user_account_information_updated_at: string | null;
  user_account_information_deleted_at: string | null;
  user_account_gallery_information: IUserGallerInformation[] | null;
  user_account_location_information: IUserAccountLocationInformation[] | null;
  user_account_lifeStyle_information: string | null;
  user_account_background_information: IUserAccountBackgroundInformation[] | null;
  user_account_about_information: string | null;
  user_account_appearance_information: string | null;
}

interface IUserGallerInformation {
  id: string | null;
  user_account_media_url: string | null;
  user_account_media_url_Id: string | null;
  user_account_media_type: string | null;
  user_account_information_Id: string | null;
  user_account_media_created_at: string | null
  user_account_media_updated_at: string | null
}

interface IUserAccountLocationInformation {
  id: string | null;
  user_account_location_country: string | null;
  user_account_location_state: string | null;
  user_account_location_city: string | null;
  user_account_information_Id: string | null;
}

interface IUserAccountBackgroundInformation {
  id: string | null;
  user_background_nationality: string | null;
  user_background_education: string | null;
  user_background_language: string | null;
  user_background_english_ability: string | null;
  user_background_french_ability: string | null;
  user_background_religion: string | null;
  user_background_star_sign: string | null;
  user_account_information_Id: string | null;
}
