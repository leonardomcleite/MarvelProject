export class UserPersonalData {

  name: string;
  dtBirth: Date;
  sex: string;
  user: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(name: string, dtBirth: Date, sex: string, user: string, email: string, password: string, confirmPassword: string) {
    this.name = name;
    this.dtBirth = dtBirth;
    this.sex = sex;
    this.user = user;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

}
