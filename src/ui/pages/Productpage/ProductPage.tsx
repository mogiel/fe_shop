import { ProductList } from "@ui/organisms/ProductList/ProductList"
import { fetch } from "next/dist/compiled/@edge-runtime/primitives"

export default async function ProductPage() {
	// const res = await fetch(
	// 	"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmnfofm8228t01um9h898gjx/master",
	// )

	const res = (await fetch("https://naszsklep-api.vercel.app/api/products").then((r) =>
		r.json(),
	)) as Product[]
	console.log(res)
	return <ProductList products={res} />
}
