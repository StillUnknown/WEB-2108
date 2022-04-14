import GetTaskUsingName from '../getTaskUsingName/GetTaskUsingName'
import {render} from '@testing-library/react'

let getByTestId

beforeEach(() => {
    const component = render(<GetTaskUsingName/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the words Get Single Data By Name', () => {
    expect(getByTestId('header').textContent).toBe('Get Task By Name')
})