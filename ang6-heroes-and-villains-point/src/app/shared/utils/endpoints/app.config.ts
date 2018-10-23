import { PathModel } from '../../../models/path.model';


export const REST_PATH = Object.freeze({
    autenticator: {
        login: PathModel.create('/autenticator/login'),
    },
    profile: {
        create: PathModel.create('/profile/create'),
        update: PathModel.create('/profile/update'),
        list: PathModel.create('/profile/list'),
        delete: PathModel.create('/profile/delete'),
    },
    menu: {
        create: PathModel.create('/menu/create'),
        createWithList: PathModel.create('/menu/createWithList'),
        list: PathModel.create('/menu/list'),
        update: PathModel.create('/menu/update'),
        delete: PathModel.create('/menu/delete'),
    },
    user: {
        registerUser: PathModel.create('/user/register-user'),
        confirmRegister: PathModel.create('/user/confirm-register'),
        confirmExitentUser: PathModel.create('/user/confirm-existent-user'),
        listUsers: PathModel.create('/user/list-users'),
        loginUser: PathModel.create('/user/login-user'),
        loginUserEmail: PathModel.create('/user/login-user-email'),
        requestAccess: PathModel.create('/user/request-access'),
    },
    gmail: {
        sendMail: PathModel.create('/gmail/sendMail'),
        getLabels: PathModel.create('/gmail/getLabels'),
        mailBox: PathModel.create('/gmail/mailBox'),
    },
    character: {
        create: PathModel.create('/character/create'),
        list: PathModel.create('/character/list'),
        delete: PathModel.create('/character/delete'),
    },
});
