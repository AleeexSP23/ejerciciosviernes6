import { EmailService, SmsService, } from "./script.js";

////////////////

const email = new EmailService();
const sms = new SmsService();

email.enviar();
sms.enviar();

/////////////////////////////

