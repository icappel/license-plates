import { BACKEND_URL } from "config"

/**
 * Upload a license plate report to the server.
 * @param {string} plate The license plate number
 * @param {string} region The license plate region (e.g. Ontario)
 * @param {string} trait The relevant trait about the driver
 * @param {string} note Written notes about the driver
 * @returns 
 */
export const sendLicensePlateReport = async (plate: string, region: string, trait: string, note: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fetch(BACKEND_URL + "/reportDriver", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({
                region,
                trait,
                plate,
                note
            })
        })
        .then(response => {
            response.json().then(body => {
                if (response.ok) {
                    resolve({code: response.status, numReported: body.timesReported})
                } else {
                    reject({clientFail: false, code: response.status, message: body.error})
                }
            })
        })
        .catch(() => {
            reject({clientFail: true, code: 0, message: "Something went wrong."})
        })
    })
}

export interface IReport {
    date: Date,
    trait: string,
    note?: string,
    reportId: string
}

// Replace this with a generator?
export const searchPlate = async (plate: string, region: string, lastEvaluatedKey?: string) => {
    // item: {
    //     'region': region,
    //     'plate': plate,
    //     'reportId': item['reportId']['S'],
    //     'datetimeISO': item['dateTime']['S'],
    //     'trait': item['trait']['S'],
    //     'note': item['note']['S']
    // }
    if (lastEvaluatedKey) {
        console.error("Note: lastEvaluatedKey is not yet supported.")
    }

    interface IResponseReport {
        region: string,
        plate: string
        reportId: string,
        datetimeISO: string,
        trait: string,
        note: string
    }
    
    return new Promise((resolve, reject) => {
        fetch(BACKEND_URL + "/searchPlate?region=" + encodeURIComponent(region) + "&plate=" + encodeURIComponent(plate), {
            method: "GET",
            mode: "cors"
        })
        .then(response => {
            response.json().then(body => {
                if (response.ok) {
                    resolve({
                        code: response.status, 
                        reports: body.reports.map((report: IResponseReport) => {
                            return {
                                date: new Date(report.datetimeISO),
                                trait: report.trait,
                                note: report.note,
                                reportId: report.reportId
                            }
                        }),
                        numReportsBatch: body.numReportsBatch,
                        moreResultsAvailable: body.moreResultsAvailable,
                        lastEvaluatedKey: body.moreResultsAvailable ? body.lastEvaluatedKey : ""
                    })
                } else {
                    reject({clientFail: false, code: response.status, message: body.error})
                }
            })
        })
        .catch((reason) => {
            reject({clientFail: true, code: 0, message: "Something went wrong: " + reason})
        })
    })
}

