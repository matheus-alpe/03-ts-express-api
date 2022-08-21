import { Router } from 'express'

import userRoutes from './UserRoutes'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to TS Express API'
  })
})

routes.use('/users', userRoutes)

export default routes
