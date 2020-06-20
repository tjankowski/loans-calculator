import { actionTypes } from "./actions";
import { FormFields, Currency } from "./constants";

export const initialState = {
  quote: {
    isFetching: false,
    isError: false,
    data: null,
  },
  currency: Currency.GBP,
  form: {
    [FormFields.amount]: {
      value: 2000,
      isError: false,
    },
    [FormFields.duration]: {
      value: 24,
      isError: false,
    },
  },
};

export function reducer(state = initialState, action = { type: null }) {
  switch (action?.type) {
    case actionTypes.FORM_INPUT:
      return {
        ...state,
        quote: {
          ...state.quote,
          data: action.payload.value.isError ? null : state.quote.data,
        },
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value,
        },
      };
    case actionTypes.QUOTE_ERROR:
      return {
        ...state,
        quote: {
          ...state.quote,
          isError: true,
          isFetching: false,
          data: action.payload,
        },
      };

    case actionTypes.QUOTE_SUCCESS:
      return {
        ...state,
        quote: {
          ...state.quote,
          isError: false,
          isFetching: false,
          data: action.payload,
        },
      };
    case actionTypes.QUOTE_FETCH:
      return {
        ...state,
        quote: {
          ...state.quote,
          isError: false,
          isFetching: true,
        },
      };
    default:
      return state;
  }
}
