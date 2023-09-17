import { getProductById } from "@api/products"

export default async function SinglePage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId)
	return <div>{product.name}</div>
}
