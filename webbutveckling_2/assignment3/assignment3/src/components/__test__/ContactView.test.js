import ContactView from "../../views/contactView/ContactView";
import {fireEvent, render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<ContactView/>)
    getByTestId = component.getByTestId
})


test('Check that the h1 contains the word Contact', () => {
    expect(getByTestId('header').textContent).toBe('ContactView')
})