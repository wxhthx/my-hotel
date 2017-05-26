function validateMaxLength (item, length) {
    if (item.length > length) {
        return 'max-length'
    }
}

export function validateRequired (item, length) {
    if (!item.length) {
        return 'required'
    }
}

export default {
    validateRequired
    // validateMaxLength
}
