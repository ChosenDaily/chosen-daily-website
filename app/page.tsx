import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      
      {/* Footer */}
      <footer className="bg-[#0B132B] border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#EDEDED] mb-4">
            © 2025 Chosen Daily. Built for God's glory.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-[#EDEDED]">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
            <a href="/contact" className="hover:text-white">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
