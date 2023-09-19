import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en el archivo 02-template-string', () => { 
    
    test('should getSaludo debe retornar hola "Manuel" ', () => { 

        const name = 'Manuel'

        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`)

    })
    
 })
