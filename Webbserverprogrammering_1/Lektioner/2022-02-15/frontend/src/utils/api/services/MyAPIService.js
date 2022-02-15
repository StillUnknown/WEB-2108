import http from './myAPI'

const alive = () => {
    return http.get('/')
}

const welcome_message = (name) => {
    return http.post(`/name/${name}`)
}

const addition = (numOne, numTwo) => {
    return http.post(`/calc/add/${numOne}/${numTwo}`)
}

const subtraction = (numOne, numTwo) => {
    return http.post(`/calc/sub/${numOne}/${numTwo}`)
}

const multiplication = (numOne, numTwo) => {
    return http.post(`/calc/multi/${numOne}/${numTwo}`)
}

const division = (numOne, numTwo) => {
    return http.post(`/calc/div/${numOne}/${numTwo}`)
}

export default {
    alive,
    welcome_message,
    addition,
    subtraction,
    multiplication,
    division,
}