import { AbstractControl, ValidationErrors } from '@angular/forms';


export function startsWithLetter (control: AbstractControl): ValidationErrors | null {
return /^[a-zA-Z]/.test(control.value)
? null : {
  startsWithLetter: 'NO'
};
}
