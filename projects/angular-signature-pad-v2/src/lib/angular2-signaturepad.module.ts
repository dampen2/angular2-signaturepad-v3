import { NgModule } from '@angular/core';
import { SignaturePad } from './angular2-signaturepad.component';

@NgModule({
  imports: [SignaturePad],
  exports: [SignaturePad],
})
export class SignaturePadModule {}
