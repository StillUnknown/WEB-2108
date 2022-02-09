import HitListView from "../../views/HitlistView";
import {fireEvent, render} from "@testing-library/react";


let getByTestId

beforeEach(() => {
    const component = render(<HitListView/>)
    getByTestId = component.getByTestId
})

test('Check that the h1 contains the word HitListView', () => {
    expect(getByTestId('header').textContent).toBe('HitList')
})