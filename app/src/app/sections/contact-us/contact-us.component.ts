import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { LeadService } from '../../services/lead.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent implements OnInit {
  private formInputs: NodeList | undefined;
  leadInfo = new FormGroup({
    name: new FormControl<string>('', [
      Validators.minLength(4),
      Validators.required,
    ]),
    phoneNumber: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^\+?7?\d{10,12}$/),
      Validators.minLength(10),
      Validators.maxLength(12),
    ]),
  });

  constructor(
    private service: LeadService,
    private renderer: Renderer2,
    private elemRef: ElementRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formInputs =
      this.elemRef.nativeElement.querySelectorAll('.form__input');
  }

  send() {
    this.removeError();
    if (this.leadInfo.valid) {
      this.addDisabled();
      let data = {
        username: this.leadInfo.get('name')?.value,
        phone_number: this.leadInfo.get('phoneNumber')?.value,
      };
      this.service.postLead(data).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['thank-you']);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.removeDisabled();
        },
      });
    } else {
      this.addError();
    }
  }

  private addDisabled() {
    this.formInputs?.forEach((item) => {
      this.renderer.addClass(item, 'form__item_disabled');
    });
  }

  private removeDisabled() {
    this.formInputs?.forEach((item) => {
      this.renderer.removeClass(item, 'form__item_disabled');
    });
  }

  private getInvalidControls() {
    let invalids = [];
    const controls = this.leadInfo.controls;
    for (const name in controls) {
      let item = this.leadInfo.get(name);
      if (item) {
        if (item.invalid && !item.untouched) {
          invalids.push(name);
        }
      }
    }
    return invalids;
  }

  private getValidControls() {
    let valids = [];
    const controls = this.leadInfo.controls;
    for (const name in controls) {
      let item = this.leadInfo.get(name);
      if (item) {
        if (item.valid) {
          valids.push(name);
        }
      }
    }
    return valids;
  }

  private addError() {
    const invalidNames = this.getInvalidControls();
    console.log(invalidNames);
    for (const name of invalidNames) {
      console.log(name);
      let input = this.elemRef.nativeElement.querySelector(
        '#' + name
      ) as HTMLElement;
      this.renderer.addClass(input.parentNode, 'form__item_error');
    }
  }

  private removeError() {
    const validNames = this.getValidControls();
    for (const name of validNames) {
      let input = this.elemRef.nativeElement.querySelector(
        '#' + name
      ) as HTMLElement;
      this.renderer.removeClass(input.parentNode, 'form__item_error');
    }
  }
}
