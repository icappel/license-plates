import { DriverTrait, DRIVER_TRAITS, REGIONS } from '../domain'
import { MAX_COMMENT_LENGTH, MAX_LICENSE_PLATE_LENGTH } from 'config'
import { useState } from "react"
import { sendLicensePlateReport } from "actions"

function Reporter() {
    const [plateNumber, setPlateNumber] = useState("")
    const [region, setRegion] = useState(REGIONS[0])
    const [trait, setTrait] = useState<string>("")
    const [comment, setComment] = useState("")

    const isValid = (): boolean => {
        return (plateNumber.match(/[a-zA-Z0-9]+/) != null)
            && trait.length > 0
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (isValid()) {
            sendLicensePlateReport(plateNumber, region, trait, comment)
                .then(() => alert("Finish report submit"))
        } else {
            alert("TODO: Form error validation")
        }

        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="field">
                <label className="label">Plate number</label>
                <div className="control">
                    <input 
                        className="input" 
                        placeholder="Plate number" 
                        required
                        maxLength={MAX_LICENSE_PLATE_LENGTH} 
                        onChange={(event => setPlateNumber(event.target.value))} 
                        value={plateNumber} 
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Region</label>
                <div className="control">
                    <div className="select">
                        <select value={region} onChange={event => setRegion(event.target.value)} >
                            {REGIONS.map((region) => <option key={region}>{region}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">Region</label>
                <div className="control">
                    <div className="select">
                        <select onChange={event => setTrait(event.target.value)} >
                            {DRIVER_TRAITS.map(trait => <option value={trait.name} key={trait.name}>{`${trait.name} ${trait.emoji}`}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">Comment (Optional)</label>
                <div className="control">
                    <textarea 
                        className="textarea" 
                        placeholder="Comment"
                        maxLength={MAX_COMMENT_LENGTH}
                        value={comment}
                        onChange={event => setComment(event.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button type="submit" className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Reporter