import TaskList from '../taskList/TaskList'
import {render} from '@testing-library/react'

let getByTestId

beforeEach(() => {
    const component = render(<TaskList/>)
    getByTestId = component.getByTestId
})

test('Check that the h1 contains the word TaskList', () => {
    expect(getByTestId('header').textContent).toBe('TaskList')
})