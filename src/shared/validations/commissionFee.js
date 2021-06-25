
export default function validateinput(data) {
    let errors = {};
    if(data.commission_fee === '') {
        errors.commission_fee = 'Please enter commission fee'
    } else {
        if(isNaN(data.commission_fee)) {
            errors.commission_fee = 'Commission fee must be a number'
        }
    }

    if(data.commission_fee_hb === '') {
        errors.commission_fee_hb = 'Please enter commission fee HB'
    } else {
        if(isNaN(data.commission_fee_hb)) {
            errors.commission_fee_hb = 'Commission fee HB must be a number'
        }
    }
    return {
        errors,
        isValid: Object.keys(errors).length ? false : true
    }
}