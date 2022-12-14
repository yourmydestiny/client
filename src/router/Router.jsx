import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import SelectPage from '../pages/SelectPage/SelectPage';

export default function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/selectpage" element={<SelectPage></SelectPage>} />
      </Routes>
    </BrowserRouter>
  );
}
