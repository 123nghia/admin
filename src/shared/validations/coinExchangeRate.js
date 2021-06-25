import isEmpty from 'lodash/isEmpty'
export default function validateinput(data) {
    let errors = {};
    if(isEmpty(data.address) || data.address === '') {
        errors.address = 'Please enter address'
    } else if(!/^0x[a-fA-F0-9]{40}$/.test(data.address)){
        errors.address = 'Address format is wrong'
    }

    if(isEmpty(data.name) || data.name === '') {
        errors.name = 'Please enter name'
    }
    if(data.rate === '') {
        errors.rate = 'Please enter rate';
    } else {
        if(isNaN(data.rate)) {
            errors.rate = 'Rate must be a number'
        }
    }
    if(isEmpty(data.rateCoin) || data.rateCoin === '') {
        errors.rateCoin = 'Please enter rate coin'
    }
    if(data.decimals===''){
        errors.decimals = 'Please enter decimals';
    } else if(isNaN(data.decimals)){
        errors.decimals = 'Decimals must be a number';        
    }
    return {
        errors,
        isValid: Object.keys(errors).length ? false : true
    }
}