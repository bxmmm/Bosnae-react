import {GET_IMAGES, RESET_IMAGES} from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case GET_IMAGES: 
		return action.payload.data
	}
	switch (action.type) {
		case RESET_IMAGES:
		return null
	}
	return state;
}