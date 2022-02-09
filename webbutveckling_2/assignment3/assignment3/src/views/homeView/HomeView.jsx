import css from './HomeView.module.css'

function HomeView() {
    return (
        <div className={css.textCenter}>
            <h1 data-testid='header'>HomeView</h1>
            <p>
                Welcome to my webshop. Under "Our albums" you will find some albums we have for sale.
            </p>
            <p>
                Under "Video" you'll find a surprice!
            </p>
        </div>
    )
}

export default HomeView