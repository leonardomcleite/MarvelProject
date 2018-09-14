import { PathModel } from '../../../models/path.model';


export const REST_PATH = Object.freeze({
    autenticator: {
        login: PathModel.create('/autenticator/login'),
    },
});
