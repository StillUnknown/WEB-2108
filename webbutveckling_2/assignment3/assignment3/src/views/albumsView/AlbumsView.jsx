import CardList from "../../components/card/CardList";
import dataAlbum from "../../utils/data/dataAlbum";
import css from './AlbumsView.module.css'


function AlbumsView() {

    return (
        <main className={css.textAlignCenter}>
            <h1 data-testid='header'>Albums</h1>
            <div className={css.gridContainer}><CardList dataAlbum={dataAlbum} /></div>

        </main>
    )
}

export default AlbumsView