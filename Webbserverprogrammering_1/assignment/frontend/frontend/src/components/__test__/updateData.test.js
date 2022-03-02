import UpdateData from "../updateData/UpdateData";
import {render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<UpdateData/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the words Update Data', () => {
    expect(getByTestId('header').textContent).toBe('Update Data')
})