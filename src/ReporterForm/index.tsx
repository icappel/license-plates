import { MAX_LICENSE_PLATE_LENGTH, MAX_COMMENT_LENGTH } from "config"
import { REGIONS, DRIVER_TRAITS, IDriverTrait } from "../domain"

interface IReporterFormProps {
    plateNumber: string,
    setPlateNumber: (newPlateNumber: string) => any,
    region: string,
    setRegion: (newRegion: string) => any,
    trait: string,
    setTrait: (newTrait: string) => any,
    comment: string,
    setComment: (newComment: string) => any,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => any,
    loading: boolean
}

function ReporterForm(props:IReporterFormProps) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="plate-input">Plate Number</label>
                <div className="control">
                    <input 
                        className="input" 
                        id="plate-input"
                        placeholder="Plate number" 
                        required
                        maxLength={MAX_LICENSE_PLATE_LENGTH} 
                        onChange={(event => props.setPlateNumber(event.target.value))} 
                        value={props.plateNumber} 
                    />
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="region-input">Region</label>
                <div className="control">
                    <div className="select">
                        <select id="region-input" value={props.region} onChange={event => props.setRegion(event.target.value)} >
                            {REGIONS.map((region: string) => <option key={region}>{region}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="trait-input">Trait</label>
                <div className="control">
                    <div className="select">
                        <select id="trait-input" onChange={event => props.setTrait(event.target.value)} >
                            {DRIVER_TRAITS.map((trait: IDriverTrait) => <option value={trait.name} key={trait.name}>{trait.name} {trait.emoji}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="comment-input">Comment (Optional)</label>
                <div className="control">
                    <textarea 
                        className="textarea" 
                        id="comment-input"
                        placeholder="Comment"
                        maxLength={MAX_COMMENT_LENGTH}
                        value={props.comment}
                        onChange={event => props.setComment(event.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button type="submit" className={"button is-link" + (props.loading ? " is-loading" : "")}>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default ReporterForm
