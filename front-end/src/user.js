import React, { useState, useEffect }  from 'react';

const User = ({table_id}) => {
    useEffect(() => {
        const getAPI = () => {
            // Change this endpoint to whatever local or online address you have
            // Local PostgreSQL Database
            const API = `http://127.0.0.1:5000/${table_id}`

            fetch(API)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setLoading(false);
                    setApiData(data);
                });
        };
        getAPI();
    }, [table_id]);
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    return (
        <div className="movie-container" key={String(apiData.table_id)}>
            <h1>{apiData.table_id}</h1>
            <p>
                <strong>Id Number</strong> {apiData.id_no}
            </p>
            <p>
                <strong>Created By</strong> {apiData.created_by}
            </p>
            <p>
                <strong>User ID:</strong> <span>{apiData.user_id}</span>
            </p>
        </div>
    )
}

export default User




// import React, { Fragment, useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//     useEffect(() => {
//         const getAPI = () => {
//             // Change this endpoint to whatever local or online address you have
//             // Local PostgreSQL Database
//             const API = 'http://127.0.0.1:5000/';

//             fetch(API)
//                 .then((response) => {
//                     console.log(response);
//                     return response.json();
//                 })
//                 .then((data) => {
//                     console.log(data);
//                     setLoading(false);
//                     setApiData(data);
//                 });
//         };
//         getAPI();
//     }, []);
//     const [apiData, setApiData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     return (
//         <Fragment>
//             <div className="movie-container" key={String(testing.table_id)}>
//                 <h1>{testing.table_id}</h1>
//                 <p>
//                     <strong>Id Number</strong> {testing.id_no}
//                 </p>
//                 <p>
//                     <strong>Created By</strong> {testing.created_by}
//                 </p>
//                 <p>
//                     <strong>User ID:</strong> <span>{testing.user_id}</span>
//                 </p>
//             </div>
//         </Fragment>
//     );
// };

// export default App;