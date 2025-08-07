
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactsPage from "@/pages/ContactsPage";
import OrderPage from "@/pages/OrderPage";
import ReviewsPage from "@/pages/ReviewsPage";
import DeliveryPage from "@/pages/DeliveryPage";
import CorporatePage from "@/pages/CorporatePage";
import HealthyPage from "@/pages/HealthyPage";
import CateringPage from "@/pages/CateringPage";
import BlogPage from "@/pages/BlogPage";
import VacanciesPage from "@/pages/VacanciesPage";
import PartnersPage from "@/pages/PartnersPage";
import NewsPage from "@/pages/NewsPage";
import FranchisePage from "@/pages/FranchisePage";
import GalleryPage from "@/pages/GalleryPage";
import FAQPage from "@/pages/FAQPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import CertificatesPage from "@/pages/CertificatesPage";
import CalculatorPage from "@/pages/CalculatorPage";
import PromotionsPage from "@/pages/PromotionsPage";
import RecipesPage from "@/pages/RecipesPage";
import NutritionPage from "@/pages/NutritionPage";
import SupportPage from "@/pages/SupportPage";
import TrackingPage from "@/pages/TrackingPage";
import LocationsPage from "@/pages/LocationsPage";
import CompanyPage from "@/pages/CompanyPage";
import InvestorsPage from "@/pages/InvestorsPage";
import PressPage from "@/pages/PressPage";
import SitemapPage from "@/pages/SitemapPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/healthy" element={<HealthyPage />} />
            <Route path="/catering" element={<CateringPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/vacancies" element={<VacanciesPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;