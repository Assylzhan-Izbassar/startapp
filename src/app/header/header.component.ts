import { AfterContentChecked, Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterContentChecked {
  body: HTMLElement | undefined;
  burgerNode: HTMLElement | undefined;
  closeNode: HTMLElement | undefined;
  menuNode: HTMLElement | undefined;
  isNavShowed = false;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngAfterContentChecked(): void {
    this.body = document.body;
    this.burgerNode = document.getElementsByClassName(
      'header__burger'
    )[0] as HTMLElement;
    this.closeNode = document.getElementsByClassName(
      'header__close'
    )[0] as HTMLElement;
    this.menuNode = document.getElementsByClassName('menu')[0] as HTMLElement;
  }

  toggleNav() {
    if (!this.isNavShowed) {
      this.showNav();
    } else {
      this.hideNav();
    }
  }

  private showNav() {
    this.renderer.setStyle(this.burgerNode, 'display', 'none');
    this.renderer.setStyle(this.closeNode, 'display', 'flex');
    this.renderer.setStyle(this.menuNode, 'display', 'block');
    this.renderer.setStyle(this.body, 'overflow', 'hidden');
    this.isNavShowed = true;
  }

  private hideNav() {
    this.renderer.setStyle(this.burgerNode, 'display', 'block');
    this.renderer.setStyle(this.closeNode, 'display', 'none');
    this.renderer.setStyle(this.menuNode, 'display', 'none');
    this.renderer.setStyle(this.body, 'overflow', 'auto');
    this.isNavShowed = false;
  }

  closeNav() {
    this.hideNav();
  }

  scrollToFragment(fragment: string): boolean {
    this.router.navigate(['/'], { fragment: fragment });

    setTimeout(() => {
      this.closeNav();
      const targetElement = document.getElementById(fragment);
      if (targetElement) {
        const desiredScrollPosition = targetElement.offsetTop - 86;
        window.scrollTo({ top: desiredScrollPosition, behavior: 'smooth' });
      }
    }, 250);

    return false;
  }
}
