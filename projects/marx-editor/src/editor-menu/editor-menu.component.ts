import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { EditorConfig, ToolbarConfig } from '../editor-config-interface';
import template from './editor-menu.component.html';
import fileTemplate from './marx-files.component.html';
import linkTemplate from './marx-link.component.html';
import {ModalService} from '../modal.service';
@Component({
  selector: 'app-editor-menu',
  template: template + ``,
  styleUrls: ['./editor-menu.component.less', '../theme.less'],
})

export class EditorMenuComponent implements AfterViewInit {
  @Input()  editorConfig: EditorConfig;
  @Input()  toolbarConfig: ToolbarConfig;
  @Input()  moreOptionsButton: boolean;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
  @Output() sendSavedFiles: EventEmitter<any> = new EventEmitter();
  @Output() imageInEditor: EventEmitter<any> = new EventEmitter();
  @Output() linkInEditor: EventEmitter<any> = new EventEmitter();
  @Output() setWidth: EventEmitter<any> = new EventEmitter();
  @ViewChild('menuLeft') menuLeft: ElementRef;
  @ViewChild('menuRight') menuRight: ElementRef;
  enter = false;
  upload = false;
  uploadImage = false;
  alignment = false;
  addLink = false;
  listStyle = false;
  filesArray: any[];
  ShowFiles: boolean;
  fontStyle = false;
  fontSize = false;
  fillColor: boolean[];
  setTextColor = false;
  showAlert: boolean = false;
  alertMsg: string;
  savedFiles: any = [];
  savedImages:any=[]
  imgUrl: any = []; //img url array
  imgArr: Array<object> = [];
  linkUrl:string
  linkText:string
  linkTitle:string
  inValidUrl:boolean
  invalidUrlMessage:boolean
  inValidLinkTitle=''
  inValidLinkText=''
  savedLinks:object={ };
  fontFamily = false;
  moreOptions = false;
  color = false;

  popupZIndex: number;


  image: any;
  fontType: string[];

  constructor(private modal: ModalService) {
    this.filesArray = [];
    this.fillColor = Array(2).fill(false);
    this.image = null;
    this.fontType = ['verdana', 'arial', 'georgia', 'impact', 'courier new', 'tahoma']
  }

  ngAfterViewInit() {
      const left: number = this.menuLeft?.nativeElement?.offsetWidth;
      const right: number = this.menuRight?.nativeElement?.offsetWidth;
      this.setWidth.emit({left,right});
  }

  /**
   * 
   * @param event - Event triggered when the toolbar button is clicked
   */
  buttonClicked(event: any): void {
    event.stopPropagation();
    if (event?.target?.dataset?.id) {
        this.buttonClick.emit(event?.target?.dataset);
    }
  }

  /**
   * 
   * @param type - Represents the color which is 
   */
  colorChange(type: 'textColor' | 'fillColor'){
    this.buttonClick.emit({
      id: type,
      value: type === 'textColor' ? this.toolbarConfig?.fontColor : this.toolbarConfig?.backgroundColor
    });
    this.color = false;
  }

  /**
   * Opens the color tab
   */
  openColorTab(): void {
    this.color = !this.color;
    if(this.fillColor.every(item => item === false)) {
      this.fillColor[0] = true;
    }
  }
  
  // Image popup code begins

  /**
   * Closes the image popover
   */
  clickOutsideImage(): void {
    this.image = null;
    this.uploadImage = false;
  }

  /**
   * @param event - Dropped event triggered
  */
  dropImage(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if(event?.dataTransfer?.files && event?.dataTransfer?.files.length > 0) {
      if(this.validImage(event?.dataTransfer?.files[0])) {
        this.showAlert = false;
        this.readImageFile(event?.dataTransfer?.files[0]);
      } else {
        this.alertMsg = 'Please choose image file only';
        this.showAlert = true;
      }
    }
    this.enter = false;
  }

  /**
   * @param file - File that needs to be checked
   * @returns true or false based on if the file is an image file or not
  */
  validImage(file: File): boolean {
    return false;
    // const fileExtension = this.getFileExtension(file);
    // switch(fileExtension) {
    //   case 'jpg':
    //   case 'jpeg':
    //   case 'png':
    //   case 'gif': return true; 

    //   default: return false;
    // }
  }

  /**
   * Function is invoked after the final save button is clicked from the image popup
  */
  saveImage(): void{
    this.imageInEditor.emit(this.image);
    this.clickOutsideImage();
  }

