import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import User from './user.js';

const App = () => {

  const getAPI = () => {
    const API = 'http://127.0.0.1:5000/'

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
  useEffect(() => {
          
    getAPI();

  }, []);

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [tableId, settableId] = useState();
  const getAPI1 = () => {
    const API = `http://127.0.0.1:5000/${tableId}`

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
    useEffect(() => {
        
      getAPI1();

  }, []);

  const [createdBy, setcreatedBy] = useState();
  const getAPI2 = () => {
    const API = `http://127.0.0.1:5000/createdBy/${createdBy}`

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
    useEffect(() => {
        
      getAPI2();

  }, []);

  const [userId, setuserId] = useState();
  const getAPI3 = () => {
    const API = `http://127.0.0.1:5000/userId/${userId}`

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
    useEffect(() => {
        
      getAPI3();

  }, []);

  const [idNo, setidNo] = useState();
  const getAPI4 = () => {
    const API = `http://127.0.0.1:5000/idNo/${idNo}`

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
    useEffect(() => {
        
      getAPI4();

  }, []);

    return (
        <Fragment>
            <header>
                <h1>Table_Id </h1>
            </header>
            <section>
              <div>
                <h2>Search by table ID</h2>
                <input type="number" 
                onChange={(e)=> settableId(e.target.value)}
                id="tableId" maxLength="4" minLength="1"></input>&emsp;
                <button 
                onClick={() => getAPI1()}
                >Search</button>
              </div>
            </section>

            <section>
              <div>
                <h2>Search by CreatedBy</h2>
                <input type="number" 
                onChange={(e)=> setcreatedBy(e.target.value)}
                id="tableId" maxLength="6" minLength="1"></input>&emsp;
                <button 
                onClick={() => getAPI2()}
                >Search</button>
              </div>
            </section>

            <section>
              <div>
                <h2>Search by User Id</h2>
                <input type="number" 
                onChange={(e)=> setuserId(e.target.value)}
                id="tableId" maxLength="6" minLength="1"></input>&emsp;
                <button 
                onClick={() => getAPI3()}
                >Search</button>
              </div>
            </section>

            <section>
              <div>
                <h2>Search by Id Number</h2>
                <input type="number" 
                onChange={(e)=> setidNo(e.target.value)}
                id="idNo" maxLength="6" minLength="1"></input>&emsp;
                <button 
                onClick={() => getAPI4()}
                >Search</button>
              </div>
            </section>

            
            <main>
                {loading === true ? (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <section>
                        {apiData.map((testing) => {
                            let metaColor = 'low';

                            if (testing.meta_score >= 70) {
                                metaColor = 'high';
                            } else if (testing.meta_score <= 69 && testing.meta_score >= 49) {
                                metaColor = 'medium';
                            } else {
                                metaColor = 'low';
                            }

                            return (
                                <div className="movie-container" key={String(testing.table_id)}>
                                    <h1>{testing.table_id}</h1>
                                    <p>
                                        <strong>Id Number</strong> {testing.id_no}
                                    </p>
                                    <p>
                                        <strong>Created By</strong> {testing.created_by}
                                    </p>
                                    <p>
                                        <strong>User ID:</strong> <span>{testing.user_id}</span>
                                    </p>
                                </div>
                            );
                        })}
                    </section>
                )}
            </main>
        </Fragment>
    );
};

export default App;