import { type Metadata } from "next"
import { getProductById, getProductsList } from "@api/products"

export const generateStaticParams = async () => {
	const products = await getProductsList()
	return products.map((product) => ({
		productId: product.id,
	}))
}

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string }
}): Promise<Metadata> => {
	const product = await getProductById(params.productId)
	return {
		title: `Produkt ${product.name}`,
		description: product.description,
	}
}

export default async function SingleProduct({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId)
	return <div>{product.name}</div>
}