  /**
   * @param file - Represents the image file that needs to be previewed
  */
  readImageFile(file: File): void {
    const fReader = new FileReader();
    fReader.readAsDataURL(file);
    fReader.onloadend =  (event) => {
      this.image = {
        url: event.target.result,
        file
      };
    };
  }

  /**
   * @param event - Event which is triggered when the user hits the browse button in image popup and selects a file
  */
  changeImage(event: any): void {
    if(this.validImage(event?.target?.files[0])) {
      this.showAlert = false;
      this.readImageFile(event?.target?.files[0]);
    } else {
        this.alertMsg = 'Please choose image file only';
        this.showAlert = true;
    }
  }

  // Image popup code ends

  /**
   * Function is invoked when the user clicks on the save button from the add files popover
  */
  saveFiles(event: any[]): void {
    this.sendSavedFiles.emit(event);
  }

  /**
   * Function is invoked when the user clicks on the save button from the add link popover
  */
  saveLink(event: any): void { 
    this.linkInEditor.emit({value: event, id: 'link'});
  }

  alignPopover(): void {
    this.alignment = !this.alignment;
    this.listStyle = false;
    this.fontStyle = false;
    this.moreOptions = false;
    this.fontFamily = false;
  }

  listStyles(): void {
    this.listStyle = !this.listStyle;
    this.alignment = false;
    this.fontStyle = false;
    this.moreOptions = false;
    this.fontFamily = false;
  }

  fontStylePopover(): void {
    this.fontStyle = !this.fontStyle;
    this.listStyle = false;
    this.alignment = false;
    this.moreOptions = false;
    this.fontFamily = false;
  }

  fontSizePopover() {
    this.fontStyle = false;
    this.listStyle = false;
    this.alignment = false;
    this.moreOptions = false;
    this.fontFamily = false;
    this.fontSize = !this.fontSize;
  }

  openfontFamily() {
    this.fontFamily = !this.fontFamily;
    this.fontStyle = false;
    this.listStyle = false;
    this.alignment = false;
    this.moreOptions = false;
  }

  showMoreOptions() {
    this.moreOptions = !this.moreOptions;
    this.fontFamily = false;
    this.fontStyle = false;
    this.listStyle = false;
    this.alignment = false;
  }

  clickOutsideMoreOptions() {
    this.moreOptions = false;
    this.filesArray = [];
    this.alignment = false;
    this.uploadImage = false;
    this.upload = false;
    this.addLink = false;
    this.listStyle = false;
    this.ShowFiles = false;
    this.fontStyle = false;
    this.fillColor = Array(2).fill(false);
    this.setTextColor = false;
  }

  closePopover(): void {
    this.filesArray = [];
    this.alignment = false;
    this.uploadImage = false;
    this.upload = false;
    this.addLink = false;
    this.listStyle = false;
    this.ShowFiles = false;
    this.fontStyle = false;
    this.fillColor = Array(2).fill(false);
    this.setTextColor = false;
  }

  closeAlignPopover(): void {
    this.moreOptions = false;
    this.filesArray = [];
    this.alignment = false;
    this.uploadImage = false;
    this.upload = false;
    this.addLink = false;
    this.listStyle = false;
    this.ShowFiles = false;
    this.fontStyle = false;
    this.fillColor = Array(2).fill(false);
    this.setTextColor = false;
  }

  closeListStylesPopover(): void {
    this.moreOptions = false;
    this.filesArray = [];
    this.alignment = false;
    this.uploadImage = false;
    this.upload = false;
    this.addLink = false;
    this.listStyle = false;
    this.ShowFiles = false;
    this.fontStyle = false;
    this.fillColor = Array(2).fill(false);
    this.setTextColor = false;
  }

  closeFontSizePopover(): void {
    this.moreOptions = false;
    this.filesArray = [];
    this.alignment = false;
    this.uploadImage = false;
    this.upload = false;
    this.addLink = false;
    this.listStyle = false;
    this.ShowFiles = false;
    this.fontStyle = false;
    this.fillColor = Array(2).fill(false);
    this.setTextColor = false;
    this.fontSize = false;
  }

  closeFontStylePopover(): void {
    this.moreOptions = false;
    this.filesArray = [];
    this.alignment = false;
    this.uploadImage = false;
    this.upload = false;
    this.addLink = false;
    this.listStyle = false;
    this.ShowFiles = false;
    this.fontStyle = false;
    this.fillColor = Array(2).fill(false);
    this.setTextColor = false;
  }
  
