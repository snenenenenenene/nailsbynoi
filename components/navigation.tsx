// components/navigation.tsx
'use client';

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
			<nav
				className={`w-full max-w-screen-xl mx-auto px-8 backdrop-blur-sm transition-[padding] duration-300
        ${isScrolled ? 'py-3' : 'py-6'}`}
			>
				<div className="flex justify-between items-center">
					<div className="relative flex items-center space-x-4">
						<Link
							href="/manicure"
							className={`relative z-10 text-lg tracking-wide lowercase hover:text-black transition-colors
              ${pathname === '/manicure' ? 'text-black' : 'text-gray-600'}`}
						>
							manicure
						</Link>

						<span className="w-1 h-1 rounded-full bg-black/20" />

						<Link
							href="/medical-pedicure"
							className={`relative z-10 text-lg tracking-wide lowercase hover:text-black transition-colors
              ${pathname === '/medical-pedicure' ? 'text-black' : 'text-gray-600'}`}
						>
							medical pedicure
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
}