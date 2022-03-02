import CreataData from "../createData/CreataData";
import {render} from "@testing-library/react";

 let getByTestId

beforeEach(() => {
    const component = render(<CreataData/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the words CreateData', () => {
    expect(getByTestId('header').textContent).toBe('CreateData')
})