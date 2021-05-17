/**
 * Upload a license plate report to the server.
 * @param {string} plate The license plate number
 * @param {string} region The license plate region (e.g. Ontario)
 * @param {string} trait The relevant trait about the driver
 * @param {string} note Written notes about the driver
 * @returns 
 */
export const sendLicensePlateReport = async (plate: string, region: string, trait: string, note: string) => {
    // Mocked for now. TODO: replace
    console.log("Send Licnese Plate Report")
    return new Promise((resolve: (numberReported: number) => void, reject: (error: string) => void) => {
        resolve(10)
    })
}