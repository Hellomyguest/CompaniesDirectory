import { Box, Stack, Typography } from '@mui/material';
import { CompaniesDirectory } from '../../entities/companiesDirectory/ui/CompaniesDirectory/CompaniesDirectory';

export const MainPage = () => {
  return (
    <Stack sx={{ flex: '1 1 auto' }}>
      <Box sx={{ p: '1rem 1rem', borderBottom: '1px solid white' }}>
        <Typography variant='h3'>Справочник компаний</Typography>
      </Box>
      <CompaniesDirectory />
    </Stack>
  );
};
