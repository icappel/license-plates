/**
 * Return the stats of a given license plate.
 * @param {string} plate The license plate number
 * @param {string} region The region (e.g. Ontario)
 * @returns 
 */
export const getLicensePlate = async (plate: string, region: string) => {
    return new Promise((resolve, reject) => {
        if (plate === "AKVV426" && region === "Ontario") {
            resolve({
                reports: 10,
                characteristics: {
                    dangerous: 4,
                    careless: 2,
                    speedy: 3
                },
                notes: [
                    {
                        date: new Date('1995-12-17T03:24:00'),
                        text: "This jerk cut me off"
                    },
                    {
                        date: new Date("1920-12-31"),
                        text: "This jerk cut me off too"
                    }
                ]
            })
        } else {
            reject({
                reports: 0
            })
        }
    })
}

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