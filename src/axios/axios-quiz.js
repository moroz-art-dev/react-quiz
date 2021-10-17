import axios from "axios"

export default axios.create({
    baseURL: 'https://react-quiz-57e56-default-rtdb.firebaseio.com/'
})