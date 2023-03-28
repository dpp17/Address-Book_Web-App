const checkName = (name) => {
    let nameRegex = RegExp('^([A-Z]{1}[a-z]{2,}[ ]{0,1})+$');
    if(!nameRegex.test(name)) throw 'Inavlid Name';
}

const checkAddress = (address) => {
    let addressRegex = RegExp('^([A-Za-z0-9/.,-]{3,}.)+$')
    if(!addressRegex.test(address)) throw 'Inavlid Address';
}
const checkEmail = (email) => {
    let emailRegex = RegExp('^([a-zA-Z_0-9]{1,}@gmail.com)');
    if(!emailRegex.test(email)) throw 'Inavlid email';
}

const checkZip = (zipcode) => {
    let zipRegex = RegExp('^[0-9]{6}')
    if(!zipRegex.test(zipcode)) throw 'Inavlid Zipcode';
}

const checkNumber = (phoneNumber) => {
    let phoneRegex = RegExp('^([8769]{1}[0-9]{9})$')
    if(!phoneRegex.test(phoneNumber)) throw 'Inavlid Phone Number';
}