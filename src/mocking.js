export function mocking(str) {
    let isUpper = true;
    const mockedStr = str.split("");

    return mockedStr.map((char) => {
        // change only the alphabet
        if (/[a-zA-Z]/.test(char)) {
            const mocked = isUpper ? char.toUpperCase() : char.toLowerCase();
            isUpper = !isUpper;
            return mocked;
        }
        
        return char;
    }).join("");
}