import { IReport } from "actions"
import Report from "Report"

export interface ReportListProps {
    reports: Array<IReport>,
    emptyMessage: string,
    remaining?: boolean,
    onRequestRemaining?: () => void
}

function ReportList(props: ReportListProps) {

    return (
        <section>
            {props.reports.length ?
                props.reports.map(report => <Report key={report.reportId} date={report.date} trait={report.trait} note={report.note} />)
                :
                <div>{props.emptyMessage}</div>
            }
            {
                props.remaining && 
                <div className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <button onClick={props.onRequestRemaining}>See more</button>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default ReportList