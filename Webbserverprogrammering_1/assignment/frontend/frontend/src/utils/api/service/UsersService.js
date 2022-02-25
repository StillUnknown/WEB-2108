import http from "../TaskAPI";

const allData = () => {
    return http.get('/alldata')
}

const createTaskData = (newName) => {
    return http.post('/createtask', newName)
}

const updateDataByName = () => {
    return http.put('/updatedatabyname')
}

const deleteDataByName = () => {
    return http.delete('/deletedatabyname')
}

export default {
    allData,
    createTaskData,
    updateDataByName,
    deleteDataByName

}