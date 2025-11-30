import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      
      <footer className="relative z-10 glass-strong border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Chosen Daily
            </h3>
            <p className="text-white/50">
              Built for God's glory. Transforming lives since 2025.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="mailto:support@chosendaily.com" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>

          <div className="text-center mt-8 text-white/30 text-sm">
            © 2025 Chosen Daily. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
