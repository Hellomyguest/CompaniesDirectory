import { Box, Button, Checkbox, Divider, FormControlLabel, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Column } from '../../../../entities/companiesDirectory/types/types';

export enum SelectedAllState {
  ALL = 'all',
  NONE = 'none',
  PARTLY = 'partly'
}

type Props<T extends { id: string; [key: string]: string }> = {
  title: string;
  toggleSelectAll: () => void;
  selectedAllState: SelectedAllState;
  handleDeleteRows: () => void;
  handleAddRow: () => void;
  columns: Column<T>[];
};

export const TableHeader = <T extends { id: string; [key: string]: string }>({
  title,
  toggleSelectAll,
  selectedAllState,
  handleDeleteRows,
  handleAddRow,
  columns
}: Props<T>) => {
  return (
    <Stack gap={1} pt={1}>
      <Typography color='black' variant='h6' ml={2}>
        {title}
      </Typography>
      <Stack direction='row' gap={1} ml={1} divider={<Divider orientation='vertical' flexItem />}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedAllState === SelectedAllState.ALL}
              indeterminate={selectedAllState === SelectedAllState.PARTLY}
              onChange={toggleSelectAll}
            />
          }
          label='Выбрать всё'
          sx={{ marginLeft: '-4px', color: 'black' }}
        />
        <Button startIcon={<AddIcon />} variant='outlined' size='small' onClick={handleAddRow}>
          Добавить
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          variant='outlined'
          size='small'
          color='error'
          onClick={handleDeleteRows}
        >
          Удалить
        </Button>
      </Stack>
      <Stack
        direction='row'
        sx={{ borderTop: '1px solid black', borderBottom: '1px solid black', pr: '17px' }}
      >
        <Box sx={{ width: '56px' }} />
        {columns.map((column) => (
          <Box
            key={column.property}
            sx={{
              width: column.percentWidth + '%',
              p: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
              borderLeft: '1px solid black'
            }}
          >
            {column.title}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
