import actionTypes from 'config/redux/test/actionTypes';

const initialState = {
	initialized: false
};

export default function(state = initialState, action) {
	let newState = '';
	switch (action.type) {
		case actionTypes.BASIC_ACTION:
			console.log('action ok');
			newState = {initialized: true};
			return newState;
		default:
			return state;
	}
}
