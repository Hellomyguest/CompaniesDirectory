import { useSelector } from 'react-redux';
import { TableHeader } from '../../../../shared/ui/table/TableHeader/TableHeader';
import { selectedAllStateSelector } from '../../model/companiesDirectorySelectors';
import { MutableRefObject, useCallback } from 'react';
import { addRow, deleteRows, toggleSelectAll } from '../../model/companiesDirectorySlice';
import { useAppDispatch } from '../../../../app/store';
import { TableRef } from '../../../../shared/ui/table/TableBody/TableBody';
import { columns } from '../../model/companiesDirectorySettings';

export const CompaniesDirectoryHeader = ({
  tableRef
}: {
  tableRef: MutableRefObject<TableRef>;
}) => {
  const dispatch = useAppDispatch();
  const selectedAllState = useSelector(selectedAllStateSelector);

  const toggleAll = useCallback(() => {
    dispatch(toggleSelectAll());
  }, []);

  const handleDeleteRows = useCallback(() => dispatch(deleteRows()), []);

  const handleAddRow = useCallback(() => {
    dispatch(addRow());
    tableRef?.current?.setScrollToRow(0);
  }, []);

  return (
    <TableHeader
      title='Компании'
      toggleSelectAll={toggleAll}
      selectedAllState={selectedAllState}
      handleDeleteRows={handleDeleteRows}
      handleAddRow={handleAddRow}
      columns={columns}
    />
  );
};
