interface Product {
	id: string
	title: string
	price: number
	description: string
	category: string
	rating: {
		rate: number
		count: number
	}
	image: string
	longDescription: string
}

interface ImageCover {
	src: string
	alt: string
}
