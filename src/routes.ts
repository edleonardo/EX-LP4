import { Router } from 'express'

import FatorialController from './controllers/FatorialController'
import ProdutorioController from './controllers/ProdutorioController'

const routes = Router()

routes.post('/fatorial', FatorialController.somaFatorial)
routes.post('/produtorio/iterativo', ProdutorioController.funcaoIterativa)
routes.post('/produtorio/recursivo', ProdutorioController.funcaoRecursiva)

export default routes