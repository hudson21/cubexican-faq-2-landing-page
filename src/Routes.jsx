import { Routes, Route } from 'react-router-dom';

import PricingPage from './pages/pricing';
import PrivacyPolicyPage from './pages/privacy-policy';
import AboutPage from './pages/about';

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/" element={<PricingPage />}></Route>
    </Routes>
  );
}
