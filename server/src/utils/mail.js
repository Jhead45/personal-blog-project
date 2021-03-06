import mailgunLoader from 'mailgun-js';
import { config } from '../config';
let mailgun = mailgunLoader({ apiKey: config.MAILGUN_API_KEY, domain: config.MAILGUN_DOMAIN });

function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content
    };
    
    return mailgun.messages().send(data);
}

export { sendEmail };