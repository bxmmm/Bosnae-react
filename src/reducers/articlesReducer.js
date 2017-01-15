import { GET_ARTICLES } from '../actions/index';

export default function (state = null, action) {
	console.log('od reducera', action.payload);
	switch (action.type) {
		case GET_ARTICLES:
		return action.payload.data;
	}
	return state;
}