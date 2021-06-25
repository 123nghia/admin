import isEmpty from 'lodash/isEmpty'
export default function validateinput(data) {
    let errors = {};
    if(data.link === '') {
        errors.link = 'Please enter link'
    } 
    if(data.community === '' || isEmpty(data.community)) {
        errors.community = 'Please enter community'
    }
    if(data.subChannel === '' || isEmpty(data.subChannel)) {
        errors.subChannel = 'Please enter subChannel'
    }
    return {
        errors,
        isValid: Object.keys(errors).length ? false : true
    }
}