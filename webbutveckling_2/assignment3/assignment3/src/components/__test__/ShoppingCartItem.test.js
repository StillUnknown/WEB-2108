import {fireEvent, render} from '@testing-library/react';
import ShoppingCartItem from "../shoppingCart/ShoppingCartItem";

let getByTestId

beforeEach(() => {
    const component = render(<ShoppingCartItem/>)
    getByTestId = component.getByTestId
})

test('change input', () => {
    const inputElement = getByTestId('changeInputValue')

    fireEvent.change(inputElement, {
        target: {
            value: '10'  // Väljer att jag vill ha siffran 10 i inputen.
        }
    })
    expect(inputElement.value).toBe('10')  // Förväntar mig att få tillbaka siffran 10 från inputen

    fireEvent.change(inputElement, {
        target: {
            value: '3'  // Väljer här att ändra siffra till att jag vill visa siffran 3 i inputen
        }
    })
    expect(inputElement.value).toBe('3')  // Förväntar mig att få tillbaka siffran 3 från inputen

    fireEvent.change(inputElement, {
        target: {
            value: '50'  // Väljer här att återigen ändra siffran, den här gången till siffran 50
        }
    })
    expect(inputElement.value).toBe('50')  // Förväntar mig att få tillbaka siffran 50 från inputen
})