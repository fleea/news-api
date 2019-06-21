import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Elements without caching
 */

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const useNewsApi = ({apiKey, category}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = `top-headlines?${category ? `category=${category}&` : ''}country=nl`;
        setLoading(true);
        instance.defaults.headers.Authorization = `Bearer ${apiKey}`;
        instance
            .get(url)
            .then(({data}) => {
                setData(data.articles);
            })
            .then(()=> setLoading(false))

    }, [apiKey, category]);

    return [loading, data];
};