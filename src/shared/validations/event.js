import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateinput(data) {
    let errors = {};

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Please enter title'
    }

    if(Validator.isEmpty(data.date_event.toString())) {
        errors.date_event = 'Please enter date'
    }
    
    if(Validator.isEmpty(data.coin_id)) {
        errors.coin_id = 'Please enter coin ID'
    }

    if(Validator.isEmpty(data.coin_name)) {
        errors.coin_name = 'Please enter coin name'
    }

    if(Validator.isEmpty(data.coin_symbol)) {
        errors.coin_symbol = 'Please enter coin symbol'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}