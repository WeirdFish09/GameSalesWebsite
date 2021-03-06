export interface IUpdateUserDto {
    userId: string;
    email?: string;
    currentPassword?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    notificationViaEmail?: boolean;
    notificationViaTelegram?: boolean;
    username?: string;
}
