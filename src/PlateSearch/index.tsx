import { REGIONS } from "../domain"
import { MAX_LICENSE_PLATE_LENGTH } from "config"

export interface IPlateSearchProps {
    onSearch: () => any,
    region: string,
    setRegion: (newRegion: string) => any,
    plate: string,
    setPlate: (newPlate: string) => any,
    loading: boolean
}

const PlateSearch = (props: IPlateSearchProps) => {

    return (
        <form onSubmit={(e) => {e.preventDefault(); props.onSearch()}}>
            <div className="field has-addons">
                <label className="label is-sr-only" htmlFor="region-input">Region</label>
                <div className="control">
                    <div className="select">
                        <select id="region-input" value={props.region} onChange={event => props.setRegion(event.target.value)} >
                            {REGIONS.map((region: string) => <option key={region}>{region}</option>)}
                        </select>
                    </div>
                </div>
                <label className="label is-sr-only" htmlFor="plate-input">Plate Number</label>
                <div className="control">
                    <input 
                        className="input" 
                        id="plate-input"
                        placeholder="Plate number" 
                        required
                        maxLength={MAX_LICENSE_PLATE_LENGTH} 
                        onChange={(event => props.setPlate(event.target.value))} 
                        value={props.plate} 
                    />
                </div>
                <div className="control">
                    <button type="submit" className={"button is-link" + (props.loading ? " is-loading" : "")}>Search</button>
                </div>
            </div>
        </form>
    )

}

export default PlateSearch