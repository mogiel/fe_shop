import "./globals.css"
import type { Metadata, Route } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ActiveLink } from "@ui/atoms/ActiveLink/ActiveLink"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

const links: { href: Route | URL; value: string }[] = [
	{ href: "/", value: "Home" },
	{ href: "/products", value: "All" },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-slate-100`}>
				<nav className={"bg-white shadow dark:bg-gray-800 "}>
					<ul
						className={
							"container mx-auto flex items-center justify-center p-6 capitalize text-gray-600 dark:text-gray-300"
						}
					>
						{links.map((link, index: number) => (
							<li>
								<ActiveLink
									key={index}
									href={link.href}
									activeClassName={
										"text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
									}
									className={
										"mx-1.5 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-800 dark:hover:text-gray-200 sm:mx-6"
									}
								>
									{link.value}
								</ActiveLink>
							</li>
						))}
					</ul>
				</nav>

				<section
					className={"mx-auto mb-24 max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl"}
				>
					{children}
				</section>
				<footer className="fixed bottom-0 left-0 z-20 w-full border-t border-gray-200 bg-white p-4 shadow dark:border-gray-600 dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
					<span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
						© 2023 All Rights Reserved.
					</span>
					<ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
						<li>
							<Link href="/regulamin" className="mr-4 hover:underline md:mr-6">
								Regulamin
							</Link>
						</li>
						<li>
							<Link href="/polityka-prywatnosci" className="mr-4 hover:underline md:mr-6">
								Polityka firmy
							</Link>
						</li>
					</ul>
				</footer>
			</body>
		</html>
	)
}
