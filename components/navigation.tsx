// components/navigation.tsx
'use client';

import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Navigation() {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="fixed top-0 left-0 right-0 z-50">
			<nav className={`w-full max-w-screen-xl mx-auto px-8 backdrop-blur-sm transition-[padding] duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
				<div className="flex space-x-8 items-center">
					{siteConfig.mainNav.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="relative px-3 py-2 text-lg font-medium rounded-md"
						>
							<span className="relative z-10 text-gray-800">
								{item.title}
							</span>
							{pathname === item.href && (
								<motion.div
									className="absolute inset-0 bg-pink-100 -z-10"
									layoutId="nav-indicator"
									transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
								/>
							)}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
}