import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateinput(data) {
    let errors = {};

    if(Validator.isEmpty(data.communityName)) {
        errors.communityName = 'Please enter name'
    }

    if(Validator.isEmpty(data.communityDetail)) {
        errors.communityDetail = 'Please enter detail'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}