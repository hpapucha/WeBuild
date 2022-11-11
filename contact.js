var recaptcha_response = '';
function submitUserForm() {
    var theUrl = https://formsubmit.co/xristo_pm@yahoo.com;
    if(recaptcha_response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }
    return theUrl;
}
 
function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('g-recaptcha-error').innerHTML = '';
}