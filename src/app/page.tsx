export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className={"mb-5 text-3xl"}>Sklep osiedlowy</h1>
            <ul>
                <li data-testid="products-list">Mąka</li>
                <li data-testid="products-list">Cukier</li>
                <li data-testid="products-list">Chleb</li>
                <li data-testid="products-list">Masło</li>
            </ul>
        </main>
    )
}
