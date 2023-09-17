import Link from "next/link"
import { ProductCoverImage } from "@ui/atoms/ProductCoverImage/ProductCoverImage"
import { ProductListItemDescription } from "@ui/atoms/ProductListItemDescription/ProductListItemDescription"

interface Props {
	product: Product
}

export const ProductImageAndDescription = ({ product }: Props) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<ProductCoverImage imageCover={product.imageCover} />
			</Link>
			<ProductListItemDescription
				name={product.name}
				category={product.category}
				price={product.price}
			/>
		</li>
	)
}
