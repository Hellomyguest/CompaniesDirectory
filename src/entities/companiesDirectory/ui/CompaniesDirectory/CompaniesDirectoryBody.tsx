import { useSelector } from 'react-redux';
import { TableBody, TableRef } from '../../../../shared/ui/table/TableBody/TableBody';
import { columns } from '../../model/companiesDirectorySettings';
import {
  directoryDataSelector,
  directorySelectedIndexesSelector,
  directoryTotalSelector
} from '../../model/companiesDirectorySelectors';
import { MutableRefObject, useCallback } from 'react';
import { handleRowChange, toggleSelect } from '../../model/companiesDirectorySlice';
import { useAppDispatch } from '../../../../app/store';

export const CompaniesDirectoryBody = ({ tableRef }: { tableRef: MutableRefObject<TableRef> }) => {
  const dispatch = useAppDispatch();
  const selectedIndexes = useSelector(directorySelectedIndexesSelector);
  const data = useSelector(directoryDataSelector);
  const total = useSelector(directoryTotalSelector);

  const toggleSelectRow = useCallback((index: number) => {
    dispatch(toggleSelect(index));
  }, []);

  const handleChangeRow = useCallback(
    (params: { index: number; property: string; value: string }) => {
      dispatch(handleRowChange(params));
    },
    []
  );

  return (
    <TableBody
      columns={columns}
      data={data}
      selectedIndexes={selectedIndexes}
      toggleSelect={toggleSelectRow}
      handleChangeRow={handleChangeRow}
      total={total}
      tableRef={tableRef}
    />
  );
};
