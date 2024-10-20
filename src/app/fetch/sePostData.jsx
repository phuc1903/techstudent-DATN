import { useState } from 'react';
import axios from 'axios';

export const usePostData = (endpoint) => {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postDataToServer = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/${endpoint}`, data);
            setPostData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { postData, loading, error, postDataToServer };
};