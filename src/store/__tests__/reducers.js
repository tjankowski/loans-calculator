import { reducer, initialState } from "../reducers";
import { actionTypes, action } from "../actions";

describe("Initial state:", () => {
  it("should have valid inital state", () => {
    expect(initialState).toMatchSnapshot();
  });

  it("should return same state for without action", () => {
    expect(reducer(initialState)).toMatchSnapshot();
  });

  it("should return initial state state without arguments", () => {
    expect(reducer()).toMatchSnapshot();
  });
});

describe("For actions:", () => {
  it("should return same state for unknown action", () => {
    expect(reducer(initialState, action(Date.now()))).toMatchSnapshot();
  });

  it("should set fetching state", () => {
    expect(
      reducer(initialState, action(actionTypes.QUOTE_FETCH))
    ).toMatchSnapshot();
  });

  it("should set fetching error state", () => {
    expect(
      reducer(
        initialState,
        action(actionTypes.QUOTE_ERROR, { error: "Error message" })
      )
    ).toMatchSnapshot();
  });

  it("should set fetching success state", () => {
    expect(
      reducer(
        initialState,
        action(actionTypes.QUOTE_SUCCESS, { data: [1, 2, 3] })
      )
    ).toMatchSnapshot();
  });
});
