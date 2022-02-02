import { fireEvent, render, screen } from '@testing-library/react'
import Header from "../Header";

let getByTestId

beforeEach(() => {
    const component = render(<Header/>)
    getByTestId = component.getByTestId
})

test('header renders with correct text 4', () => {
    expect(getByTestId('cart').textContent).toBe('Cart')
})