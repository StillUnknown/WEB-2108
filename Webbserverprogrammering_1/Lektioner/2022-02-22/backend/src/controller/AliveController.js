

const alive = (req, res) => {
    return res.status(200).send('API Is Alive!')
}

export default  {
    alive,
}