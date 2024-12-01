// components/background.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Background = () => {
	const pathname = usePathname();
	const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
	const isManicure = pathname === '/manicure';

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const x = (e.clientX / window.innerWidth) * 100;
			const y = (e.clientY / window.innerHeight) * 100;
			setMousePosition({ x, y });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div
			className={`
        fixed inset-0 -z-10 
        transition-[--color-start,--color-mid,--color-end] duration-[2500ms] ease-in-out
        ${isManicure ? 'manicure-colors' : 'pedicure-colors'}
      `}
			style={{
				'--x': `${mousePosition.x}%`,
				'--y': `${mousePosition.y}%`,
				background: `
          radial-gradient(
            circle at var(--x) var(--y),
            var(--color-start) 0%,
            var(--color-mid) 45%,
            var(--color-end) 100%
          )
        `,
			} as React.CSSProperties}
		/>
	);
};