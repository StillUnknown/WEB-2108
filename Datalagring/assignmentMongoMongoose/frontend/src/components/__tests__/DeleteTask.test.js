import DeleteTask from '../deleteTask/DeleteTask'
import { fireEvent, render } from '@testing-library/react'

let getByTestId

beforeEach(() => {
    const component = render(<DeleteTask/>)
    getByTestId = component.getByTestId
})

test('Check that name does not exist in DB gets correct response', () => {
    const deleteButton = getByTestId('deleteButton')
    const dbResponse = getByTestId('dbResponse')

    fireEvent.click(deleteButton)

    setTimeout: () => {expect(getByTestId(dbResponse).textContent).toBe(`Task with id: 6257d7e9d561ff454c5a433f not found`), 500}
})