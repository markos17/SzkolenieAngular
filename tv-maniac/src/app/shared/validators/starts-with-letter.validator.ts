import { AbstractControl, ValidationErrors } from '@angular/forms';


export function startsWithLetter(upper = false) {
  return (control: AbstractControl): ValidationErrors | null => {
    const condition = upper ? /^[A-Z]/ : /^[a-zA-Z]/;
    return condition.test(control.value)
    ? null : {
      startsWithLetter: 'NO'
    };
  };
}
