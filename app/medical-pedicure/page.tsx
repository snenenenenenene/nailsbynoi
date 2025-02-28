// app/medical-pedicure/page.tsx
"use client";

import { ClickableImage } from '@/components/clickable-image';
import { siteConfig } from '@/config/site';
import { ChevronLeft, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

// Define all page images
const pageImages = Array.from({ length: 9 }, (_, i) => ({
	src: `/images/pedicure/pedicure${i + 1}.JPG`,
	alt: `Medical Pedicure - ${i + 1}`
}));

const CallButton = () => (
	<a
		href={`tel:${siteConfig.phone}`}
		className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg
             hover:bg-gray-800 transition-all duration-300 group"
	>
		<span>Bel Nu</span>
		<Phone className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
	</a>
);

export default function MedicalPedicurePage() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const imagesPerView = 3;

	const nextSlide = () => {
		setCurrentIndex((prev) =>
			prev + imagesPerView >= pageImages.length ? 0 : prev + imagesPerView
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) =>
			prev - imagesPerView < 0 ? Math.max(0, pageImages.length - imagesPerView) : prev - imagesPerView
		);
	};

	return (
		<div>
			{/* Hero Section */}
			<section className="py-24" id="hero">
				<div className="w-full max-w-screen-xl mx-auto px-8">
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-center">
						<div className="max-w-[560px] space-y-6">
							<div className="space-y-2">
								<h1 className="text-4xl sm:text-6xl font-medium">Noi Medische Pedicure</h1>
								<div className="text-lg font-light">Aan huis</div>
							</div>
							<p className="text-lg text-gray-800 mb-8">
								Professionele voetverzorging met medische expertise. Ik bied
								gespecialiseerde behandelingen voor diverse voetproblemen met de hoogste
								aandacht voor hygiëne en comfort.
							</p>
						</div>
						<div className="max-w-[560px]">
							<div className="relative">
								<div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-500">
									<ClickableImage
										src="/images/pedicure/pedicure6.JPG"
										alt="Medical Pedicure Hero"
										width={560}
										height={560}
										className="w-full"
										priority
										allPageImages={pageImages}
										currentIndex={5}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Procedures Section */}
			<section className="py-24">
				<div className="w-full max-w-screen-xl mx-auto px-8">
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-start">
						<div className="space-y-8">
							<h2 className="text-3xl sm:text-4xl font-medium mb-6">
								Behandelingen
							</h2>

							<div className="space-y-6">
								<div className="space-y-8">
									<ul className="list-disc list-inside space-y-2 text-gray-800">
										<li>Desinfecterende lotion</li>
										<li>Knippen en vijlen</li>
										<li>Kloven</li>
										<li>Ingegroeide nagels</li>
										<li>Likdoorns</li>
										<li>Schimmel- en kalknagels</li>
										<li>Massage</li>
										<li>Voetcrème</li>
									</ul>

									<div className="space-y-2">
										<h3 className="text-xl font-medium">Prijzen</h3>
										<ul className="list-none space-y-1">
											<li>Pedicure basis: €35</li>
											<li>Extra behandelingen te bespreken bij eerste afspraak</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-500">
							<ClickableImage
								src={pageImages[1].src}
								alt={pageImages[1].alt}
								width={2000}
								height={1}
								className="w-full h-[600px] object-cover"
								allPageImages={pageImages}
								currentIndex={1}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-24" id="images">
				<div className="w-full max-w-screen-xl mx-auto px-8">
					<div className="text-center mb-16 space-y-4">
						<h2 className="text-3xl sm:text-4xl font-medium">Galerij</h2>
						<p className="text-gray-800">Bekijk onze faciliteiten en behandelingen</p>
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
								{[2, 3, 4, 5, 7, 8].map((index) => (
									<div
										key={index}
										className="sm:flex-[0_0_calc(33.33%-8px)] flex-[0_0_calc(100%-10px)] 
                             min-w-0 mx-1.5 first:ml-0 last:mr-0"
									>
										<div className="block relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg
                                hover:scale-[1.02] transition-all duration-500">
											<ClickableImage
												src={pageImages[index].src}
												alt={pageImages[index].alt}
												fill
												className="object-cover"
												allPageImages={pageImages}
												currentIndex={index}
											/>
										</div>
									</div>
								))}
							</div>
						</div>

						<button
							onClick={nextSlide}
							className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed"
							disabled={currentIndex + imagesPerView >= 6}
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
								<h2 className="text-3xl sm:text-4xl font-medium mb-6">Maak Een Afspraak</h2>
								<p className="text-gray-800">Professionele voetverzorging uit {siteConfig.location}</p>
							</div>

							<div className="space-y-8">
								<div className="flex items-center group">
									<MapPin className="w-5 h-5 mr-4 text-gray-800 group-hover:text-black transition-colors" />
									<div>
										<h3 className="font-medium mb-1">Locatie</h3>
										<p className="text-gray-800">Brasschaat, Schilde, Schoten, Ekeren, Kapellen, Merksem</p>
									</div>
								</div>

								<div className="flex items-center group">
									<Phone className="w-5 h-5 mr-4 text-gray-800 group-hover:text-black transition-colors" />
									<div>
										<h3 className="font-medium mb-1">Telefoon</h3>
										<a href={`tel:${siteConfig.phone}`}
											className="text-gray-800 hover:text-black transition-colors">
											{siteConfig.phone}
										</a>
									</div>
								</div>

								<div className="flex items-center group">
									<Mail className="w-5 h-5 mr-4 text-gray-800 group-hover:text-black transition-colors" />
									<div>
										<h3 className="font-medium mb-1">E-mail</h3>
										<a href={`mailto:${siteConfig.email}`}
											className="text-gray-800 hover:text-black transition-colors">
											{siteConfig.email}
										</a>
									</div>
								</div>
							</div>

							<div>
								<CallButton />
							</div>
						</div>

						<div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-500">
							<ClickableImage
								src={pageImages[0].src}
								alt={pageImages[0].alt}
								width={800}
								height={800}
								className="w-full h-[600px] object-cover"
								allPageImages={pageImages}
								currentIndex={0}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}