  hideAlert(): void {
    this.showAlert = false;
  }

  openModal(id: string) {
    this.modal.open(id + '-' + this.editorConfig?.id);
  }

  closeModal(id: string) {
      this.modal.close(id + '-' + this.editorConfig?.id);
      this.addLink = false;
      this.upload = false;
  }
}


@Component({
  selector: 'marx-link',
  template: linkTemplate + ``,
  styleUrls: ['./editor-menu.component.less', '../theme.less'],
})

export class EditorLinkComponent {
  @Input() editorConfig: EditorConfig;
  @Output() linkEmitter: EventEmitter<{linkUrl: string, linkTitle: string, linkText: string}> = new EventEmitter();
  @Output() closeEmitter: EventEmitter<any> = new EventEmitter();
  linkTitle: string;
  linkText: string;
  linkUrl: string;
  rex: RegExp;
  invalid: boolean;
  constructor() {
    this.reset();
    this.rex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  }

  /**
   * Reset the values
   */
  reset(): void {
    this.linkText = '';
    this.linkTitle = '';
    this.linkUrl = '';
    this.invalid = false;
  }

   /**
   * Save the link
   */
  save(): void {
    if(!this.linkUrl || !this.linkUrl?.match(this.rex)) { //check url is valid or not
        this.invalid = true;
    } else {
      if(!this.linkText || this.linkText.trim() === '') {
        this.linkText = this.linkUrl;
      }
      if(!this.linkTitle || this.linkTitle.trim() === '') {
        this.linkTitle = this.linkText;
      }
      this.linkEmitter.emit({linkTitle: this.linkTitle, linkText: this.linkText, linkUrl: this.linkUrl});
      this.close();
    }
  }

   /**
   * Close the popup
   */
  close(): void {
    this.reset();
    this.closeEmitter.emit(null);
  }
}


@Component({
  selector: 'marx-files',
  template: fileTemplate + ``,
  styleUrls: ['./editor-menu.component.less', '../theme.less'],
})

export class EditorFilesComponent {
  @Input() editorConfig: EditorConfig;
  @Output() filesEmitter: EventEmitter<any[]> = new EventEmitter();
  @Output() closeEmitter: EventEmitter<any> = new EventEmitter();
  enter: boolean;
  filesArray: any[];

  constructor() {
    this.reset();
  }

  /**
   * Reset the values
   */
  reset(): void {
    this.filesArray = [];
  }

  save(): void {
    this.filesEmitter.emit(this.filesArray);
    this.close();
  }

  close(): void {
    this.reset();
    this.closeEmitter.emit();
  }

  /**
   * 
   * @param event - Represents a dragenter event
   */
   dragenter(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.enter = true;
  }

  /**
   * 
   * @param event - Represents a dragover event
   */
  dragover(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.enter = true;
  }

  /**
   * 
   * @param event - Represents a dragend event
   */
  dragend(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.enter = false;
  }

  /**
   * 
   * @param event - Represents a dragleave event
   */
  dragleave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.enter = false;
  }

  // Drag Event code ends

  /**
 * 
 * @param event - Triggered when a file is dropped in the drag & drop area
 */
  dropFiles(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if(event?.dataTransfer?.files && event?.dataTransfer?.files.length > 0) {
      for (let i = 0; i <  event.dataTransfer.files.length; i++) {
        this.filesArray.push({file: event.dataTransfer.files[i], extension: this.getFileExtension(event.dataTransfer.files[i])});
      }
    }
    this.enter = false;
  }
  
  /**
   * 
   * @param fileIndex - Index from where file needs to be removed
   */
  removeFile(fileIndex: number): void {
    this.filesArray.splice(fileIndex, 1);
  }
  
  /**
   * 
   * @param event - Event triggered when user clicks on browse button of the file popup
   */
  filesFromInput(event: any): void {
    for (let i = 0; i <  event.target.files.length; i++) {
      this.filesArray.push({file: event.target.files[i], extension: this.getFileExtension(event.target.files[i])});
    }
    event.target.value = '';
  }

  /**
   * 
   * @param file - Represents a file whose extension needs to be returned
   * @returns a string value which represents an extension
   */
   getFileExtension(file: File): string {
    if(file) {
      const index = file?.name.lastIndexOf('.');
      if(index === -1) {
        return 'file';
      } else {
        return file?.name?.slice(index + 1);
      }
    }
    return '';
  }
}
