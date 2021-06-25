import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateinput(data) {
    let errors = {};
    if(!isJson(data.dappBannerEn)) {
        errors.dappBannerEn = 'JSON data is invalid'
    }
    if(!isJson(data.dappBannerCn)) {
        errors.dappBannerCn = 'JSON data is invalid'
    }
    if(!isJson(data.dappBannerJp)) {
        errors.dappBannerJp = 'JSON data is invalid'
    }
    if(!isJson(data.dappBannerVi)) {
        errors.dappBannerVi = 'JSON data is invalid'
    }
    if(!isJson(data.dappBannerEs)) {
        errors.dappBannerEs = 'JSON data is invalid'
    }
    if(!isJson(data.dappBannerPt)) {
        errors.dappBannerPt = 'JSON data is invalid'
    }
    if(!isJson(data.dappBannerRu)) {
        errors.dappBannerRu = 'JSON data is invalid'
    }
    if(!isJson(data.dappBannerTh)) {
        errors.dappBannerTh = 'JSON data is invalid'
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