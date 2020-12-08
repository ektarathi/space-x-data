import { ValueActions } from "../actions/valueAction";

type NameState = {
	year_value: string
};

const initialState: NameState = {
	year_value: ""
};

const ValueReducer = (state: NameState = initialState, action: ValueActions) => {
	switch (action.type) {
		case "GET_VALUE":
			return {
				...state,
				year_value: action.year_value,
			};
		default:
			return state;
	}
};
export default ValueReducer;