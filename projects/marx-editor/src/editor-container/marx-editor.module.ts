import { NgModule } from '@angular/core';
import { MarxEditorComponent } from './marx-editor.component';
import { EditorMenuComponent, EditorFilesComponent, EditorLinkComponent } from '../editor-menu/editor-menu.component';
import { ToolsModule } from '../tools/tools.module';
import { MentionModule } from 'angular-mentions';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MarxModalComponent } from '../modal/modal.component';
@NgModule({
  declarations: [MarxEditorComponent, EditorMenuComponent, EditorFilesComponent, EditorLinkComponent, MarxModalComponent],
  imports: [
    ToolsModule,
    MentionModule,
    FormsModule,
    CommonModule
  ],
  exports: [MarxEditorComponent]
})
export class MarxEditorModule { }
