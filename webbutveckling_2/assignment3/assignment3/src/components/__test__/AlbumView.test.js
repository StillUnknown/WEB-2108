import AlbumsView from "../../views/albumsView/AlbumsView";
import {fireEvent, render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<AlbumsView/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the word AlbumView', () => {
    expect(getByTestId('header').textContent).toBe('Albums')
})