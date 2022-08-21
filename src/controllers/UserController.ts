import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  {
    name: 'Matheus',
    email: 'matttalves@gmail.com'
  }
]

class UserController {
  async index(req: Request, res: Response) {
    return res.json(users)
  }

  async create(req: Request, res: Response) {
    const { name, email } = req.body
    const emailService = new EmailService()

    const to = {
      name,
      email
    }

    users.push(to)

    const message = {
      subject: 'Usuário criado',
      body: `<p>Seu usuário foi criado com sucesso!</p>`
    }

    emailService.sendMail({ to, message })

    return res.json({
      message: message.subject,
      user: to
    })
  }
}

export default new UserController()
