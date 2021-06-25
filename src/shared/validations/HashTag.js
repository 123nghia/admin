import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateinput(data) {
    let errors = {};
console.log(data)
    if(Validator.isEmpty(data.hashTag)) {
        errors.hashTag = 'Please enter hash tag'
    }

    if(Validator.isEmpty(data.startAt.toString())) {
        errors.startAt = 'Please enter start time'
    }
    if(Validator.isEmpty(data.endAt.toString())) {
        errors.endAt = 'Please enter end time'
    }
    if(Validator.isEmpty(data.endVoteAt.toString())) {
        errors.endVoteAt = 'Please enter voting end time'
    }
    if (data.endAt.toString() && data.startAt.toString()) {
        if (data.endAt < data.startAt)
            errors.endAt = 'End date must be later than start date'
    }
    if (data.endAt.toString() && data.endVoteAt.toString()) {
        if (data.endVoteAt < data.endAt)
            errors.endVoteAt = 'Voting end time must be later than end time'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}