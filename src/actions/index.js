import axios from 'axios';

export const GET_ARTICLES = 'GET_ARTICLES';

export function getArticles() {
	const URL = 'http://mighty-island-93017.herokuapp.com/api/articles';
	const articlesData = axios.get(URL);
	console.log('od actionaaa', articlesData);
	return {
		type: GET_ARTICLES,
		payload: articlesData
	};
}