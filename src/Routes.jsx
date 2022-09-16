import { Routes, Route } from 'react-router-dom';

import PricingPage from './pages/pricing';
import PrivacyPolicyPage from './pages/privacy-policy';
import AboutPage from './pages/about';

export default function CustomRoutes() {
  return (
    <Routes>
      <Route
        path="/cubexican-faq-2-landing-page/privacy-policy"
        element={<PrivacyPolicyPage />}
      ></Route>
      <Route
        path="/cubexican-faq-2-landing-page/about"
        element={<AboutPage />}
      ></Route>
      <Route
        path="/cubexican-faq-2-landing-page"
        element={<PricingPage />}
      ></Route>
    </Routes>
  );
}
