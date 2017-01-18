import { GET_ARTICLES } from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case GET_ARTICLES:
		return action.payload.data;
	}
	return state;
}