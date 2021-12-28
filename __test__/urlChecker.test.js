import { checkForUrl } from "../src/client/js/urlChecker"

describe("Testing checkForUrl function", () => {
    test("Testing if checkForUrl is defined", () => {
        expect(checkForUrl).toBeDefined()
    })

    test("Testing if checkForUrl returns false in case of blank input", () => {
        expect(checkForUrl('')).toBeFalsy()
    })

    test("Testing if checkForUrl returns false in case of wrong url", () => {
        expect(checkForUrl('1234')).toBeFalsy()
    })
})