interface Product {
	id?: string
	name: string
	price: number
	category: string
	imageCover: ImageCover
}

interface ImageCover {
	src: string
	alt: string
}
