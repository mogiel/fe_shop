import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage/ProductCoverImage"
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription"

interface Props {
	product: Product
}

export const ProductImageAndDescription = ({ product }: Props) => {
	return (
		<li>
			<ProductCoverImage image={product.image} />
			<ProductListItemDescription
				name={product.title}
				category={product.category}
				price={product.price}
			/>
		</li>
	)
}
