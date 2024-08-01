import { sendEmail } from '../utils/emailService';
interface Message {
  email: string;
  subject: string;
  text: string;
  html: string;
}

const emailObserver = async (message: Message): Promise<void> => {
  const { email, subject, text, html } = message;
  await sendEmail(email, subject, text, html);
};

export default emailObserver;
