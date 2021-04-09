import { Request, Response } from 'express'

const calculaX = (m: number, n: number) => {
  if (m < n) {
    return m+1/m * calculaX(m+1, n)
  } else {
    return n+1/n
  }
}

export default {
  funcaoIterativa(request: Request, response: Response) {
    let { m, n } = request.body

    if (m < 1) {
      return response.status(400).json({ error: 'O valor de m deve ser maior que zero' })
    }
    if (m > n) {
      return response.status(400).json({ error: 'O valor de m deve ser menor que n' })
    }

    let resultado = 1

    for (let i = m; i <= n; i++) {
      resultado *= i + 1/i   
    }

    return response.status(200).json({ resultado: resultado })
  },
  funcaoRecursiva(request: Request, response: Response) {
    let { m, n } = request.body

    if (m < 1) {
      return response.status(400).json({ error: 'O valor de m deve ser maior que zero' })
    }
    if (m > n) {
      return response.status(400).json({ error: 'O valor de m deve ser menor que n' })
    }

    return response.status(200).json({ resultado: calculaX(m, n) })
  }
}