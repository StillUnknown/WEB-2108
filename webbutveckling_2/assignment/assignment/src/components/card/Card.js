const Card = ({ id, title, price }) => {
    return (
        <article className='tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={ `https://robohash.org/${ id }?size=250x250` } alt='Robot'/>
            <div>
                <h2>{ title }</h2>
                <h3>{ price } kr</h3>
                <button>BUY</button>
            </div>
        </article>
    )
}

export default Card