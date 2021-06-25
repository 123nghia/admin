import isEmpty from 'lodash/isEmpty';

export default function validateinput(data) {
    let errors = {};
    if (data.name === '') {
        errors.name = 'Please input name'
    }
    if (data.symbol === '') {
        errors.symbol = 'Please input symbol'
    }
    if (data.decimals === '') {
        errors.decimals = 'Please enter position'
    } else if (isNaN(data.decimals)) {
        errors.decimals = 'Decimals is invalid'
    }
    if (data.address !== '') {
        if(!/^0x[a-fA-F0-9]{40}$/.test(data.address)){
            errors.address = 'Token address is invalid'
        }
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}