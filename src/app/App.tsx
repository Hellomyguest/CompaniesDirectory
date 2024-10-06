import { Stack } from '@mui/material';
import { MainPage } from '../pages/Main/MainPage';
import { Providers } from './providers';

function App() {
  return (
    <Providers>
      <Stack sx={{ width: '100vw', height: '100vh' }}>
        <MainPage />
      </Stack>
    </Providers>
  );
}

export default App;
