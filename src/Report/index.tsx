export interface ReportProps {
    date: Date
    trait: string
    note?: string
}

function Report(props: ReportProps) {
    // Note: React auto-escapes rendered strings, that's why I'm not manually sanitizing them.
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Report from:{" "}
                    <time dateTime={props.date.toISOString()}>{props.date.toDateString()}</time>
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>
                        This driver was reported as being {props.trait}.
                    </p>
                    {
                        props.note && 
                        <p>
                            The reporter also left the following comment: "{props.note}""
                        </p>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Report