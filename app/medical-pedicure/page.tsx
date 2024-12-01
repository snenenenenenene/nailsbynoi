// app/medical-pedicure/page.tsx
"use client";

import { ClickableImage } from '@/components/clickable-image';
import { siteConfig } from '@/config/site';
import { Mail, MapPin, Phone } from 'lucide-react';

const pageImages = [
	{ src: "/images/pedicure1.jpg", alt: "Medical Pedicure Studio" },
	{ src: "/images/pedicure2.jpg", alt: "Medische Pedicure Behandeling" },
	{ src: "/images/pedicure3.jpg", alt: "Pedicure Salon Interieur" }
];

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
	return (
		<>
			{/* Hero Section */}
			<section className="py-24" id="hero">
				<div className="w-full max-w-screen-xl mx-auto px-8">
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-center">
						<div className="max-w-[560px] space-y-6">
							<h1 className="text-4xl sm:text-6xl font-light mb-4">
								Pedicure bij<br />
								<span className="font-medium">{siteConfig.businessName}</span>
							</h1>
							<p className="text-lg text-gray-800 mb-8">
								Professionele voetverzorging met medische expertise. Onze specialisten bieden
								gespecialiseerde behandelingen voor diverse voetproblemen met de hoogste
								aandacht voor hygiëne en comfort.
							</p>
							<CallButton />
						</div>
						<div className="max-w-[560px]">
							<div className="relative">
								<div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-500">
									<ClickableImage
										src="/images/pedicure1.jpg"
										alt="Medical Pedicure Studio"
										width={560}
										height={560}
										className="w-full"
										priority
										allPageImages={pageImages}
										currentIndex={0}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-24">
				<div className="w-full max-w-screen-xl mx-auto px-8">
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl sm:text-4xl font-medium mb-6">
								Medische Voetverzorging
							</h2>
							<div className="space-y-4 text-gray-800">
								<p>
									Bij {siteConfig.businessName} bieden wij professionele medische pedicure
									behandelingen aan. Onze expertise omvat het behandelen van diverse voetproblemen
									en het bieden van preventieve zorg.
								</p>
								<p>
									We gebruiken uitsluitend hoogwaardige instrumenten en volgen de strengste
									hygiënevoorschriften. Elke behandeling wordt aangepast aan uw specifieke
									behoeften en situatie.
								</p>
							</div>
						</div>
						<div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-500">
							<ClickableImage
								src="/images/pedicure2.jpg"
								alt="Medische Pedicure Behandeling"
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

			{/* Contact Section */}
			<section className="py-24" id="contact">
				<div className="w-full max-w-screen-xl mx-auto px-8">
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-center">
						<div className="space-y-12">
							<div>
								<h2 className="text-3xl sm:text-4xl font-medium mb-6">Maak Een Afspraak</h2>
								<p className="text-gray-800">Professionele voetverzorging in {siteConfig.location}</p>
							</div>

							<div className="space-y-8">
								<div className="flex items-center group">
									<MapPin className="w-5 h-5 mr-4 text-gray-800 group-hover:text-black transition-colors" />
									<div>
										<h3 className="font-medium mb-1">Locatie</h3>
										<a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
											className="text-gray-800 hover:text-black transition-colors">
											{siteConfig.location}
										</a>
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
								src="/images/pedicure3.jpg"
								alt="Pedicure Salon Interieur"
								width={800}
								height={800}
								className="w-full h-[600px] object-cover"
								allPageImages={pageImages}
								currentIndex={2}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}