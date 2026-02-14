
import React, { useState } from 'react';
import { AppRoute } from './types';
import CalendarPage from './pages/Calendar';
import EditionPage from './pages/Edition';
import GalleryPage from './pages/Gallery';
import SignaturePage from './pages/Signature';
import PaymentPage from './pages/Payment';
import ConfirmationPage from './pages/Confirmation';
import AllCampaignsPage from './pages/AllCampaigns';
import HistoryPage from './pages/History';
import RightsManagementPage from './pages/RightsManagement';
import FinancialPage from './pages/Financial';
import MediaLibraryPage from './pages/MediaLibrary';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('all-campaigns');
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null);

  const renderRoute = () => {
    const props = { 
      onNavigate: setCurrentRoute, 
      selectedCampaignId, 
      setSelectedCampaignId 
    };

    switch (currentRoute) {
      case 'all-campaigns': return <AllCampaignsPage {...props} />;
      case 'calendar': return <CalendarPage {...props} />;
      case 'edition': return <EditionPage {...props} />;
      case 'gallery': return <GalleryPage {...props} />;
      case 'signature': return <SignaturePage {...props} />;
      case 'payment': return <PaymentPage {...props} />;
      case 'confirmation': return <ConfirmationPage {...props} />;
      case 'history': return <HistoryPage {...props} />;
      case 'rights': return <RightsManagementPage {...props} />;
      case 'financial': return <FinancialPage {...props} />;
      case 'media-library': return <MediaLibraryPage {...props} />;
      default: return <AllCampaignsPage {...props} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {renderRoute()}
    </div>
  );
};

export default App;
