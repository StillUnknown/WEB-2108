import CardList from "../components/card/CardList";
import dataAlbum from "../utils/data/dataAlbum";


function AlbumsView() {

    return (
        <main className='tc'>
            <h1 className='robo-logo f1'>Albums</h1>
            <CardList dataAlbum={dataAlbum} />
        </main>
    )
}

export default AlbumsView