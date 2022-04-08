import UpdateTask from '../updateTask/UpdateTask'
import {render} from '@testing-library/react'

let getByTestId

beforeEach(() => {
    const component = render(<UpdateTask/>)
    getByTestId = component.getByTestId
})

test('Check that the h1 contains the words Update Task', () => {
    expect(getByTestId('header').textContent).toBe('Update Task')
})