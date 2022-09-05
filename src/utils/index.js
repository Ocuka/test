export const requiredField = value => {
return value ? undefined : "REQUIRED"
}

export const maxLength = (maxLength) => value => value && value.length < maxLength ? undefined : `Maximum ${maxLength} symbols`

export const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined)

//value && value.lenght < maxLenght ? undefined : `Maximum ${maxLenght} symbols`


