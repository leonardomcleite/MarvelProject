export class UserPersonalData {

  id: number;
  name: string;
  dtBirth: string;
  sex: string;
  user: string;
  email: string;
  password: string;
  confirmPassword: string;
  cdConfirmation: string;
  profile: any;

  constructor(name: string, dtBirth: string, sex: string, user: string, email: string, password: string, confirmPassword: string) {
    this.name = name;
    this.dtBirth = dtBirth;
    this.sex = sex;
    this.user = user;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

}
