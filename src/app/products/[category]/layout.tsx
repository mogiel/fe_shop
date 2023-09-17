import type { ReactNode } from "react"

export const generateStaticParams = async () => {
	return [
		{
			category: "t-shirt",
		},
		{
			category: "bokserki",
		},
	]
}

export default function CategoryProductLayout({ children }: { children: ReactNode }) {
	return children
}
