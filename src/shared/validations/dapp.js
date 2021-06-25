import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateinput(data) {
    let errors = {};
    console.log(data);
    if(Validator.isEmpty(data.name)) {
        errors.name = 'Please enter name'
    }
    if (!Validator.isEmpty(data.homepage)) {
        if(!Validator.isURL(data.homepage)) {
            errors.homepage = 'Homepage is invalid'
        }
    }
    if (!Validator.isEmpty(data.iconUrl)) {
        if(!Validator.isURL(data.iconUrl)) {
            errors.iconUrl = 'URL is invalid'
        }
    }
    if (Validator.isEmpty(data.rank)) {
        errors.rank = 'Please enter rank'
    }
    if (!Validator.isEmpty(data.rank)) {
        if(isNaN(data.rank)) {
            errors.rank = 'Rank is invalid'
        }
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}