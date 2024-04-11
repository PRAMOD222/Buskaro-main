import nodemailer from 'nodemailer';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    const formdata = { name, email, message };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pramodkesarkar2222@gmail.com',
        pass: 'kijq omdv gcna djgs',
      },
    });

    // Send the email
    try {
      const info = await transporter.sendMail({
        from: `${formdata.name} ${formdata.email}`,
        to: 'pramodkesarkar2222@gmail.com',
        subject: `Message From  ${formdata.name}`,
        text: formdata.email +" "+ formdata.message,
      });

      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email. Please try again later.' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

