import Image from "next/image"

interface Props {
	image: string
}

export const ProductCoverImage = ({ image }: Props) => {
	return (
		<div className={"h-full overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100"}>
			<Image
				width={320}
				height={320}
				src={image}
				className={
					"mt-0 h-full max-h-max w-full cursor-pointer object-cover object-center p-4 transition-transform hover:scale-105"
				}
				alt={"produkt"}
			/>
		</div>
	)
}
