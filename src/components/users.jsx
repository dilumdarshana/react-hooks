import { useContext, useEffect, Suspense } from 'react';
import SiteDataContext from '../contexts/siteData';
import useFetch from '../hooks/useFetch';

const Users = () => {
    const siteDataContext = useContext(SiteDataContext);
    const options = {
        url: 'https://reqres.in/api/users',
        method: 'GET'
    };
    let users = [];

    useEffect(() => {
        siteDataContext.setPageTitle('Users');
    });

    const response = useFetch(options);

    if (response.data && response.data.data && !response.loading) {
        users = response.data.data;
    }

    return (
        <div className="app-separator users-wrap">
            <Suspense fallback="Loading...">
                <p>Users</p>
                <table className="users">
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                        {users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Suspense>
        </div>
    );
};

export default Users;
