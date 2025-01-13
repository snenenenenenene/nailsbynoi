// app/manicure/layout.tsx
import { siteConfig } from '@/config/site';
import { Viewport } from 'next';

export const viewport: Viewport = {
	themeColor: '#FDB8C5',
	width: 'device-width',
	initialScale: 1,
};

interface ManicureLayoutProps {
	children: React.ReactNode;
}

export default async function ManicureLayout({ children }: ManicureLayoutProps) {
	return (
		<section
			itemScope
			itemType="http://schema.org/BeautySalon"
		>
			<meta itemProp="name" content={siteConfig.businessName} />
			<meta itemProp="description" content="Luxueuze manicure en nagelverzorging uit Brasschaat" />
			<meta itemProp="address" content={siteConfig.location} />
			<meta itemProp="telephone" content={siteConfig.phone} />
			{children}
		</section>
	);
}