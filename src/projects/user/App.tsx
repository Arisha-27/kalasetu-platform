import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "./pages/HomePage";
import ArtisansPage from "./pages/ArtisansPage";
import DashboardPage from "./pages/DashboardPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import CommunityPage from "./pages/CommunityPage";
import CollectionsPage from "./pages/CollectionsPage";
import NotFound from "./pages/NotFound";

const App = () => (
  // 👇 Forces Orange/Earthy Theme
  <div className="theme-user min-h-screen flex flex-col bg-background text-foreground font-sans">
    <Header />
    <main className="flex-1">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="artisans" element={<ArtisansPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="workshops" element={<WorkshopsPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="collections" element={<CollectionsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;