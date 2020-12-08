import { DisplayActions } from "../actions/displayAction";

type NameState = {
	display: boolean,
	payload: any
};

const initialState: NameState = {
	display: false,
	payload: []
};

const ValueReducer = (state: NameState = initialState, action: DisplayActions) => {
	switch (action.type) {
		case "SET_DISPLAY":
			return {
				...state,
				display: action.display,
				payload: action.payload
			};
		default:
			return state;
	}
};
export default ValueReducer;