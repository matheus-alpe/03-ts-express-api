import { Request, Response } from 'express'

const users = [
  {
    name: 'Matheus',
    email: 'matttalves@gmail.com'
  }
]

class UserController {
  async index(req: Request, res: Response) {
    return res.json({
      users
    })
  }
}

export default new UserController()
