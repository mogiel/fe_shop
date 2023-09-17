import { ProductImageAndDescription } from "@ui/molecules/ProductImageAndDescription/ProductImageAndDescription"

interface Props {
	products: Product[]
}

export const ProductList = ({ products }: Props) => {
	return (
		<section className={"mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl"}>
			<ul
				className={"grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
				data-testid="products-list"
			>
				{products.map((product: Product, index: number) => (
					<ProductImageAndDescription product={product} key={index} />
				))}
			</ul>
		</section>
	)
}
