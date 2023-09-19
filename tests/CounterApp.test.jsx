// # Tarea
// # Pruebas en el <CounterApp />
// # test: debe de hacer match con el snapshot
// # test: debe de mostrar el valor inicial de 100 <CounterApp value={100}>

import { screen, render, fireEvent } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en el <CounterApp />', () => { 
    const value = 1
    test('debe de hacer match con el snapshot', () => { 
        const {container} = render(<CounterApp value={value}></CounterApp>)
        expect(container).toMatchSnapshot()
     })

     test('debe de mostrar el valor incial de 100', () => { 
        render(<CounterApp value={value}></CounterApp>)
        expect(screen.getByText(value)).toBeTruthy()
    })
    
    test('debe de incrementar con el boton +1', () => { 
        
        render(<CounterApp value={value}></CounterApp>)
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('2') ).toBeTruthy()
        
       })
    test('debe de decrementar con el boton -1', () => { 
        
        render(<CounterApp value={value}></CounterApp>)
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('1') ).toBeTruthy()
        
    })
    
    test('debe de funcionar el botón de reset', () => { 
        
        render(<CounterApp value={value}></CounterApp>)
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('Reset') )
        // screen.debug()
        fireEvent.click(screen.getByRole('button',{ name:"btn-reset" }))

        expect( screen.getByText('1') ).toBeTruthy()
        
     })
 })