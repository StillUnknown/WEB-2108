import DeleteData from "../deleteData/DeleteData";
import {fireEvent, render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<DeleteData/>)
    getByTestId = component.getByTestId
})

test('Check that name that does not exist in DB gets correct response from DB', () => {
    const deleteButton = getByTestId('deleteButton')
    const dbResponse = getByTestId('DbResponse')
    const input = getByTestId('dataInput')



    fireEvent.click(deleteButton)

    setTimeout: () => {expect(getByTestId(dbResponse).textContent).toBe('User with name: "Mats" don\'t exist in database!'), 500}

})