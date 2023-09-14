import express from 'express'
import usersController from './users.controller'

const router = express.Router()

router.post('/career-user', usersController.createUser)

export default router