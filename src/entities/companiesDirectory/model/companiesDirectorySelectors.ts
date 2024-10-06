import { createSelector } from '@reduxjs/toolkit';
import { store } from '../../../app/store';
import { SelectedAllState } from '../../../shared/ui/table/TableHeader/TableHeader';

type RootState = ReturnType<typeof store.getState>;

export const directoryTotalSelector = ({ companiesDirectory }: RootState) =>
  companiesDirectory.total;
export const directoryDataSelector = ({ companiesDirectory }: RootState) => companiesDirectory.data;
export const directorySelectedIndexesSelector = ({ companiesDirectory }: RootState) =>
  companiesDirectory.selectedIndexes;
export const selectedAllStateSelector = createSelector(
  [directorySelectedIndexesSelector, directoryTotalSelector],
  (selectedIndexes, total): SelectedAllState => {
    const selectedSize = Object.keys(selectedIndexes).length;
    if (!selectedSize) return SelectedAllState.NONE;
    if (selectedSize === total) return SelectedAllState.ALL;
    return SelectedAllState.PARTLY;
  }
);
