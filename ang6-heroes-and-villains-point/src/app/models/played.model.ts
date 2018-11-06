import { UserPersonalData } from './user-personal-data.model';

export class PlayedModel {
    feature: String;
    user: UserPersonalData;

    constructor(feature: String, user: UserPersonalData) {
        this.feature = feature;
        this.user = user;
    }
}
