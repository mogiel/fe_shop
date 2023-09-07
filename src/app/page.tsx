export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className={"mb-5 text-3xl"}>Sklep osiedlowy</h1>
            <ul data-testid="products-list">
                <li >Mąka</li>
                <li>Cukier</li>
                <li>Chleb</li>
                <li>Masło</li>
                <li>Wędlina</li>
            </ul>
        </main>
    )
}
