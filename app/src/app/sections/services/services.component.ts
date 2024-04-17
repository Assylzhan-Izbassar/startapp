import {
  Component,
  ElementRef,
  Renderer2,
  OnInit,
  DoCheck,
  AfterViewChecked,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit, AfterViewChecked {
  private serviceCart: HTMLElement | undefined;
  private serviceDots: NodeList | undefined;
  private currServiceDot: HTMLElement | undefined;
  cartsCount: number | undefined;
  private currCartIdx: number = 0;
  private shiftLen: number = 0;
  private delta = -179.19;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.serviceCart = this.elementRef.nativeElement.querySelector(
      '.services__carts-inner'
    ) as HTMLElement;
    this.cartsCount = this.serviceCart.childNodes.length;
  }

  ngAfterViewChecked(): void {
    this.serviceDots =
      this.elementRef.nativeElement.querySelectorAll('.services__dot');
    this.setDotColor();
  }

  switchLeft() {
    if (this.currCartIdx > 0) {
      this.moveTo(true);
      this.unsetDotColor();
      this.currCartIdx--;
      this.setDotColor();
    }
  }

  switchRight() {
    if (this.currCartIdx < this.cartsCount! - 1) {
      this.moveTo(false);
      this.unsetDotColor();
      this.currCartIdx++;
      this.setDotColor();
    }
  }

  private moveTo(isLeft: boolean) {
    let directionCnt = isLeft ? -1 * this.delta : this.delta;
    this.shiftLen = this.shiftLen + directionCnt;

    let value = this.shiftLen + 'px';
    this.renderer.setStyle(this.serviceCart, 'margin-left', value);
  }

  private setDotColor() {
    if (this.serviceDots) {
      this.currServiceDot = this.serviceDots[this.currCartIdx] as HTMLElement;
      this.renderer.addClass(this.currServiceDot, 'services__dot_light');
    }
  }

  private unsetDotColor() {
    if (this.serviceDots) {
      this.currServiceDot = this.serviceDots[this.currCartIdx] as HTMLElement;
      this.renderer.removeClass(this.currServiceDot, 'services__dot_light');
    }
  }
}
