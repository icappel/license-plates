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

export const searchPlate = async (plate: string, region: string) => {

}
