export const ADD_ROW = "ADD_ROW";

export const addRow = (rowData) => ({
  type: ADD_ROW,
  payload: rowData,
});