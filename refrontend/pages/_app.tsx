import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<div className="text-black bg-white dark:bg-gray-800 dark:text-white h-screen w-screen">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</ThemeProvider>
	)
}
