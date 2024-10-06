import { List, AutoSizer, ListRowRenderer } from 'react-virtualized';
import { Box } from '@mui/material';
import { Column } from '../../../../entities/companiesDirectory/types/types';
import { MutableRefObject, useImperativeHandle, useState } from 'react';
import { TableRow } from '../TableRow/TableRow';

export type TableRef = {
  setScrollToRow: (index: number) => void;
} | null;

type Props<T extends { id: string; [key: string]: string }> = {
  columns: Column<T>[];
  data: { [key: number]: T };
  total: number;
  selectedIndexes: { [key: number]: true };
  toggleSelect: (index: number) => void;
  tableRef: MutableRefObject<TableRef>;
  handleChangeRow: (params: { index: number; property: string; value: string }) => void;
};

export const TableBody = <T extends { id: string; [key: string]: string }>({
  columns,
  data,
  total,
  selectedIndexes,
  toggleSelect,
  handleChangeRow,
  tableRef
}: Props<T>) => {
  const [scrollToRow, setScrollToRow] = useState<number | undefined>(undefined);

  useImperativeHandle(tableRef, () => ({
    setScrollToRow: (index: number) => {
      setScrollToRow(index);
      setTimeout(() => setScrollToRow(undefined), 0);
    }
  }));

  const rowRenderer: ListRowRenderer = ({ key, index, style }) => {
    const rowData = data?.[index];
    const isSelected = selectedIndexes[index] ?? false;

    return (
      <TableRow
        key={key}
        style={style}
        index={index}
        rowData={rowData}
        isSelected={isSelected}
        columns={columns}
        toggleSelect={toggleSelect}
        handleChangeRow={handleChangeRow}
      />
    );
  };
  return (
    <Box sx={{ flex: '1 1 auto' }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            scrollToIndex={scrollToRow}
            height={height}
            width={width}
            rowRenderer={rowRenderer}
            rowHeight={() => 56}
            rowCount={total}
          />
        )}
      </AutoSizer>
    </Box>
  );
};
