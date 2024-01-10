import { useState, useEffect } from 'react';

const useFetch = options => {
    const { url, method } = options;
    const [data, setData] = useState({
        loading: false,
        data: []
    });

    const getData = async url => {
        try {
            const res = await fetch(url, {
                method
            });
            const data = await res.json();

            setData({
                loading: false,
                data
            });
        } catch (e) {
            console.log('e', e);
            setData({
                loading: false,
                data: []
            });
        }
    };

    useEffect(() => {
        getData(url);
    }, []);

    return data;
};

export default useFetch;
