import Reporter from "../Reporter";


function HomeReporter() {
    return (
        <section className="hero column is-half is-max-desktop">
            <div className="hero-body">
                <div className="title block">
                    <h2>Report a driver</h2>
                </div>
                <div>
                    <Reporter />
                </div>
            </div>
        </section>
    )
}

export default HomeReporter