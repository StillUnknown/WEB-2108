import ToDoList from "../toDoList/ToDoList";
import {render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<ToDoList/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the word ToDoList', () => {
    expect(getByTestId('header').textContent).toBe('ToDoList')
})