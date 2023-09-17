"use client"

import type { Route } from "next"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { type ReactNode } from "react"

interface Props<T extends string> {
	children: ReactNode
	href: Route<T> | URL
}

export const ActiveLink = ({ children, href }: Props<string>) => {
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
