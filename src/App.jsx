import { RouterProvider } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import routes from './router/Routes';
import './index.css';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
  );
}

export default App;
