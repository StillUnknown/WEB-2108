import CardList from "../components/card/CardList";
import albumsData from "../utils/data/AlbumsData";
import SearchBox from "../components/searchBox/SearchBox";



function AlbumsView() {


    return (
        <main className='tc'>
            <SearchBox/>
            <h1 className='robo-logo f1'>Albums</h1>
            <CardList albumsData={ albumsData }/>
        </main>
    )
}

export default AlbumsView