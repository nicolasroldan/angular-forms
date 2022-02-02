import { FormGroup, ValidatorFn, Validators } from '@angular/forms';

export function createPromoRangeValidator(): ValidatorFn {
  return (form: FormGroup): Validators | null => {
    const start: Date = form.value.promoStartAt;
    const end: Date = form.value.promoEndAt;
    if (start && end) {
      const isRangeValid = end?.getTime() - start?.getTime() > 0;

      return isRangeValid ? null : { promoPeriod: true };
    }
    return null
  };
}
