import isEmpty from 'lodash/isEmpty';

export default function validateinput(data) {
    let errors = {};
    if (data.name === '') {
        errors.name = 'Please input name'
    } else if(!isJson(data.name)) {
        errors.name = 'JSON data is invalid'
    }
    if (data.image === '') {
        errors.image = 'Please input image'
    } else if(!isJson(data.image)) {
        errors.image = 'JSON data is invalid'
    }
    if (data.subtitle !== '') {
        // errors.subtitle = 'Please input subtitle'
        if(!isJson(data.subtitle)) {
            errors.subtitle = 'JSON data is invalid'
        }
    }
    if (data.position === '') {
        errors.position = 'Please enter position'
    } else if (isNaN(data.position)) {
        errors.position = 'Position is invalid'
    }
    if (data.link === '') {
        errors.link = 'Please input link'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
function isJson(text) {
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return true;
    }
    return false;
}