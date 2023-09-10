import { ProductImageAndDescription } from "@ui/molecules/ProductImageAndDescription/ProductImageAndDescription"

interface Props {
	products: Product[]
}

export const ProductList = ({ products }: Props) => {
	return (
		<ul
			className={"grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
			data-testid="products-list"
		>
			{products.map((product: Product) => (
				<ProductImageAndDescription product={product} />
			))}
		</ul>
	)
}
