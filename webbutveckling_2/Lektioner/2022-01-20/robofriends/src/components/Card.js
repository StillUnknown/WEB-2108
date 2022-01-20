const Card = ({id, name, user, email}) => {

    return (
        <main className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </main>
    );
};

export default Card;