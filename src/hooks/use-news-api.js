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

export const useNewsApi = (apiKey) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        instance.defaults.headers.Authorization = `Bearer ${apiKey}`;
        instance
            .get(`top-headlines?country=nl`)
            .then(({data}) => {
                setData(data.articles);
            })
            .then(()=> setLoading(false))

    }, [apiKey]);

    return [loading, data];
};