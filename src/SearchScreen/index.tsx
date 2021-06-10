import { searchPlate } from "actions"
import PlateSearch from "PlateSearch"
import { useState } from "react"
import ReportList from "ReportList"

function SearchScreen() {
    const [region, setRegion] = useState("Ontario")
    const [plate, setPlate] = useState("")
    const [reports, setReports] = useState([])
    const [searchedYet, setSearchedYet] = useState(false)

    const onSearch = async () => {
        searchPlate(plate, region)
            .then((response: any) => {
                if (response.code === 200) {
                    setReports(response.reports)
                } else {
                    setReports([])
                }
                setSearchedYet(true)
            })
            .catch((reason => {
                console.error(reason.message)
                setReports([])
                setSearchedYet(true)
            }))
    }

    return (
        <div className="columns is-centered py-5 px-3">
            <div className="column is-half is-max-desktop">
                <h1 className="title is-3">Search for a license plate</h1>
                <div className="my-2">
                    <PlateSearch 
                        onSearch={onSearch} 
                        plate={plate} 
                        setPlate={setPlate} 
                        region={region}
                        setRegion={setRegion}
                    />
                </div>
                <div className="my-5">
                    <h2 className="title is-4">{searchedYet && "Results:"}</h2>
                </div>
                <ReportList 
                    reports={reports} 
                    emptyMessage={searchedYet ? "Sorry, no results found." : ""}
                />
            </div>
        </div>
    )
}

export default SearchScreen