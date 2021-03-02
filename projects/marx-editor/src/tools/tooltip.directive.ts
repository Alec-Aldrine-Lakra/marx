import { Directive, Input, ElementRef, HostListener, Renderer2, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[csTooltip]',
})
export class TooltipDirective implements OnInit {
  @Input('csTooltip') tooltipTitle!: string;
  @Input() placement!: string;
  @Input() type: any;
  @Input() tooltipMandatory!: boolean;
  @Input() animate!: boolean;
  tooltip!: HTMLElement;
  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit() {
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.hide();
    this.show();
  }
  @HostListener('mouseover') onMouseOver() {
    this.hide();
    this.show();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hide();
  }
  @HostListener('mouseout') onMouseOut() {
    this.hide();
  }
  @HostListener('click') onClick() {
    this.hide();
  }

  show() {
    this.create();
    const element = this.el.nativeElement;
    if (this.tooltipMandatory === true) {
      this.setPosition();
      this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
    } else {
      if (element.scrollWidth * element.scrollHeight > element.offsetWidth * element.offsetHeight) {
        this.setPosition();
        this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
      }
    }
  }

  hide() {
    if (document.body.contains(this.tooltip)) {
      if (this.renderer) {
        this.renderer.removeChild(document.body, document.getElementById('tooltip'));
      }
    }
  }

  create() {
    this.tooltip = this.renderer.createElement('span');
    this.tooltip.setAttribute('id', 'tooltip');
    this.tooltip.innerHTML = this.tooltipTitle;
    this.renderer.appendChild(document.body, this.tooltip);
    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);
    this.renderer.addClass(this.tooltip, `${this.type}`);
    if (this.animate) {
      this.renderer.addClass(this.tooltip, `animate-${this.placement}`);
    }
  }

  setPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const w = window.innerWidth;
    const h = window.innerHeight;
    let top;
    let left;

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'bottom') {
      if (hostPos.bottom + (tooltipPos.height) > h) {
        top = hostPos.top - tooltipPos.height;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        this.renderer.removeClass(this.tooltip, `ng-tooltip-bottom`);
        this.renderer.addClass(this.tooltip, `ng-tooltip-top`);
      }
      else {
        top = hostPos.bottom + this.offset;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
      }
    }

    if (this.placement === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.placement === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }
    if (this.placement === 'bottom-right') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left - (tooltipPos.width - 28);
    }
    if (this.placement === 'bottom-left') {
      if (hostPos.bottom + (tooltipPos.height) > h) {
        top = hostPos.top - tooltipPos.height;
        left = hostPos.left;
        this.renderer.removeClass(this.tooltip, `ng-tooltip-bottom-left`);
        this.renderer.addClass(this.tooltip, `ng-tooltip-top-left`);
      }
      else {
        top = hostPos.bottom + this.offset;
        left = hostPos.left;
      }
    }
    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
    if (hostPos.width > 300) {
      this.renderer.setStyle(
        this.tooltip, 'max-width', `${hostPos.width}px`
      );
    }
  }
}
