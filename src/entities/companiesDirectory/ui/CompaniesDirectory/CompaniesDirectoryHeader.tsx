/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from 'react-redux';
import { TableHeader } from '../../../../shared/ui/table/TableHeader/TableHeader';
import {
  directoryTotalSelector,
  selectedAllStateSelector
} from '../../model/companiesDirectorySelectors';
import { MutableRefObject, useCallback } from 'react';
import { addRow, deleteRows, toggleSelectAll } from '../../model/companiesDirectorySlice';
import { useAppDispatch } from '../../../../app/store';
import { TableRef } from '../../../../shared/ui/table/TableBody/TableBody';

export const CompaniesDirectoryHeader = ({
  tableRef
}: {
  tableRef: MutableRefObject<TableRef>;
}) => {
  const dispatch = useAppDispatch();
  const selectedAllState = useSelector(selectedAllStateSelector);
  const total = useSelector(directoryTotalSelector);

  const toggleAll = useCallback(() => {
    dispatch(toggleSelectAll());
  }, []);

  const handleDeleteRows = useCallback(() => dispatch(deleteRows()), []);

  const handleAddRow = useCallback(() => {
    dispatch(addRow());
    tableRef?.current?.setScrollToRow(0);
  }, [total]);

  return (
    <TableHeader
      title='Компании'
      toggleSelectAll={toggleAll}
      selectedAllState={selectedAllState}
      handleDeleteRows={handleDeleteRows}
      handleAddRow={handleAddRow}
    />
  );
};
