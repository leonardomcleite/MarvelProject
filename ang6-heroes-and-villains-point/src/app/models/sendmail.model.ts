export class Sendmail {
  to: String;
  from: String;
  subject: String;
  bodyText: String;

  constructor(to: String, from: String, subject: String, bodyText: String) {
    this.to = to;
    this.from = from;
    this.subject = subject;
    this.bodyText = bodyText;
  }
}
