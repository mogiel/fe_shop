import { ProductList } from "@ui/organisms/ProductList/ProductList"
import { getProductsList } from "@api/products"

export async function ProductPage() {
	const products = await getProductsList()
	return <ProductList products={products} />
}
