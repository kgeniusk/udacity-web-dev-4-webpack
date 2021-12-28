function checkForUrl(inputText) {
    console.log("::: Running checkForName :::", inputText);

    const expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?/gi;
    const regex = new RegExp(expression);

    if(inputText === '') {
        return false
    } else if (!inputText.match(regex)) {
        return false
    }

    return true
}

export { checkForUrl }
