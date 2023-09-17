import { fetch } from "next/dist/compiled/@edge-runtime/primitives"

export const getProductsList = async () => {
	const res = (await fetch("https://naszsklep-api.vercel.app/api/products").then((r) =>
		r.json(),
	)) as ProductResData[]
	return res.map(
		(product: ProductResData): Product => ({
			id: product.id,
			name: product.title,
			price: product.price,
			category: product.category,
			imageCover: {
				src: product.image,
				alt: product.title,
			},
		}),
	)
}
