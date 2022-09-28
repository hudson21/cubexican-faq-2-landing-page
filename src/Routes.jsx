import { Routes, Route } from 'react-router-dom';

import PricingPage from './pages/pricing';
import PrivacyPolicyPage from './pages/privacy-policy';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

// Documentation
import CreateFAQPage from './pages/create-faq';
import CreateQAPage from './pages/create-qa';
import LimitationsPage from './pages/limitations';
import UseFAQExtensionPage from './pages/use-faq-theme-extension';
import UseFAQTabExtensionPage from './pages/use-faq-tab-theme-extension';
import UseSEOBoosterExtensionPage from './pages/use-seo-booster-extension';
import VideoDocumentationPage from './pages/video-documentation';

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<PricingPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<PricingPage />} />
      </Route>

      <Route path="documentation">
        <Route path="video" element={<VideoDocumentationPage />} />
        <Route path="create-qa" element={<CreateFAQPage />} />
        <Route path="create-faq" element={<CreateQAPage />} />
        <Route path="use-faq-extension" element={<UseFAQExtensionPage />} />
        <Route
          path="use-faq-tab-extension"
          element={<UseFAQTabExtensionPage />}
        />
        <Route
          path="use-seo-booster-extension"
          element={<UseSEOBoosterExtensionPage />}
        />
        <Route path="limitations" element={<LimitationsPage />} />
      </Route>
    </Routes>
  );
}
