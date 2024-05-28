'use client';

import Header from '@/components/Header/Header';
import { ContextWrapper } from '@/context';
import React, { useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {}, []);
	return (
		<html lang="en">
			<body>
				<ContextWrapper>
					<Header />
					{children}
				</ContextWrapper>
			</body>
		</html>
	);
}
