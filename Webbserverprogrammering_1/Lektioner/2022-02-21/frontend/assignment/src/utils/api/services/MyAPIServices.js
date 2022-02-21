import http from './MyAPI'

const Alive = () => {
    return http.get('/')
}

const Addition = (num1, num2) => {
    return http.post(`/calc/add/${num1} / ${num2}`)
}

export default {
    Alive,
    Addition
}