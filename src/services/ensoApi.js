const axios = require('axios');
require('dotenv').config();

const ensoApi = axios.create({
    baseURL: process.env.ENSO_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.ENSO_API_KEY}`,
    },
});

const getQuote = async (params) => {
    try {
        console.log('Fetching quote with params:', params);
        const response = await ensoApi.get('/api/v1/shortcuts/quote', { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching quote:', error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Failed to fetch quote');
    }
};

const getBundleQuote = async (bundleData) => {
    try {
        const response = await ensoApi.post(`/api/v1/shortcuts/bundle`, bundleData);
        return response.data;
    } catch (error) {
        console.error('Error fetching bundle quote:', error.message);
        throw new Error('Failed to fetch bundle quote from Enso API');
    }
};

module.exports = { getQuote, getBundleQuote };
