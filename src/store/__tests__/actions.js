jest.mock("lodash.debounce", () => (callback) => callback);
jest.mock("../../api");
import { useActions, action } from "../actions";
import quote from "../../api";
import { initialState } from "../reducers";
import { FormFieldsValueRange, FormFields } from "../constants";
import debounce from "lodash.debounce";

it("should create action for given arguments", () => {
  const data = Date.now();
  expect(action("action", data)).toEqual({
    type: "action",
    payload: data,
  });
});

describe("Test quote action:", () => {
  it("should handle quote fetching success", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.resolve("DATA"));
    const actions = useActions(initialState, dispatch);
    await actions.quote(
      FormFieldsValueRange[FormFields.amount][0],
      FormFieldsValueRange[FormFields.duration][0]
    );
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[1]).toMatchSnapshot();
  });

  it("should handle quote fetching error", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.reject("ERROR"));
    const actions = useActions(initialState, dispatch);
    await actions.quote(
      FormFieldsValueRange[FormFields.amount][0],
      FormFieldsValueRange[FormFields.duration][0]
    );
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[1]).toMatchSnapshot();
  });
});

describe("Test amount field change:", () => {
  it("should handle action without errors for min value", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.resolve("DATA"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.amount,
      FormFieldsValueRange[FormFields.amount][0]
    );
    expect(dispatch.mock.calls.length).toBe(3);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[1]).toMatchSnapshot();
    expect(dispatch.mock.calls[2]).toMatchSnapshot();
  });

  it("should handle action without errors for max value", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.resolve("DATA"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.amount,
      FormFieldsValueRange[FormFields.amount][1]
    );
    expect(dispatch.mock.calls.length).toBe(3);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[1]).toMatchSnapshot();
    expect(dispatch.mock.calls[2]).toMatchSnapshot();
  });

  it("should handle action with fetch errors for min value", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.reject("ERROR"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.amount,
      FormFieldsValueRange[FormFields.amount][0]
    );
    expect(dispatch.mock.calls.length).toBe(3);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[1]).toMatchSnapshot();
    expect(dispatch.mock.calls[2]).toMatchSnapshot();
  });

  it("should handle action with fetch errors for max value", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.reject("ERROR"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.amount,
      FormFieldsValueRange[FormFields.amount][1]
    );
    expect(dispatch.mock.calls.length).toBe(3);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[1]).toMatchSnapshot();
    expect(dispatch.mock.calls[2]).toMatchSnapshot();
  });

  it("should mark validation error value below min", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.resolve("DATA"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.amount,
      FormFieldsValueRange[FormFields.amount][0] - 1
    );
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
  });
  it("should mark validation error value above max", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.resolve("DATA"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.amount,
      FormFieldsValueRange[FormFields.amount][1] + 1
    );
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[0][0].payload.value.value).toBe(
      FormFieldsValueRange[FormFields.amount][1]
    );
  });
});

describe("Test duration field change:", () => {
  it("should handle action without errors for min value", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.resolve("DATA"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.duration,
      FormFieldsValueRange[FormFields.duration][0]
    );
    expect(dispatch.mock.calls.length).toBe(3);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[1]).toMatchSnapshot();
    expect(dispatch.mock.calls[2]).toMatchSnapshot();
  });

  it("should handle action without errors for max value", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.resolve("DATA"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.duration,
      FormFieldsValueRange[FormFields.duration][1]
    );
    expect(dispatch.mock.calls.length).toBe(3);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[1]).toMatchSnapshot();
    expect(dispatch.mock.calls[2]).toMatchSnapshot();
  });

  it("should handle action with fetch errors for min value", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.reject("ERROR"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.duration,
      FormFieldsValueRange[FormFields.duration][0]
    );
    expect(dispatch.mock.calls.length).toBe(3);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[1]).toMatchSnapshot();
    expect(dispatch.mock.calls[2]).toMatchSnapshot();
  });

  it("should handle action with fetch errors for max value", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.reject("ERROR"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.duration,
      FormFieldsValueRange[FormFields.duration][1]
    );
    expect(dispatch.mock.calls.length).toBe(3);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[1]).toMatchSnapshot();
    expect(dispatch.mock.calls[2]).toMatchSnapshot();
  });

  it("should mark validation error value below min", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.resolve("DATA"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.duration,
      FormFieldsValueRange[FormFields.duration][0] - 1
    );
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
  });
  it("should mark validation error value above max", async () => {
    const dispatch = jest.fn();
    quote.mockImplementation(() => Promise.resolve("DATA"));
    const actions = useActions(initialState, dispatch);
    await actions.onFormChange(
      FormFields.duration,
      FormFieldsValueRange[FormFields.duration][1] + 1
    );
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
    expect(dispatch.mock.calls[0][0].payload.value.value).toBe(
      FormFieldsValueRange[FormFields.duration][1]
    );
  });
});
