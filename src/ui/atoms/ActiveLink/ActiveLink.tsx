"use client"

import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { type ReactNode } from "react"

interface Props {
	children: ReactNode
	href: string
}

export const ActiveLink = ({ children, href }: Props) => {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<Link
			href={href}
			className={clsx("text-blue-400 hover:text-blue-600", isActive && "underline")}
		>
			{children}
		</Link>
	)
}
