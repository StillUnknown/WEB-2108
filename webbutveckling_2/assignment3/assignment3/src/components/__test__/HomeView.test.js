import HomeView from "../../views/homeView/HomeView";
import {fireEvent, render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<HomeView/>)
    getByTestId = component.getByTestId
})

test('Check that the h1 contains the word HomeView', () => {
    expect(getByTestId('header').textContent).toBe('HomeView')
})