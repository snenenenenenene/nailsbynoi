"use client"
// components/footer.tsx
import { siteConfig } from '@/config/site';
import { Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Footer() {
	const pathname = usePathname();
	const isManicure = pathname === '/manicure';

	return (
		<footer className="py-24">
			<div className="w-full max-w-screen-xl mx-auto px-8">
				<div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-800">
					<div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
						<p>© {new Date().getFullYear()} {siteConfig.businessName}.</p>
						<p>Website door <a
							href="https://sennebels.xyz"
							target="_blank"
							rel="noopener noreferrer"
							className="text-black hover:underline font-medium">
							Senne Bels
						</a>
						</p>
					</div>
					{isManicure && (
						<div className="flex space-x-6 mt-4 sm:mt-0">
							<a
								href="https://www.instagram.com/nail_noi_salon/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-800 hover:text-black transition-colors"
							>
								<Instagram className="w-6 h-6" />
							</a>
						</div>
					)}
				</div>
			</div>
		</footer>
	);
}