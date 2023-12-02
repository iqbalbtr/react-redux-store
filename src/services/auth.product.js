import axios from "axios"
import { useState } from "react"
import { FETCH_STATUS } from "./statusFetch"
import { useSelector } from "react-redux"

export const getProduct = async (offset, limit, setStatus, setProduct) => {
    try {
        setStatus(FETCH_STATUS.LOADING)
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
        const result = await res.data

        if(result) {
            setStatus(FETCH_STATUS.SUCCESS)
            setProduct(result)
        }
    } catch (err) {
        setStatus(FETCH_STATUS.ERROR)
        console.error(err.message)
    }
}

export const getProductPagination = async (offset, limit, setStatus, setProduct) => {
    try {
        setStatus(FETCH_STATUS.LOADING)
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
        const result = await res.data

        if(result) {
            setStatus(FETCH_STATUS.SUCCESS)
            setProduct(result)
        }
    } catch (err) {
        setStatus(FETCH_STATUS.ERROR)
        console.error(err.message)
    }
}

export const getPagination = async (data, callback) => {
    
    try {
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products`)
        const result = await res.data

        if(result) {
            const paginationList = Math.ceil(parseFloat(result.length / data.limit) - 1)
            callback(true, paginationList)
        }
    } catch (error) {
        console.error(error.message);
        callback(false, null)
    }
}

export const getPaginationCategory = async (data, category, callback) => {
    
    try {
        const res = await axios.get(`ttps://api.escuelajs.co/api/v1/categories/${category}/products`)
        const result = await res.data

        if(result) {
            const paginationList = Math.ceil(parseFloat(result.length / data.limit) - 1)
            callback(true, paginationList)
        }
    } catch (error) {
        console.error(error.message);
        callback(false, null)
    }
}

export const getSingleProduct = async (id, setProduct, setStatus) => {
    try {
        setStatus(FETCH_STATUS.LOADING)
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await response.data

        if(data) {
            setStatus(FETCH_STATUS.SUCCESS)
            setProduct(data)
        }

    } catch (err) {
        setStatus(FETCH_STATUS.ERROR)
        console.error(err.massage);
    }
};

export const getAllCategory = async (callback) => {
    try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/categories")
        const data = await res.data
        
        if(data) {
            callback(true, data)
        }
    } catch (error) {
        console.error(error.message)
        callback(false, null)
    }
}

export const getCatgoryProduct = async (idCategory, limit, offset, setProduct, setStatus) => {
    try {
        setStatus(FETCH_STATUS.LOADING)
        const res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${idCategory}/products?offset=${offset}&limit=${limit}`)
        const data = await res.data

        if(data) {
            setStatus(FETCH_STATUS.SUCCESS)
            setProduct(data)
        }
    } catch (error) {
        consolr.error(error.message)
        setStatus(FETCH_STATUS.ERROR)
    }
}