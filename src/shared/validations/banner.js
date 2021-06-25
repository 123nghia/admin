import isEmpty from 'lodash/isEmpty';

export default function validateinput(data) {
    let errors = {};
    if (data.image === '') {
        errors.image = 'Please input name'
    }
    // if (data.url === '') {
    //     errors.url = 'Please input URL'
    // }
    if (data.position === '') {
        errors.position = 'Please input position'
    } else if (isNaN(data.position)) {
        errors.position = 'Please enter a number'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

