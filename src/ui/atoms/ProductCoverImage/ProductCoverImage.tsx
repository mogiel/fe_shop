interface Props {
	imageCover: ImageCover
}

export const ProductCoverImage = ({ imageCover }: Props) => {
	return (
		<div className={"h-full overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100"}>
			<img
				width={320}
				// height={500}
				src={imageCover.src}
				alt={imageCover.alt}
				className={
					"mt-0 h-full max-h-max w-full cursor-pointer object-cover object-center p-4 transition-transform hover:scale-105"
				}
			/>
		</div>
	)
}
