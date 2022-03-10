import sendGrid from '@sendgrid/mail';
// TODO: api key hiding
sendGrid.setApiKey(
  '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'
);

function getToAddress(origin) {
  if (origin.includes('localhost') || origin.includes('dev')) {
    return 'luciano.mazzola@yopmail.com';
  }
  return 'luciano.mazzola@asamblo.com; nicolas.sosa@asamblo.com';
}
export default async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.json({ msg: 'Method not allowed' });
  }
  const { body } = req;
  try {
    // TODO: data validation
    // TODO: Invisible ReCaptcha
    const to = getToAddress(req.headers.origin || '');
    await sendGrid.send({
      to,
      from: 'no-reply@asamblo.com',
      replyTo: body.email,
      subject: 'New message from Asamblo website',
      text: `Email: ${body.email}\n\n
              Message: ${body.message}`,
    });
    return res.json({ msg: 'Email sent!' });
  } catch (error) {
    res.statusCode = 500;
    return res.json({ msg: 'Error' });
  }
};
