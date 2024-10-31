"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  MapPin,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';

interface InstagramImage {
  id: string;
  media_url: string;
  caption?: string;
  permalink: string;
}

const BookNowButton = ({ className = "" }: { className?: string }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center px-6 py-3 bg-black text-white rounded-lg
               hover-scale transition-all duration-300 hover:bg-gray-800 group ${className}`}
    href="https://www.setmore.com/"
  >
    <span>Reserveer Nu</span>
    <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
  </a>
);

const NailsPage = () => {
  const [images, setImages] = useState<InstagramImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const imagesPerView = 3;

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Change state when scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchInstagramImages = async () => {
    const response = await fetch('/api/instagram', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram images');
    }

    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchInstagramImages().then(data => setImages(data));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + imagesPerView >= images.length ? 0 : prev + imagesPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - imagesPerView < 0 ? Math.max(0, images.length - imagesPerView) : prev - imagesPerView
    );
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}>
        <nav className={`w-full max-w-screen-xl mx-auto px-8 transition-all duration-300 ease-in-out
                        ${isScrolled ? 'py-3' : 'py-6'}`}>
          <div className="flex justify-between items-center">
            <Link href="/" className="items-center no-underline flex hover-scale">
              <Image
                src="/images/logo.png"
                alt="Noi Nails Logo"
                width={isScrolled ? 140 : 180}
                height={isScrolled ? 140 : 180}
                className="mr-2 transition-all duration-300"
                priority
              />
            </Link>
            <BookNowButton className={`hidden sm:inline-flex transition-all duration-300
                                    ${isScrolled ? 'scale-90' : 'scale-100'}`} />
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="pt-28">
        {/* Hero Section */}
        <section className="py-24" id="hero">
          <div className="w-full max-w-screen-xl mx-auto px-8">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-center">
              <div className="max-w-[560px] space-y-6">
                <div className="flex space-x-6">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    href="https://www.instagram.com/nail_noi_salon"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-70 transition-opacity"
                    href="https://maps.google.com"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-medium">Brasschaat</span>
                  </a>
                </div>
                <div>
                  <h1 className="text-4xl sm:text-6xl font-light mb-4">
                    Welkom bij<br />
                    <span className="font-medium">Noi Nails</span>
                  </h1>
                  <p className="text-lg text-gray-800 mb-8">
                    Ervaar luxe nagelverzorging in het hart van Brasschaat. Ik ben gespecialiseerd in
                    natuurlijke nagelversteviging en artistieke designs met premium producten en technieken.
                  </p>
                  <BookNowButton />
                </div>
              </div>
              <div className="max-w-[560px]">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-lg hover-scale transition-all duration-500">
                    <Image
                      alt="Noi Nails Studio"
                      width={560}
                      height={560}
                      src="/images/nails1.jpg"
                      className="w-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="py-24" id="about">
          <div className="w-full max-w-screen-xl mx-auto px-8">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg hover-scale transition-all duration-500">
                <Image
                  alt="Over Ons"
                  width={2000}
                  height={1}
                  src="/images/about.jpg"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                  Uw Premium Nagelverzorging Bestemming
                </h2>
                <div className="space-y-4 text-gray-800">
                  <p>
                    Bij Noi Nails geloof ik in het versterken van uw natuurlijke schoonheid
                    door deskundige nagelverzorging. Onze ervaren specialisten zijn gespecialiseerd
                    in natuurlijke nagelversteviging, artistieke designs en premium behandelingen.
                  </p>
                  <p>
                    Onze diensten omvatten gelmanicures, signature nail art, natuurlijke nagelverzorging,
                    en luxe behandelingen. Ik gebruik alleen premium producten die uw natuurlijke
                    nagels beschermen en versterken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24" id="images">
          <div className="w-full max-w-screen-xl mx-auto px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-medium">Galerij</h2>
              <p className="text-gray-800">Ontdek onze laatste werken en nageldesigns</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex === 0}
                aria-label="Vorige slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="overflow-hidden flex-grow">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / imagesPerView)}%)` }}
                >
                  {images.map((image, index) => (
                    <div
                      key={image.id}
                      className="sm:flex-[0_0_calc(33.33%-8px)] flex-[0_0_calc(100%-10px)] 
                               min-w-0 mx-1.5 first:ml-0 last:mr-0"
                    >
                      <a
                        href={image.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg
                                 hover-scale transition-all duration-500"
                      >
                        <Image
                          alt={image.caption || `Galerij afbeelding ${index + 1}`}
                          fill
                          src={image.media_url}
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex + imagesPerView >= images.length}
                aria-label="Volgende slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24" id="contact">
          <div className="w-full max-w-screen-xl mx-auto px-8">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-center">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-medium mb-6">Neem Contact Op</h2>
                  <p className="text-gray-800">Ervaar luxe nagelverzorging in Brasschaat</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center group">
                    <MapPin className="w-5 h-5 mr-4 text-gray-800 group-hover:text-black transition-colors" />
                    <div>
                      <h3 className="font-medium mb-1">Locatie</h3>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black transition-colors">
                        Brasschaat
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <Phone className="w-5 h-5 mr-4 text-gray-800 group-hover:text-black transition-colors" />
                    <div>
                      <h3 className="font-medium mb-1">Telefoon</h3>
                      <a href="tel:0484767586"
                        className="text-gray-800 hover:text-black transition-colors">
                        0484767586
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <Mail className="w-5 h-5 mr-4 text-gray-800 group-hover:text-black transition-colors" />
                    <div>
                      <h3 className="font-medium mb-1">E-mail</h3>
                      <a href="mailto:nail.noi.salon@gmail.com"
                        className="text-gray-800 hover:text-black transition-colors">
                        nail.noi.salon@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <BookNowButton />
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg hover-scale transition-all duration-500">
                <Image
                  alt="Noi Nails Salon Interieur"
                  width={800}
                  height={800}
                  src="/images/nails9.jpg"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24">
          <div className="w-full max-w-screen-xl mx-auto px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
              <Link href="#top" className="mb-6 sm:mb-0">
                <Image
                  src="/images/logo.png"
                  alt="Noi Nails Logo"
                  width={150}
                  height={150}
                  className="hover-scale"
                />
              </Link>
              <a
                href="https://www.instagram.com/nail_noi_salon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-800">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <p>© {new Date().getFullYear()} Noi Nails.</p>
                <p>Website door <a
                  href="https://sennebels.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline font-medium">
                  Senne Bels
                </a>
                </p>
              </div>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link href="/privacy" className="text-gray-800 hover:text-black transition-colors">
                  Privacybeleid
                </Link>
                <Link href="/terms" className="text-gray-800 hover:text-black transition-colors">
                  Algemene Voorwaarden
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default NailsPage;