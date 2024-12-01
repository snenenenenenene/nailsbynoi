// components/image-viewer.tsx
"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Image {
	src: string;
	alt: string;
}

export function ImageViewer({
	images,
	currentIndex,
	onClose,
}: {
	images: Image[];
	currentIndex: number;
	onClose: () => void;
}) {
	const [mounted, setMounted] = useState(false);
	const [index, setIndex] = useState(currentIndex);

	useEffect(() => {
		setMounted(true);
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
			if (e.key === 'ArrowLeft') prev();
			if (e.key === 'ArrowRight') next();
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [onClose]);

	const next = () => setIndex((i) => (i + 1) % images.length);
	const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

	const content = (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 z-[100]"
			>
				{/* Backdrop with blur */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/90 backdrop-blur-md"
					onClick={onClose}
				/>

				{/* Controls */}
				<div className="relative z-50 h-full">
					{/* Close button */}
					<button
						onClick={onClose}
						className="absolute top-8 right-8 p-2 text-white/90 hover:text-white
                     rounded-full hover:bg-white/10 transition-all"
						aria-label="Sluiten"
					>
						<X className="w-8 h-8" />
					</button>

					{/* Navigation buttons */}
					<button
						onClick={(e) => { e.stopPropagation(); prev(); }}
						className="absolute left-8 top-1/2 -translate-y-1/2 p-3 text-white/90
                     hover:text-white rounded-full hover:bg-white/10 transition-all"
						aria-label="Vorige afbeelding"
					>
						<ChevronLeft className="w-10 h-10" />
					</button>

					<button
						onClick={(e) => { e.stopPropagation(); next(); }}
						className="absolute right-8 top-1/2 -translate-y-1/2 p-3 text-white/90
                     hover:text-white rounded-full hover:bg-white/10 transition-all"
						aria-label="Volgende afbeelding"
					>
						<ChevronRight className="w-10 h-10" />
					</button>

					{/* Image */}
					<div className="h-full flex items-center justify-center p-20">
						<div className="relative max-w-7xl w-full h-full">
							<AnimatePresence mode="wait">
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 1.1 }}
									transition={{ duration: 0.2 }}
									className="relative w-full h-full"
								>
									<Image
										src={images[index].src}
										alt={images[index].alt}
										fill
										className="object-contain"
										sizes="(max-width: 1920px) 100vw"
										priority
										quality={100}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>

					{/* Counter */}
					<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/90 font-medium text-lg">
						{index + 1} / {images.length}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);

	if (!mounted) return null;

	return createPortal(content, document.body);
}