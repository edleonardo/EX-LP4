import { Request, Response } from 'express'

export default {
  somaFatorial(request: Request, response: Response) {
    const { num1, num2 } = request.body

    if (num1 < 0 || num1 > 20) {
      return response.status(400).json({ error: 'O dado num1 deve ser maior que zero e menor que vinte' })
    }
    if (num2 < 0 || num2 > 20) {
      return response.status(400).json({ error: 'O dado num2 deve ser maior que zero e menor que vinte' })
    }
    
    let res1 = 1 
    let res2 = 1
    for (let i = 1; i <= num1; i++) {
      res1 *= i;
    }

    for (let i = 1; i <= num2; i++) {
      res2 *= i;
    }

    return response.status(200).json({ resultado: res1 + res2 })    
  }
}