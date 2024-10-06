import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company, dbGenerator } from '../../../shared/lib/dbGenerator/dbGenerator';
import { v4 as uuid } from 'uuid';

export type CompaniesDirectoryStateType = {
  data: { [key: number]: Company };
  total: number;
  selectedIndexes: { [key: number]: true };
};

const defaultDb = dbGenerator(20000);
const defaultData = Object.assign({}, defaultDb);

const initialState: CompaniesDirectoryStateType = {
  data: defaultData,
  total: defaultDb.length,
  selectedIndexes: {}
};

const companiesDirectorySlice = createSlice({
  name: 'companiesDirectory',
  initialState,
  reducers: {
    toggleSelect: (state, { payload }: PayloadAction<number>) => {
      const newSelected = { ...state.selectedIndexes };
      if (newSelected[payload]) {
        delete newSelected[payload];
      } else {
        newSelected[payload] = true;
      }
      state.selectedIndexes = newSelected;
    },
    toggleSelectAll: (state) => {
      if (Object.keys(state.selectedIndexes).length === state.total) {
        state.selectedIndexes = [];
      } else {
        state.selectedIndexes = Object.assign(
          {},
          Array.from({ length: state.total }, () => true as const)
        );
      }
    },
    handleRowChange: (
      state,
      { payload }: PayloadAction<{ index: number; property: string; value: string }>
    ) => {
      state.data[payload.index] = {
        ...state.data[payload.index],
        [payload.property]: payload.value
      };
    },
    deleteRows: (state) => {
      const newData = { ...state.data };
      const selected = Object.keys(state.selectedIndexes);
      selected.forEach((index) => {
        delete newData[+index];
      });

      const newDataKeysUpdated = Object.assign({}, Object.values(newData));
      state.selectedIndexes = [];
      state.data = newDataKeysUpdated;
      state.total = state.total - selected.length;
    },
    addRow: (state) => {
      const newRow = { id: uuid(), name: '', adress: '' };
      const newData = Object.assign({}, [newRow].concat(Object.values(state.data)));
      state.data = newData;
      state.total = state.total + 1;
      state.selectedIndexes = {};
    }
  }
});

export default companiesDirectorySlice.reducer;
export const { toggleSelect, toggleSelectAll, handleRowChange, deleteRows, addRow } =
  companiesDirectorySlice.actions;
