import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Suspense } from 'react';


import { Login } from './pages/Login';
import { ReceiveTokenDetail } from './pages/ReceiveTokenDetail';
import { SendTokenDetail } from './pages/SendTokenDetail';
import { History } from './pages/History';
import { Settings } from './pages/Settings';
import { EditAccount } from './pages/Settings/EditAccount';
import { EditAccountName } from './pages/Settings/EditAccountName';
import { DeleteAccount } from './pages/Settings/DeleteAccount';
import { ManageAccount } from './pages/Settings/ManageAccount';
import { DeveloperSettings } from './pages/Settings/DeveloperSettings';
import { SecretPrivacySettings } from './pages/Settings/SecretPrivacySettings';
import { AboutCommune } from './pages/Settings/AboutCoummune';
import { Network } from './pages/Settings/Network';
import PopupLayout from './container/PopupLayout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/receive-token-detail" element={<ReceiveTokenDetail />} />
        <Route path="/send-token-detail" element={<SendTokenDetail/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/setting" element={<Settings/>} />
        <Route path="/edit-account" element={<EditAccount/>} />
        <Route path="/edit-account-name" element={<EditAccountName/>} />
        <Route path="/delete-account" element={<DeleteAccount/>} />
        <Route path="/manage-account" element={<ManageAccount/>} />
        <Route path="/developer-settings" element={<DeveloperSettings/>} />
        <Route path="/secret-privacy-settings" element={<SecretPrivacySettings/>} />
        <Route path="/about-commune" element={<AboutCommune/>} />
        <Route path="/network" element={<Network/>} />
        <Route path="/*" element={<Suspense><PopupLayout /></Suspense>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
