function isStrongPassword(given) {
    
    let flags = [false, false, false, false]
    // has alpha, has numeric, is 8 long, doesn't contain password
    
    for (let i = 0; i < given.length; i++) {
        if (given.charCodeAt(i) >= 48 && given.charCodeAt(i) <= 57) {
            flags[0] = true;
        }
        else if ((given.charCodeAt(i) >= 65 && given.charCodeAt(i) <= 90) || (given.charCodeAt(i) >= 97 && given.charCodeAt(i) <= 122)) {
            flags[1] = true
        }
    }

    if (given.length >= 8) {
        flags[2] = true;
    }

    if (given.length == given.replace(/password/g,"").length) {
        flags[3] = true;
    }

    // Passes all checks, password is good
    if (flags[0] && flags[1] && flags[2] && flags[3]) {
        return true;
    }
    // Failed one or more checks
    if (!flags[0]) {
        console.log("There are no numbers in this password!")
    }
    if (!flags[1]) {
        console.log("There are no letters in this password!")
    }
    if (!flags[2]) {
        console.log("This password is not long enough!")
    }
    if (!flags[3]) {
        console.log("You can't have \"password\" in your password!")
    }
    return false;
}

console.log("\t", isStrongPassword("123"), "\n ");
console.log("\t", isStrongPassword("abcdefghi"), "\n ");
console.log("\t", isStrongPassword("123456789"), "\n ");
console.log("\t", isStrongPassword("My8password"), "\n ");
console.log("\t", isStrongPassword("S0l1dp455w0rd"), "\n ");