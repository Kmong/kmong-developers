interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string] : string[];
  }
}

const registeredValidators: ValidatorConfig = {
};

export function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  }
}

export function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  }
}


export function validate(obj: any) {
  const objValidatorsConfig = registeredValidators[obj.constructor.name];

  if (!objValidatorsConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidatorsConfig) {
    for (const validator of objValidatorsConfig[prop]) {
      switch (validator){
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
