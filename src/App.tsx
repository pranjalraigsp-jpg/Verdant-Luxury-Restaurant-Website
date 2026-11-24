import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { ParticleBackground } from './components/ParticleBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { ContactReservationsPage } from './pages/ContactReservationsPage';
import type { NavigationPage, MenuItem } from './types';

export function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Sync hash routing so users can refresh or bookmark #home, #about, #menu, #contact
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavigationPage;
      if (['home', 'about', 'menu', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: NavigationPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0A1915] text-[#F2EBDD] font-inter overflow-x-hidden selection:bg-[#C8A96B] selection:text-[#0A1915]">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Luxury Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Interactive Golden Ambient Particles */}
      <ParticleBackground />

      {/* Floating Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* EXACTLY FOUR MAIN PAGES */}
      <main>
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectDish={(dish) => setSelectedDish(dish)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            onSelectDish={(dish) => setSelectedDish(dish)}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contact' && (
          <ContactReservationsPage />
        )}
      </main>

      {/* Full-Width Dark Emerald Luxury Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Gastronomic Dish Detail Modal with WhatsApp Ordering */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserveTable={() => {
          setSelectedDish(null);
          navigateTo('contact');
        }}
      />
    </div>
  );
}

export default App;
