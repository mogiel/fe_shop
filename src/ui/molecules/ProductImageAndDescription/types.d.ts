interface Product {
	id?: string
	name: string
	price: number
	category: string
	imageCover: ImageCover
	description: string
}

interface ImageCover {
	src: string
	alt: string
}
