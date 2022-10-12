import axios from "axios";


export const addDataToLocalStorage = async () => {
    try {
        const {data}  = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        return data;
    } catch (error) {
        throw error;
    }
}



























// import { DataType } from "../types";
// import React, { useState, useEffect } from 'react'


// export interface DataTypes {
//     results: DataType[];
//   }
// // const data = { data:[] } as DataType

// const addDataToLocalStorage = () => {
//     const [result, setResult] = useState<DataTypes>();


// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(response => response.json())
//     //   .then(Response)
//       .catch(Error);
//   }, []);

//   return result;
// };

