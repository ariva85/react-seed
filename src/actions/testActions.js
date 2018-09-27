import testActions from 'config/redux/test/actionTypes';

export const test = (content) => ({
	type: testActions.BASIC_ACTION,
	payload: {
		initialized: true
	}
});
