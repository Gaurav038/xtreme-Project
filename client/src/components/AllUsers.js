import { useState, useEffect } from 'react';
import { getUsers} from '../Service/api';

import Main from './Main';
import {useNavigate} from 'react-router-dom';


const AllUsers = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);


    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <>
        <Main />
        <div
        
            className="home-container container mt-4 animate__animated animate__fadeIn animate__slow"
            style={{marginBottom: '50px'}}
        >
            <div className="row">
                <h1 className="text-center">Details Page</h1>
            </div>
            <div className="row">
                <div className="col">
                    <table
                        className="customers-table table table-dark table-striped table-bordered border-dark mt-4"
                    >
                        <thead className="text-center fs-6">
                            <tr>
                                <th>Id No.</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody className="text-center fs-6">
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td className="fw-bold">{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.password}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        </>
    )
}

export default AllUsers;