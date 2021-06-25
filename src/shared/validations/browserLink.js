import isEmpty from 'lodash/isEmpty';

export default function validateinput(data) {
    let errors = {};
    if (data.title === '') {
        errors.title = 'Please input name'
    } else if(!isJson(data.title)) {
        errors.title = 'JSON data is invalid'
    }
    if (data.description !== '') {
        // errors.subtitle = 'Please input subtitle'
        if(!isJson(data.description)) {
            errors.description = 'JSON data is invalid'
        }
    }
    if (data.url === '') {
        errors.url = 'Please input URL'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
