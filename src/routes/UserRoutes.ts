import { Router } from 'express'
import userController from '../controllers/UserController'

const routes = Router()

routes.get('/', userController.index)
routes.post('/', userController.create)

export default routes
