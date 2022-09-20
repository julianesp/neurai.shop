// Code to use in others files

import { useEffect, useState } from "react";
// import axios from 'axios'

const API = '../js/productosAPI.js'

const useGetProductos = (API) => {
    const [ products, setProducts ] = useState([])

    useEffect(async () => {
        // const response = await axios(API)
        setProducts(response.data)
    }, [])

    return products
}

export default useGetProductos