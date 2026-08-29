import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SettingsLayout from './components/SettingsLayout';
import Settings from './pages/Settings';
import AddRoom from './pages/AddRoom';
import RoomMap from './pages/RoomMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/room-map" element={<RoomMap />} />
        <Route path="/settings" element={<SettingsLayout />}>
          <Route index element={<Settings />} />
          <Route path="rooms/add" element={<AddRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
