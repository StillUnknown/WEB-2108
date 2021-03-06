import SearchBox from "../components/searchBox/SearchBox";
import CardList from "../components/card/CardList";
import albumsData from "../utils/data/AlbumsData";


function AlbumsView() {

    return (
        <main className='tc'>
            <h1 className='robo-logo f1'>Albums</h1>
            <SearchBox />
            <CardList albumsData={albumsData} />
        </main>
    )
}

export default AlbumsView