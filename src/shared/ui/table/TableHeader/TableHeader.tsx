import { Button, Checkbox, Divider, FormControlLabel, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export enum SelectedAllState {
  ALL = 'all',
  NONE = 'none',
  PARTLY = 'partly'
}

type Props = {
  title: string;
  toggleSelectAll: () => void;
  selectedAllState: SelectedAllState;
  handleDeleteRows: () => void;
  handleAddRow: () => void;
};

export const TableHeader = ({
  title,
  toggleSelectAll,
  selectedAllState,
  handleDeleteRows,
  handleAddRow
}: Props) => {
  return (
    <Stack gap={1} p={1}>
      <Typography color='black' variant='h6' ml={1}>
        {title}
      </Typography>
      <Stack direction='row' gap={1} divider={<Divider orientation='vertical' flexItem />}>
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
    </Stack>
  );
};
