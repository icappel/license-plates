import Reporter from "../Reporter";


function HomeReporter() {
    return (
        <main>
            <section className="hero">
                <div className="hero-body">
                    <div className="title">
                        Report a driver
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