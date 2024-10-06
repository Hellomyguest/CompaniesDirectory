import { Stack } from '@mui/material';

export type TableProps = {
  children: React.ReactNode;
};

export const Table = ({ children }: TableProps) => {
  return (
    <Stack
      sx={{
        m: 3,
        border: '1px solid black',
        borderRadius: 1,
        flex: '1 1 auto',
        backgroundColor: 'lightgrey'
      }}
    >
      {children}
    </Stack>
  );
};
