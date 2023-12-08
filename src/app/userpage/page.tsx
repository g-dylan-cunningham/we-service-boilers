import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UserPage = async () => {
    const res = await(fetch('https://jsonplaceholder.typicode.com/users',
    {
        cache: 'no-store'
        // next: {
        //     revalidate: 10 // bursts cache every 10 seconds / only works in fetch function
        // }
    }));
    const users: User[] = await res.json();
  return (
    <>
        <h1>users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>))
            }
                
            </tbody>

        </table>
    </>
  )
}

export default UserPage