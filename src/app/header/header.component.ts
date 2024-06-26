import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  body: HTMLElement | undefined;
  burgerNode: HTMLElement | undefined;
  closeNode: HTMLElement | undefined;
  menuNode: HTMLElement | undefined;
  isNavShowed = false;

  constructor(private renderer: Renderer2, private router: Router) {}

  toggleNav() {
    this.body = document.body;
    this.burgerNode = document.getElementsByClassName(
      'header__burger'
    )[0] as HTMLElement;
    this.closeNode = document.getElementsByClassName(
      'header__close'
    )[0] as HTMLElement;
    this.menuNode = document.getElementsByClassName('menu')[0] as HTMLElement;

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
    const targetElement = document.getElementById(fragment);

    this.closeNav();

    if (targetElement) {
      const desiredScrollPosition = targetElement.offsetTop - 86;
      window.scrollTo({ top: desiredScrollPosition, behavior: 'smooth' });
      this.router?.navigate([], { fragment: fragment });
    }
    return false;
  }
}
