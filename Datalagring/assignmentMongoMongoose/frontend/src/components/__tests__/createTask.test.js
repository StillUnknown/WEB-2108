import CreateTask from '../createTask/CreateTask'
import {render} from '@testing-library/react'

let getByTestId

beforeEach(() => {
    const component = render(<CreateTask/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the words Create Task', () => {
    expect(getByTestId('header').textContent).toBe('Create Task')
})