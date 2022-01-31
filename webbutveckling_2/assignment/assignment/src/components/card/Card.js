import css from './Card.module.css'

const Card = ({ image, title, price }) => {
    return (
        <article className='tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <div>
                <img className={css.cdCover} src={image} alt='cdCover'/>
                <h2>{ title }</h2>
                <h3>{ price } kr</h3>
                <button>BUY</button>
            </div>
        </article>
    )
}

export default Card