"use client"

import type { Route } from "next"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { type ReactNode, useEffect, useState } from "react"

interface Props<T extends string> {
	children: ReactNode
	href: Route<T> | URL
	className?: string
	activeClassName?: string
}

export const ActiveLink = ({
	children,
	href,
	className = "text-blue-400 hover:text-blue-600",
	activeClassName = "underline",
}: Props<string>) => {
	const pathname = usePathname()
	const [isActive, setIsActive] = useState(pathname === href)

	useEffect(() => {
		setIsActive(pathname === href)
	}, [pathname, href])

	return (
		<Link href={href} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	)
}
