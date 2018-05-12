import mailgunLoader from 'mailgun-js';
import { config } from '../config';
let mailgun = mailgunLoader({ apiKey: config.MAILGUN_API_KEY, domain: 'sandboxcd49d3646c1f43249a12c86fd5aa1baa.mailgun.org'});

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