import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@src/utils/email';
import { FeedBackTMP } from '@src/emailtmp/FeedbackTMP';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { subject } = req.body;

  try {
    const to = process.env.EMAIL || '';

    if (req.body.file) {
      await sendEmail({
        to,
        subject,
        html: FeedBackTMP(req.body),
        attachments: [{ path: `${process.env.API_URL}${req.body.file}` }],
      });
    }

    if (!req.body.file) {
      await sendEmail({
        to,
        subject,
        html: FeedBackTMP(req.body),
      });
    }
  } catch (e) {
    console.log(e);
  }

  return res.status(200).json({ message: 'Email sent successfully' });
}
