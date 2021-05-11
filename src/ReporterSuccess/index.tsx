import "./styles.scss"

interface IReporterSuccessProps {
    timesReported: number,
    onReset: () => void
}

function ReporterSuccess(props: IReporterSuccessProps) {
    return (
        <div className="ReporterSuccess box" >
            <div className="block">
                <h3>Thanks for reporting.</h3>
            </div>
            <div className="block">
                This driver has been reported {props.timesReported} times before.
            </div>
            <div className="block">
                <button className="button" onClick={props.onReset}>Report another driver</button>
            </div>
        </div>
    )
}

export default ReporterSuccess