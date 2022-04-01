import Axios from "axios";

const TaskAPI = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default TaskAPI