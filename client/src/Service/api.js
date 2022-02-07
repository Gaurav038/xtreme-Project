import axios from 'axios';

// const usersUrl = 'http://localhost:8080/data';

const usersUrl = '/data';

export const getUsers = async (id) => {
    console.log(id)
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

