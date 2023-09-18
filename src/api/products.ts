import { fetch } from "next/dist/compiled/@edge-runtime/primitives"

export const getProductsList = async (take = 20, offset = 0) => {
	const res = (await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	).then((r) => r.json())) as ProductResData[]
	return res.map(productResDataToProduct)
}

export const getProductById = async (id: Product["id"]) => {
	const res = (await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`).then((r) =>
		r.json(),
	)) as ProductResData
	return productResDataToProduct(res)
}

export const productResDataToProduct = (product: ProductResData): Product => {
	return {
		id: product.id,
		name: product.title,
		price: product.price,
		category: product.category,
		imageCover: {
			src: product.image,
			alt: product.title,
		},
		description: product.description,
	}
}
