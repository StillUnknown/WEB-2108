import CardList from "../components/card/CardList";
import dataProducts from "../utils/data/dataProducts";


function AlbumsView() {

    return (
        <main className='tc'>
            <h1 className='robo-logo f1'>Albums</h1>
            <CardList albumsData={dataProducts} />
        </main>
    )
}

export default AlbumsView