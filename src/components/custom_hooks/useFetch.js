import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url);
            if (response.ok) {
                const returnedData = await response.json();
                if(returnedData && returnedData.length) setData(returnedData);
            }
        };

        getData();
    }, [url]);

    return [data];
};

export default useFetch;