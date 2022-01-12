

function WelcomeMessage(props) {
    return (
        <>
            <h1>Välkommen {props.name}</h1>
            <h3>{hello('Liselott')}</h3>
        </>
    )
}

export default WelcomeMessage

function hello(name) {
    return `Hello ${name}`
}