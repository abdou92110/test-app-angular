import { Directive, ElementRef, HostListener, Input } from '@angular/core';
  
@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
    constructor(private el: ElementRef) {
        this.setBorder('grey');
        this.setHeight(180);
    }

    @Input('pkmnBorderCard') borderColor:string;
    

    @HostListener('mouseenter')onMonseEnter() {
        this.setBorder(this.borderColor || 'teal');
    }
  
    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder('grey');
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }
  
    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}