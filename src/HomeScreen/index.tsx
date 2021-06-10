import React from "react";
import { Link } from "react-router-dom";
import HomeReporter from "../HomeReporter";

function HomeScreen() {
    return (
        <main>
            <div className="columns is-centered py-3 px-1 has-background-info-light">
                <HomeReporter />
            </div>
            <div className="columns is-centered py-6 px-1 has-background-danger-light">
                <section className="column is-half is-max-desktop has-text-centered">
                    <h2 className="title is-2">
                        Dangerous driving hurts us all.
                    </h2>
                    <p className="subtitle is-3">
                        Help keep everyone accountable by reporting dangerous 
                        drivers.
                    </p>
                </section>
            </div>
            <div className="columns is-centered py-6 px-1 has-background-primary-light">
                <section className="column is-half is-max-desktop has-text-centered">
                    <h2 className="title is-2 is-spaced">
                        Curious how you're doing?
                    </h2>
                    <Link to="search" className="subtitle is-3 has-text-link">Search your plate.</Link>
                </section>
            </div>
        </main>
    )
}

export default HomeScreen;