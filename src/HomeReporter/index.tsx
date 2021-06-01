import Reporter from "../Reporter";


function HomeReporter() {
    return (
        <main className="columns is-centered">
            <section className="hero box column is-half">
                <div className="hero-body">
                    <div className="title">
                        <h2>Report a driver</h2>
                    </div>
                    <div className="subtitle">
                        <Reporter />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomeReporter