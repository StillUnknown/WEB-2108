import http from "../TaskAPI";

const allData = () => {
    return http.get('/alldata')
}

const createTaskData = (newName) => {
    return http.post('/createtask', newName)
}

const updateDataByName = (changedData) => {
    return http.put('/updatedatabyname', changedData)
}

const deleteDataByName = (name) => {
    return http.delete(`/deletedatabyname/${name}`)
}

const getSingleDataByName = (dataByName) => {
    return http.get(`/getuserbyname/${dataByName}`)
}

export default {
    allData,
    createTaskData,
    updateDataByName,
    deleteDataByName,
    getSingleDataByName
}