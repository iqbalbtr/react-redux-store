import axios from "axios"
import { useState } from "react"
import { FETCH_STATUS } from "./statusFetch"

export const getProduct = async (data, callback) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products?limit=${data}`)
        callback(true, response.data)
    } catch (err) {
        callback(false, err.massages)
    }
}

export const getAllCategory = async (callback) => {
    try {
        const res = await axios.get('https://fakestoreapi.com/products/categories')
        callback(true, res.data)
    } catch (err) {
        callback(false, err)
    }
}

export const getFilterCategory = async (data,) => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/category/${data}`)
        
    } catch (err) {
        callback(false, err)
    }
}

export const getIdProduct = async (id, setProduct, setStatus) => {
    try {
        setStatus(FETCH_STATUS.LOADING)
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const data = response.data

        if(data) {
            setStatus(FETCH_STATUS.SUCCESS)
            setProduct(data)
        }

    } catch (err) {
        setStatus(FETCH_STATUS.ERROR)
        console.log(err.massage);
    }
};
export const getAllProduct = async (setProduct, setStatus) => {
    try {
        setStatus(FETCH_STATUS.LOADING)
        const response = await axios.get(`https://fakestoreapi.com/products`);
        const data = response.data
        console.log("render");

        if (data) {
            setStatus(FETCH_STATUS.SUCCESS)
            setProduct(data)
        }

    } catch (err) {
        setStatus(FETCH_STATUS.ERROR)
        console.log(err.massage)
    }
};
