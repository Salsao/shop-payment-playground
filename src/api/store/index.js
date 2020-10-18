import api from '../index';

export const getSneakers = () => api.get('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json');
