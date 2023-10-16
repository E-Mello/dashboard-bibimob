import express, { Request, Response } from 'express';

import nodemailer from 'nodemailer';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bibimobfinger@gmail.com',
    pass: 'finger2023',
  }
});

app.post('/enviar-email', async (req: Request, res: Response) => {
  const { para, assunto, mensagem } = req.body;

  const info = await transporter.sendMail({
    from: 'bibimobfinger@gmail.com',
    to: para,
    subject: assunto,
    text: mensagem
  });

  console.log('E-mail enviado:', info.messageId);
  res.json({ mensagem: 'E-mail enviado com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
