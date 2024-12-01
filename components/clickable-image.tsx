/* eslint-disable @next/next/no-img-element */
// components/clickable-image.tsx
"use client";

import { Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { ImageViewer } from './image-viewer';

interface ClickableImageProps {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	fill?: boolean;
	className?: string;
	priority?: boolean;
	allPageImages: Array<{ src: string; alt: string; }>;
	currentIndex: number;
}

export function ClickableImage({
	src,
	alt,
	width,
	height,
	className,
	allPageImages,
	currentIndex
}: ClickableImageProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div
				className="group relative cursor-pointer"
				onClick={() => setIsOpen(true)}
				role="button"
				tabIndex={0}
				aria-label={`Open ${alt} in viewer`}
			>
				<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 rounded-lg flex items-center justify-center">
					<Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
				</div>
				<img
					src={src}
					alt={alt}
					width={width}
					height={height}
					className={className}
				/>
			</div>

			{isOpen && (
				<ImageViewer
					images={allPageImages}
					currentIndex={currentIndex}
					onClose={() => setIsOpen(false)}
				/>
			)}
		</>
	);
}