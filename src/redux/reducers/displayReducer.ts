import { DisplayActions } from "../actions/displayAction";

type NameState = {
	payload: any
};

const initialState: NameState = {
	payload: []
};

const ValueReducer = (state: NameState = initialState, action: DisplayActions) => {
	switch (action.type) {
		case "SET_DISPLAY":
			return {
				...state,
				payload: action.payload
			};
		default:
			return state;
	}
};
export default ValueReducer;