import { Box, Checkbox, Skeleton, Stack, TextField } from '@mui/material';
import { Column } from '../../../../entities/companiesDirectory/types/types';

type Props<T extends { id: string; [key: string]: string }> = {
  style: React.CSSProperties;
  index: number;
  columns: Column<T>[];
  isSelected: boolean;
  rowData: T;
  toggleSelect: (index: number) => void;
  handleChangeRow: (params: { index: number; property: string; value: string }) => void;
};

export const TableRow = <T extends { id: string; [key: string]: string }>({
  style,
  index,
  columns,
  isSelected,
  rowData,
  toggleSelect,
  handleChangeRow
}: Props<T>) => {
  return (
    <Stack direction='row' style={style} sx={{ backgroundColor: isSelected ? 'gray' : 'none' }}>
      <Box
        width={56}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid black',
          borderRight: '1px solid black',
          borderLeft: 'none'
        }}
      >
        <Checkbox disabled={!rowData} checked={isSelected} onChange={() => toggleSelect(index)} />
      </Box>
      {columns.map((column) => (
        <Box
          key={rowData[column.property] + column.property}
          sx={{
            width: column.percentWidth + '%',
            p: 1,
            borderBottom: '1px solid black',
            borderRight: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {rowData ? (
            <TextField
              defaultValue={rowData?.[column.property]}
              size='small'
              fullWidth
              onBlur={(event) =>
                handleChangeRow({
                  index,
                  property: column.property,
                  value: event.target.value
                })
              }
            />
          ) : (
            <Skeleton width='100%' />
          )}
        </Box>
      ))}
    </Stack>
  );
};
