import axios from 'axios';

export const GET_ARTICLES = 'GET_ARTICLES';

export function getArticles() {
	const URL = 'http://localhost:3000/api/articles';
	const articlesData = axios.get(URL);
	console.log('od actiona', articlesData);
	return {
		type: GET_ARTICLES,
		payload: articlesData
	};
}