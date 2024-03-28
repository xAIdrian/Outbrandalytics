import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { database } from './firebase-config.js';
import { child, ref, get } from 'firebase/database';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.js';

function App() {

  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(database);
        get(child(dbRef, `users`)).then((snapshot) => {
          if (snapshot.exists()) {
            const snap = snapshot.val();
            console.log(snap);

            //get the values from list as an array
            const snapArray = Object.values(snap);
            const emptyRemoved = snapArray.filter((item) => item.email !== undefined && item.email !== '');
            setData(emptyRemoved);

          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      };
      fetchData().catch(console.error);
    
    // Don't forget to unsubscribe from your realtime updates when the component unmounts
    // return () => response.off();
    // return () => {response.off()};
  }, []);
  
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
