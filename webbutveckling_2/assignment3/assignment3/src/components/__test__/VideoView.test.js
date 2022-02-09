import VideoView from "../../views/videoView/VideoView";
import {fireEvent, render} from "@testing-library/react";


let getByTestId

beforeEach(() => {
    const component = render(<VideoView/>)
    getByTestId = component.getByTestId
})

test('Check that the h1 contains the word VideoView', () => {
    expect(getByTestId('header').textContent).toBe('VideoView')
})