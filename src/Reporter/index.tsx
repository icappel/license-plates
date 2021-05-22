import { DRIVER_TRAITS, REGIONS } from '../domain'
import React, { useState } from 'react'
import { sendLicensePlateReport } from "actions"
import ReporterSuccess from 'ReporterSuccess'
import ReporterForm from 'ReporterForm'

function Reporter() {
    const [plateNumber, setPlateNumber] = useState("")
    const [region, setRegion] = useState(REGIONS[0])
    const [trait, setTrait] = useState<string>(DRIVER_TRAITS[0].name)
    const [comment, setComment] = useState("")
    const [timesReported, setTimesReported] = useState(-1)

    const isValid = (): boolean => {
        return (plateNumber.match(/[a-zA-Z0-9]+/) != null)
            && trait.length > 0
    }

    const clearForm = () => {
        setPlateNumber("")
        setRegion(REGIONS[0])
        setTrait(DRIVER_TRAITS[0].name)
        setComment("")
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (isValid()) {
            sendLicensePlateReport(plateNumber, region, trait, comment)
                .then((result: {code: number, numReported: number}) => {
                    setTimesReported(result.numReported)
                    clearForm()
                }, (error: {clientFail: boolean, code: number, message: string}) => {
                    alert(error.message)
                })
        } else {
            alert("Please make sure everything is filled out properly.")
        }

        event.preventDefault()
    }

    return timesReported >= 0 ? 
        <ReporterSuccess 
            timesReported={timesReported} 
            onReset={() => setTimesReported(-1)} 
        /> 
        : 
        <ReporterForm 
            plateNumber={plateNumber}
            setPlateNumber={setPlateNumber}
            region={region}
            setRegion={setRegion}
            trait={trait}
            setTrait={setTrait}
            comment={comment}
            setComment={setComment}
            handleSubmit={handleSubmit}    
        />
}

export default Reporter