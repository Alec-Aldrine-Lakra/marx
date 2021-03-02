import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { FormsModule } from '@angular/forms';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [ColorPaletteComponent, ClickOutsideDirective, TooltipDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ColorPaletteComponent, ClickOutsideDirective, TooltipDirective
  ]
})
export class ToolsModule { }
