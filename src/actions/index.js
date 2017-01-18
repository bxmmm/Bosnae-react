import axios from 'axios';

export const GET_ARTICLES = 'GET_ARTICLES';

export function getArticles() {
	const URL = 'https://mighty-island-93017.herokuapp.com/api/articles';
	const articlesData = axios.get(URL);
	console.log('od actionaaa', articlesData);
	return {
		type: GET_ARTICLES,
		payload: articlesData
	};
}

export const GET_IMAGES = 'GET_IMAGES';

export function getImages() {
	const URL = 'http://localhost:3000/api/images';
	const links = axios.get(URL);
	return {
		type: GET_IMAGES,
		payload: links
	};
}

export const RESET_IMAGES = 'RESET_IMAGES';

export function resetImages() {
	return {
		type: RESET_IMAGES,
	};
}