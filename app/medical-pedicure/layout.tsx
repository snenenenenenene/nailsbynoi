// app/medical-pedicure/layout.tsx
import { siteConfig } from '@/config/site';
import { Viewport } from 'next';

export const viewport: Viewport = {
	themeColor: '#FFFFFF',
	width: 'device-width',
	initialScale: 1,
};

interface PedicureLayoutProps {
	children: React.ReactNode;
}

export default async function PedicureLayout({ children }: PedicureLayoutProps) {
	return (
		<section
			itemScope
			itemType="http://schema.org/MedicalBusiness"
		>
			<meta itemProp="name" content={siteConfig.businessName} />
			<meta itemProp="description" content="Professionele medische pedicure en voetverzorging" />
			<meta itemProp="address" content={siteConfig.location} />
			<meta itemProp="telephone" content={siteConfig.phone} />
			{children}
		</section>
	);
}