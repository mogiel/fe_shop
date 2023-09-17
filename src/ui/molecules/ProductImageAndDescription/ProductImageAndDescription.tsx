import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage/ProductCoverImage"
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription"

interface Props {
	product: Product
}

export const ProductImageAndDescription = ({ product }: Props) => {
	return (
		<li>
			<ProductCoverImage imageCover={product.imageCover} />
			<ProductListItemDescription
				name={product.name}
				category={product.category}
				price={product.price}
			/>
		</li>
	)
}
