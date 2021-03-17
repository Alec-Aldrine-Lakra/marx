const template = `<div class="editor-menu" (click)="buttonClicked($event)">
    <div class="left" #menuLeft>
        <!-- Bold -->
        <div class="col" data-id="bold">
            <button data-id="bold" [class.active]="toolbarConfig?.bold" [csTooltip]="'Bold'" placement="bottom"
                delay="0" type="button" [tooltipMandatory]="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                    viewBox="0 0 1024 1024">
                    <path
                        d="M788.842 511.997c65.313-52.843 107.156-133.625 107.156-224.001 0-158.811-129.187-287.998-288-287.998h-479.998v128.001h63.999v768.001h-63.999v128.001h480c158.813 0 288-129.187 288-288-0.002-90.378-41.845-171.16-107.158-224.003zM607.998 895.997h-288v-319.999h288c88.22 0 159.999 71.782 159.999 159.999s-71.779 159.999-159.999 159.999zM607.998 447.998h-288v-319.999h288c88.22 0 159.999 71.782 159.999 159.999s-71.779 159.999-159.999 159.999z">
                    </path>
                </svg>
            </button>
        </div>
        <!-- Italic -->
        <div class="col" data-id="italic">
            <button data-id="italic" [class.active]="toolbarConfig?.italic" [csTooltip]="'Italic'" placement="bottom"
                delay="0" type="button" [tooltipMandatory]="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                    viewBox="0 0 1024 1024">
                    <path
                        d="M895.999 128.001v-128.001h-384v128.001h94.949l-329.141 767.998h-149.807v128.001h384v-128.001h-94.949l329.138-767.998z">
                    </path>
                </svg>
            </button>
        </div>
        <!-- Underline -->
        <div class="col" data-id="underline">
            <button data-id="underline" [class.active]="toolbarConfig?.underline" [csTooltip]="'Underline'"
                placement="bottom" delay="0" type="button" [tooltipMandatory]="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                    viewBox="0 0 1024 1024">
                    <path
                        d="M124.6 934.4h774.8v89.6h-774.8v-89.6zM685.2 0v89.6h62.2v422.4c0 129.8-105.6 235.6-235.6 235.6s-235.4-105.8-235.4-235.6v-422.4h62.2v-89.6h-214v89.6h62.2v422.4c0 179.2 145.8 325.2 325.2 325.2s325.2-146 325.2-325.2v-422.4h62.2v-89.6h-214.2z">
                    </path>
                </svg>
            </button>
        </div>
        <!-- Line through -->
        <div class="col" data-id="strikeThrough">
            <button data-id="strikeThrough" [class.active]="toolbarConfig?.strikeThrough" [csTooltip]="'Strike Through'"
                placement="bottom" delay="0" type="button" [tooltipMandatory]="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                viewBox="0 0 1024 1024">
                    <path
                        d="M124.6 467.2h774.8v89.6h-774.8v-89.6zM682 616c41.6 34.2 65.4 84.6 65.4 138.6 0 99.2-80.6 179.8-179.8 179.8h-380.8v89.6h380.8c148.6 0 269.4-120.8 269.4-269.4 0-51.4-14.8-101.2-42.8-145h-120l7.8 6.4zM342 408c-41.6-34.2-65.4-84.6-65.4-138.6 0-99.2 80.6-179.8 179.8-179.8h380.8v-89.6h-380.8c-148.6 0-269.6 120.8-269.6 269.4 0 50.6 14.4 99.6 41.4 143h119l-5.2-4.4z">
                    </path>
                </svg>
            </button>
        </div>
        <!-- list -->
        <div class="col" clickOutside (clickOutside)="closeListStylesPopover(); listStyle = false;">
            <div class="popover-overlay" *ngIf="listStyle" (click)="listStyle = false"></div>
            <button class="lg" [class.active]="listStyle|| toolbarConfig?.orderedList || toolbarConfig?.unorderedList"
                (click)="listStyles()" [csTooltip]="'List Option'" placement="bottom" delay="0" type="button"
                [tooltipMandatory]="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                    viewBox="0 0 1024 1024">
                    <path
                        d="M270 480.6h754v101.2h-754v-101.2zM270 812h754v101.2h-754v-101.2zM270 126.8h754v101.2h-754v-101.2zM36 126.8h101.2v101.2h-101.2v-101.2zM36 480.6h101.2v101.2h-101.2v-101.2zM36 812h101.2v101.2h-101.2v-101.2z">
                    </path>
                </svg>
            </button>

            <div class="popover small" *ngIf="listStyle" (click)="closeListStylesPopover()">
                <ul class="option-list">
                    <li data-id="orderedList">
                        <!-- List with Number -->
                        <button data-id="orderedList" [class.active]="toolbarConfig?.orderedList">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                                viewBox="0 0 1024 1024">
                                <path
                                    d="M270 480.6h754v101.2h-754v-101.2zM270 812h754v101.2h-754v-101.2zM270 126.8h754v101.2h-754v-101.2zM65.4 280h65v-216h-90.2v61.2h25.2zM81.6 488.8c0.2-18.4 9.4-18.4 13-18.4 11.2 0 11.2 7.6 11.2 14.2 0 24.4-34.8 53.4-68.4 81.6-4.6 3.8-9.2 7.8-13.8 11.6l-5 4.2v47.2h155.4v-58h-53c25-23.4 48.8-52.8 48.8-89 0-43-29.4-70.8-74.8-70.8-45.2 0-75.2 30-76.6 76.6l-0.4 14.4h63.4l0.2-13.6zM154.6 861.6c9.6-10 16.6-24.2 16.6-42.2 0-31.8-22.6-63.8-73.4-63.8-45.2 0-74.4 25.8-76.6 67.2l-0.8 14.8h44v53.8h-46.4l0.6 14.6c1.8 44 32.8 71.4 80.8 71.4 45 0 75.2-27 75.2-67.4 0-20.4-7-37.2-20-48.4zM85.8 834.4h-2.6l1-9.2c1.2-9.6 7-10.8 12.4-10.8 11.6 0 11.6 5.2 11.6 9.4 0.2 3.8 0.2 10.6-22.4 10.6zM85.8 892c26.2 0 26.2 7.2 26.2 14.8 0 8.4-4.2 12.4-13.4 12.4-11 0-16.6-4.8-17-14.4l-0.6-12.8h4.8z">
                                </path>
                            </svg>
                            <span data-id="orderedList">List with number</span>
                        </button>
                    </li>
                    <li data-id="unorderedList">
                        <!-- List with bullets -->
                        <button data-id="unorderedList" [class.active]="toolbarConfig?.unorderedList">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                                viewBox="0 0 1024 1024">
                                <path
                                    d="M270 480.6h754v101.2h-754v-101.2zM270 812h754v101.2h-754v-101.2zM270 126.8h754v101.2h-754v-101.2zM36 126.8h101.2v101.2h-101.2v-101.2zM36 480.6h101.2v101.2h-101.2v-101.2zM36 812h101.2v101.2h-101.2v-101.2z">
                                </path>
                            </svg>
                            <span data-id="unorderedList">List with bullets</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Text Align -->
        <div class="col" clickOutside (clickOutside)="closeAlignPopover()" *ngIf="editorConfig?.mode === 'prime'">
            <button (click)="alignPopover()" [class.active]="alignment" class="lg" [csTooltip]="'Text Alignment'"
                placement="bottom" delay="0" type="button" [tooltipMandatory]="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                    viewBox="0 0 1024 1024">
                    <path d="M50 457.2h668v92h-668v-92zM50 788.4h924v92h-924v-92zM50 126h924v92h-924v-92z"></path>
                </svg>
            </button>
            <div class="popover-overlay" *ngIf="alignment" (click)="alignment = false"></div>
            <div class="popover small" *ngIf="alignment">
                <ul class="option-list" (click)="alignment = false;">
                    <li data-id="left-align">
                        <!-- Left Align -->
                        <button data-id="left-align">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                                viewBox="0 0 1024 1024">
                                <path d="M50 457.2h668v92h-668v-92zM50 788.4h924v92h-924v-92zM50 126h924v92h-924v-92z">
                                </path>
                            </svg>
                            <span data-id="left-align">Align Left</span>
                        </button>
                    </li>
                    <li data-id="center-align">
                        <!-- Center Align -->
                        <button data-id="center-align">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                                viewBox="0 0 1024 1024">
                                <path
                                    d="M184.8 457.2h668v92h-668v-92zM52.2 788.4h924v92h-924v-92zM52.2 126h924v92h-924v-92z">
                                </path>
                            </svg>
                            <span data-id="center-align">Align Center</span>
                        </button>
                    </li>
                    <li data-id="right-align">
                        <!-- Right Align -->
                            <button data-id="right-align">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                                viewBox="0 0 1024 1024">
                                <path
                                    d="M306 457.2h668v92h-668v-92zM52.2 788.4h924v92h-924v-92zM52.2 126h924v92h-924v-92z">
                                </path>
                            </svg>
                            <span data-id="right-align">Align Right</span>
                        </button>
                    </li>
                    <li data-id="justify-full">
                        <button data-id="justify-full">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                                viewBox="0 0 1024 1024">
                                <path
                                    d="M50.2 155.2h926v92h-926v-92zM50.2 486.4h926v92h-926v-92zM50 784h926v92h-926v-92z">
                                </path>
                            </svg>
                            <span data-id="justify-full">Align Justify</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Font-Style -->
        <div class="col" clickOutside (clickOutside)="closeFontStylePopover()"
            *ngIf="editorConfig?.mode === 'prime' && editorConfig?.configFontStyle">
            <button (click)="fontStylePopover()" [csTooltip]="'Font Style'" placement="bottom" delay="0" type="button"
                [tooltipMandatory]="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                    <path fill="#000" d="M99.306 127.3v321.786h372.176v-321.786h100.485v769.4h-100.485v-360.684h-372.176v360.684h-99.306v-769.4h99.306z"></path>
                    <path fill="#000" d="M927.051 248.412h-2.357l-129.068 69.544-19.449-76.616 162.072-86.635h85.751v741.995h-96.948v-648.288z"></path>
                </svg>
            </button>
            <div class="popover-overlay" *ngIf="fontStyle" (click)="fontStyle = false"></div>
            <div class="popover small" *ngIf="fontStyle">
                <ul class="option-list">
                    <li data-id="h1">
                        <button data-id="h1">
                            <h1 data-id="h1">H1</h1>
                            <span data-id="h1">Heading 1</span>
                        </button>
                    </li>
                    <li data-id="h2">
                        <button data-id="h2">
                            <h2 data-id="h2">H2</h2>
                            <span data-id="h2">Heading 2</span>
                        </button>
                    </li>
                    <li data-id="h3">
                        <button data-id="h3">
                            <h3 data-id="h3">H3</h3>
                            <span data-id="h3">Heading 3</span>
                        </button>
                    </li>
                    <li data-id="para">
                        <button data-id="para">
                            <p data-id="para">P</p>
                            <span data-id="para">Paragraph</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Font-Size -->
        <div class="col" clickOutside (clickOutside)="closeFontSizePopover()" *ngIf="editorConfig?.mode === 'prime'">
            <button class="lg" (click)="fontSizePopover()" [csTooltip]="'Font Size'" placement="bottom" delay="0"
                type="button" [tooltipMandatory]="true">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M449.1,240.6v14c-15.3-12.3-34.6-19.6-55.7-19.6c-49.1,0-89,39.9-89,89c0,49.1,39.9,89,89,89c21,0,40.4-7.4,55.7-19.6v14
                                h33.4v-167H449.1z M393.5,379.7c-30.7,0-55.7-25-55.7-55.7c0-30.7,25-55.7,55.7-55.7s55.7,25,55.7,55.7
                                C449.1,354.7,424.1,379.7,393.5,379.7z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M165.3,98.9L29.5,407.5H66l46.5-105.7h105.5l46.5,105.7h36.5L165.3,98.9z M127.2,268.4l38.1-86.5l38.1,86.5H127.2z"/>
                        </g>
                    </g>
                </svg>
            </button>
            <div class="popover-overlay" *ngIf="fontSize" (click)="fontSize = false"></div>
            <div class="popover small" *ngIf="fontSize">
                <ul class="option-list">
                    <li *ngFor="let size of [11,12,14,18,24,32,36,48]" attr.data-id="fontsize-{{size}}"
                        (click)="fontSize = false;">
                        <button attr.data-id="fontsize-{{size}}">{{size}}</button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Font Family-->
        <div class="col" clickOutside (clickOutside)="fontFamily = false;" *ngIf="editorConfig?.mode === 'prime'">
            <button (click)="openfontFamily()" [class.active]="fontFamily" [csTooltip]="'Font Name'"
                [class.active]="fontStyles?.includes(toolbarConfig?.fontStyle)" placement="bottom" delay="0"
                type="button" [tooltipMandatory]="true">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M192,51.2h128v64h32v-96H0v96h32v-64h128v384H96v32h160v-32h-64L192,51.2z"/>
                    <path d="M224,147.2v64h32v-32h96v256h-64v32h160v-32h-64v-256h96v32h32v-64L224,147.2z"/>
                </svg>
            </button>
            <div class="popover-overlay" *ngIf="fontFamily" (click)="fontFamily = false"></div>
            <div class="popover small" *ngIf="fontFamily">
                <ul class="option-list" (click)="fontFamily = false;">
                    <li *ngFor="let font of fontType" attr.data-id="font-{{font}}">
                        <button attr.data-id="font-{{font}}" [class.active]="toolbarConfig?.fontStyle === font">
                            {{font | titlecase}}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Color -->
        <div class="col" clickOutside (clickOutside)="color = false;"
            *ngIf="editorConfig?.colorPalette && editorConfig?.mode === 'prime'">
            <button (click)="color = !color; fillColor[0] = true" [class.active]="color" [csTooltip]="'Color'" placement="bottom" delay="0" type="button" [tooltipMandatory]="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                    <path d="M0 932h1024v92h-1024v-92zM383.4 916.4c0 0 0 0 0 0 8.8 8.8 20.2 13.6 32.6 13.6 12.2 0 23.8-4.8 32.4-13.6l384-384c8.6-8.6 13.4-20.2 13.4-32.4s-4.8-23.8-13.4-32.4l-466.8-467.6-65 65.4 114.4 114.4-351.4 351.6c-18 18-18 47 0 65l319.8 320zM689 545.8l-273 273-255-255 18-18h510zM689 453.8h-418l209-209 209 209zM842.2 593c-27 39-72.2 111-72.2 154.2 0 60.6 49.4 110 110 110s110-49.4 110-110c0-40.4-39.2-106-72-154.2-8.2-12-22.4-19.2-37.8-19.2-15.6 0.2-29.6 7.4-38 19.2zM880 765.2c-9.8 0-17.8-8-18-17.8 0.4-4 5.6-17.8 18-40.6 12.4 23 17.6 36.6 18 40.6-0.2 9.8-8.2 17.8-18 17.8z"></path>
                </svg>
            </button>
            <div class="popover-overlay" *ngIf="color" (click)="color = false"></div>
            <div class="popover color-palette" *ngIf="color">
                <div class="tab">
                    <div class="tab-head">
                        <button (click)="fillColor[0] = true; fillColor[1] = false;"
                            [class.active]="fillColor[0]" [csTooltip]="'Background Color'" placement="bottom" delay="0"
                            type="button" [tooltipMandatory]="true">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                                <path d="M0 932h1024v92h-1024v-92zM383.4 916.4c0 0 0 0 0 0 8.8 8.8 20.2 13.6 32.6 13.6 12.2 0 23.8-4.8 32.4-13.6l384-384c8.6-8.6 13.4-20.2 13.4-32.4s-4.8-23.8-13.4-32.4l-466.8-467.6-65 65.4 114.4 114.4-351.4 351.6c-18 18-18 47 0 65l319.8 320zM689 545.8l-273 273-255-255 18-18h510zM689 453.8h-418l209-209 209 209zM842.2 593c-27 39-72.2 111-72.2 154.2 0 60.6 49.4 110 110 110s110-49.4 110-110c0-40.4-39.2-106-72-154.2-8.2-12-22.4-19.2-37.8-19.2-15.6 0.2-29.6 7.4-38 19.2zM880 765.2c-9.8 0-17.8-8-18-17.8 0.4-4 5.6-17.8 18-40.6 12.4 23 17.6 36.6 18 40.6-0.2 9.8-8.2 17.8-18 17.8z"></path>
                            </svg>
                        </button>
                        <button (click)="fillColor[1] = true; fillColor[0] = false;"
                            [class.active]="fillColor[1]" [csTooltip]="'Text Color'" placement="bottom" delay="0"
                            type="button" [tooltipMandatory]="true">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                                <path d="M302 613.2h420l91.4 219.4h109.6l-346.8-832.6h-128.4l-346.8 832.6h109.6l91.4-219.4zM344 512l168-403.2 168 403.2h-336zM0 922.8h1024v101.2h-1024v-101.2z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="tab-body">
                        <app-color-palette [(color)]="toolbarConfig.backgroundColor"
                            (colorChange)="colorChange('fillColor'); color = false" *ngIf="fillColor[0]">
                        </app-color-palette>

                        <app-color-palette [(color)]="toolbarConfig.fontColor"
                            (colorChange)="colorChange('textColor'); color = false" *ngIf="fillColor[1]">
                        </app-color-palette>
                    </div>
                </div>
                
            </div>
        </div>
        <!-- Fill Color -->
        <!-- <div class="col" clickOutside (clickOutside)="fillColor[0] = false;" *ngIf="editorConfig?.colorPalette && editorConfig?.mode === 'prime'">
            <button (click)="fillColor[0] = !fillColor[0]; fillColor[1] = false;" [class.active]="fillColor[0]"
                [csTooltip]="'Background Color'" placement="bottom" delay="0" type="button" [tooltipMandatory]="true">
                <svg width="298" height="298" viewBox="0 0 298 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M235.917 142.791C235.917 142.791 211.083 169.674 211.083 186.25C211.083 199.97 222.196 211.084 235.917 211.084C249.637 211.084 260.75 199.97 260.75 186.25C260.75 169.674 235.917 142.791 235.917 142.791Z" />
                    <path
                        d="M94.615 0L77.0453 17.5698L106.597 47.1212L42.7136 111.005C35.4498 118.269 35.4498 130.065 42.7136 137.329L111.005 205.62C114.606 209.283 119.386 211.084 124.167 211.084C128.947 211.084 133.728 209.283 137.328 205.62L205.62 137.329C212.884 130.065 212.884 118.269 205.62 111.005L94.615 0ZM64.6288 124.166L124.167 64.6904L183.704 124.166H64.6288Z" />
                    <g>
                        <path d="M298 248.333H0V298H298V248.333Z" [attr.fill]="toolbarConfig.backgroundColor" />
                    </g>
                </svg>
            </button>
            <div class="popover-overlay" *ngIf="fillColor[0]" (click)="fillColor[0] = false"></div>
            <div class="popover color-palette" *ngIf="fillColor[0]">
                <app-color-palette [(color)]="toolbarConfig.backgroundColor"
                    (colorChange)="fillColor[0] = false; colorChange('fillColor');">
                </app-color-palette>
            </div>
        </div> -->
        <!-- Text Color -->
        <!-- <div class="col" clickOutside *ngIf="editorConfig?.colorPalette && editorConfig?.mode === 'prime'">
            <button (click)="fillColor[1] = !fillColor[1]; fillColor[0] = false;" [class.active]="fillColor[1]"
                [csTooltip]="'Text Color'" placement="bottom" delay="0" type="button" [tooltipMandatory]="true">
                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <polygon
                                    points="85.333,282.64 85.333,362.64 165.333,362.64 378.667,149.307 298.667,69.307 			" />
                                <path d="M441.707,56.08L391.893,6.267c-8.32-8.32-21.867-8.32-30.187,0L320,47.973l80,80l41.707-41.707
                                C450.027,77.947,450.027,64.4,441.707,56.08z" />
                            </g>
                        </g>
                    </g>
                    <g>
                        <g>
                            <rect y="426.64" width="512" height="85.333" [attr.fill]="toolbarConfig.fontColor" />
                        </g>
                    </g>
                </svg>
            </button>
            <div class="popover-overlay" *ngIf="fillColor[1]" (click)="fillColor[1] = false"></div>
            <div class="popover color-palette" *ngIf="fillColor[1]">
                <app-color-palette [(color)]="toolbarConfig.fontColor"
                    (colorChange)="fillColor[1] = false;  colorChange('textColor');">
                </app-color-palette>
            </div>
        </div> -->
        <!-- Link -->
        <div class="col" clickOutside *ngIf="editorConfig?.link">
            <button (click)="addLink = true;" [class.active]="addLink" [csTooltip]="'Add a Link'" placement="bottom"
                delay="0" type="button" [tooltipMandatory]="true">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                    <path d="M931 478.8l-84.4-84.4c-18.2-18.2-48-18.2-66.2 0-8.8 8.8-13.8 20.6-13.8 33.2s4.8 24.2 13.8 33.2l84.4 84.4c87.6 87.6 87.6 231 0 319.6-87.6 87.6-231 87.6-319.6 0l-84.4-84.4c-8.8-8.8-20.6-13.8-33.2-13.8s-24.2 4.8-33.2 13.8c-8.8 8.8-13.8 20.6-13.8 33.2s4.8 24.2 13.8 33.2l84.6 84.6c60.6 59.6 141 92.6 226.4 92.6 85.6 0 165.8-33 225.8-93.2 123.8-125.4 123.6-328.2-0.2-452zM478.8 159.2l84.4 84.4c8.8 8.8 20.6 13.8 33.2 13.8s24.2-4.8 33.2-13.8c8.8-8.8 13.8-20.6 13.8-33.2s-4.8-24.2-13.8-33.2l-84.6-84.6c-125.4-123.6-328.2-123.4-452.2 0.4-123.8 125.4-123.6 328.2 0.2 452l84.4 84.4c8.8 8.8 20.6 13.8 33.2 13.8s24.2-4.8 33.2-13.8c8.8-8.8 13.8-20.6 13.8-33.2s-4.8-24.2-13.8-33.2l-84.4-84.4c-87.6-87.6-87.6-231 0-319.6 87.4-87.4 230.8-87.4 319.4 0.2zM620.6 667.6c12.6 0 24.2-4.8 33.2-13.8 8.8-8.8 13.8-20.6 13.8-33.2s-4.8-24.2-13.8-33.2l-217.4-217.2c-8.8-8.8-20.6-13.8-33.2-13.8s-24.2 4.8-33.2 13.8c-8.8 8.8-13.8 20.6-13.8 33.2s4.8 24.2 13.8 33.2l217.2 217.2c9.2 8.8 21 13.8 33.4 13.8z"></path>
                </svg>
            </button>
            <div class="popup-mask link" *ngIf="addLink" [style.zIndex]="editorConfig.popupZIndex | pzIndex:3">
                <div class="popover attach">
                    <div class="head">
                        <h3>Insert Link</h3>
                        <button class="close" (click)="closeAddLinksPopover()">&times;</button>
                    </div>
                    <div class="link">
                        <label>{{editorConfig?.urlValue ? editorConfig?.urlValue : 'URL'}}</label>
                        <input [(ngModel)]="linkUrl" type="text" placeholder="{{editorConfig?.urlPlaceHolder ? editorConfig?.urlInputPlaceHolder : 'Enter a URL (Example: https://example.com)'}}">
                        <p class="error" *ngIf="invalidUrlMessage">{{editorConfig?.validUrlMessage ? editorConfig?.validUrlMsg : 'Please provide a valid URL.'}}</p>
                    </div>

                    <div class="link">
                        <label>{{editorConfig?.urlText ? editorConfig?.urlText : 'Display Text'}}</label>
                        <input [(ngModel)]="linkText" type="text" placeholder="{{editorConfig?.textPlaceHolder ? editorConfig?.textInputPlaceHolder : 'Enter a display text'}}">
                    </div>
                    <div class="link">
                        <label>{{editorConfig?.urlTitle ? editorConfig?.urlTitle : 'Title'}}</label>
                        <input [(ngModel)]="linkTitle" type="text" placeholder="{{editorConfig?.titlePlaceholder? editorConfig?.titlePlaceholder: 'Enter a title'}}">
                    </div>
                    <div class="footer">
                        <button class="cancel" (click)="closeAddLinksPopover()">Cancel</button><button
                            (click)="saveLink()" class="upload">Save</button>

                    </div>
                </div>
            </div>
        </div>
        <!-- Attachment -->
        <div class="col" clickOutside *ngIf="editorConfig?.file">
            <button (click)="upload = true" [class.active]="upload" [csTooltip]="'Upload Files'" placement="bottom"
                delay="0" type="button" [tooltipMandatory]="true" class="large">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                    <path d="M790.856 698.291v69.72h-533.776q-106.764 0-181.922-74.089t-75.158-180.853 75.158-181.922 181.922-75.158h579.559q76.274 0 131.817 55.544t55.544 131.817-55.544 130.748-131.817 54.474h-488.039q-47.92 0-81.712-33.791t-33.791-81.712 33.791-82.78 81.712-34.86h442.303v69.72h-442.303q-19.614 0-32.676 14.176t-13.060 33.791 13.060 32.676 32.676 13.060h488.039q47.92 0 82.78-33.791t34.86-81.712-34.86-82.78-82.78-34.86h-579.559q-76.274 0-131.817 55.544t-55.544 131.817 55.544 130.748 131.817 54.474h533.776z"></path>
                </svg>
            </button>
            <div class="popup-mask" *ngIf="upload" [style.zIndex]="editorConfig.popupZIndex | pzIndex:3">
                <div class="popover attach">
                    <div class="head">
                        <h3>Attach Files</h3>
                        <button class="close" (click)="closeAttachPopover()">&times;</button>
                    </div>
                    <div class="drag-drop" (dragenter)="dragenter($event)" (dragover)="dragover($event)"
                        (dragend)="dragend($event)" (dragleave)="dragleave($event)" (drop)="dropFiles($event)"
                        [class.enter]="enter">
                        <input type="file" id="browse" (change)="filesFromInput($event)" multiple>
                        <div class="container">
                            <span>Drop files here or browse to upload</span>
                            <label for="browse">Browse</label>
                        </div>
                    </div>
                    <div class="file-row">
                        <div class="file-col" *ngFor="let fileObj of filesArray; let i = index">
                            <button (click)="removeFile(i)">
                                <span>&times;</span>
                            </button>
                            <div class="file-item">
                                <div class="file-image">
                                    <span class="file {{fileObj.extension}}">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="2672" height="1024"
                                            viewBox="0 0 2672 1024">
                                            <g id="icomoon-ignore">
                                            </g>
                                            <path
                                                d="M2662.047 170.706c0-94.256-76.39-170.647-170.647-170.647h-2320.8c-94.256 0-170.647 76.391-170.647 170.647s76.391 170.647 170.647 170.647h2320.8c94.257 0 170.647-76.391 170.647-170.647zM170.601 682.647c-94.256 0-170.647 76.391-170.647 170.647s76.391 170.647 170.647 170.647h784.977c94.257 0 170.647-76.39 170.647-170.647s-76.39-170.647-170.647-170.647h-784.977z">
                                            </path>
                                        </svg>
                                        <span class="format">
                                            {{fileObj.extension}}
                                        </span>
                                    </span>
                                </div>
                                <p class="file-title" [csTooltip]="fileObj.file.name" placement="bottom" delay="0"
                                    type="black" [tooltipMandatory]="true">{{fileObj.file.name}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <button class="cancel" (click)="closeAttachPopover()">Cancel</button><button
                            (click)="saveFiles()" class="upload"
                            [class.disabled]="filesArray.length === 0">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Image -->
        <div class="col" clickOutside *ngIf="editorConfig?.mode === 'prime' && false">
            <button (click)="uploadImage = true" [class.active]="uploadImage" [csTooltip]="'Add Image'"
                placement="bottom" delay="0" type="button" [tooltipMandatory]="true">

                <svg width="199" height="199" viewBox="0 0 199 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path
                            d="M8 142.261V165C8 173.284 14.7157 180 23 180H177C185.284 180 192 173.284 192 165V119.71M8 142.261V33C8 24.7157 14.7157 18 23 18H177C185.284 18 192 24.7157 192 33V119.71M8 142.261L57.3409 98.9718C63.2401 93.7961 72.1315 94.0424 77.7351 99.5367L90.8 112.347M74.7 136.278L128.13 81.66C133.749 75.9164 142.895 75.6201 148.874 80.9882L192 119.71"
                            stroke-width="15" stroke-linecap="round" fill="none" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="199" height="199" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </button>
            <div class="popup-mask" *ngIf="uploadImage">
                <div class="popover attach">
                    <div class="head">
                        <h3>Attach Image</h3>
                        <button class="close" (click)="clickOutsideImage()">&times;</button>
                    </div>
                    <div class="drag-drop" (dragenter)="dragenter($event)" (dragover)="dragover($event)"
                        (dragend)="dragend($event)" (dragleave)="dragleave($event)" [class.enter]="enter"
                        (drop)="dropImage($event)">
                        <input type="file" id="browse" accept="image/x-png,image/gif,image/jpeg"
                            (change)="changeImage($event)">
                        <div class="container">
                            <span>Drop image here or browse to upload</span>
                            <label for="browse">Browse</label>
                        </div>
                    </div>
                    <div class="file-row" *ngIf="image">
                        <div class="file-col">
                            <button (click)="image = null;">
                                <span>&times;</span>
                            </button>
                            <div class="file-item">
                                <div class="file-image">
                                    <img [src]="image.url" alt="">
                                </div>
                                <p class="file-title">{{image?.file?.name}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <button class="cancel" (click)="clickOutsideImage()">Cancel</button><button
                            (click)="saveImage()" class="upload">Save</button>
                    </div>
                </div>
            </div>
            <div class="alert-box" *ngIf="showAlert">
                <h1 id="alert-msg">{{alertMsg}}</h1>
                <button (click)="hideAlert()" id="ok-btn">OK</button>
            </div>
        </div>
        <!-- More options -->
        <div class="col" clickOutside *ngIf="moreOptionsButton">
            <button (click)="showMoreOptions()" [class.active]="moreOptions">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                    viewBox="0 0 1024 1024">
                    <g id="icomoon-ignore"></g>
                    <path
                        d="M512 383.256q50.912 0 89.815 38.903t38.903 89.815-38.903 89.815-89.815 38.903-89.815-38.903-38.903-89.815 38.903-89.815 89.815-38.903zM895.282 383.256q50.912 0 89.815 38.903t38.903 89.815-38.903 89.815-89.815 38.903-89.815-38.903-38.903-89.815 38.903-89.815 89.815-38.903zM128.718 383.256q50.912 0 89.815 38.903t38.903 89.815-38.903 89.815-89.815 38.903-89.815-38.903-38.903-89.815 38.903-89.815 89.815-38.903z">
                    </path>
                </svg>
            </button>
            <div class="popover-overlay" *ngIf="moreOptions" (click)="moreOptions = false"></div>
            <div class="popover small" *ngIf="moreOptions">
                <ul class="option-list">
                    <!-- Quote -->
                    <li (click)="moreOptions = false;" data-id="quote">
                        <button data-id="quote" [class.active]="toolbarConfig?.quote">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                                <path d="M430 438.4h-332.6c22.2-131 135.2-228 268.6-228h46v-92h-46c-201.8 0-366 164.2-366 366v384c0 25.4 20.6 46 46 46h384c25.4 0 46-20.6 46-46v-384c0-25.4-20.6-46-46-46zM384 530.4v292h-292v-292h292zM978 438.4h-332.6c22.2-131 135.2-228 268.6-228h46v-92h-46c-201.8 0-366 164.2-366 366v384c0 25.4 20.6 46 46 46h384c25.4 0 46-20.6 46-46v-384c0-25.4-20.6-46-46-46zM932 530.4v292h-292v-292h292z"></path>
                            </svg>
                            <span data-id="quote">Quote</span>
                        </button>
                    </li>
                    <!-- Superscript -->
                    <li (click)="moreOptions = false;" data-id="superscript">
                        <button [class.active]="toolbarConfig?.superscript" data-id="superscript">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                        <path d="M576 114l-223.4 367.8-240.2-367.8h-112.4l296.6 448-296.6 462h112.4l240.4-381.8 223.2 381.8h112.4l-279.6-462 279.6-448zM965.4 283.8v0c37.2-37.4 58.6-89 58.6-141.8 0-78.2-63.8-142-142-142s-142 63.8-142 142v46h92v-46c0-27.6 22.4-50 50-50s50 22.4 50 50c0 28.6-11.6 56.6-31.8 76.6l-160.2 160.4v97h284v-92h-159l100.4-100.2z"></path>
                    </svg>
                            <span data-id="superscript">Superscript</span>
                        </button>
                    </li>
                    <!-- Subscript -->
                    <li (click)="moreOptions = false" data-id="subscript">
                        <button [class.active]="toolbarConfig?.subscript" data-id="subscript">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                        <path d="M576 0l-223.4 367.8-240.2-367.8h-112.4l296.6 448-296.6 462h112.4l240.4-381.8 223.2 381.8h112.4l-279.6-462 279.6-448zM965.4 831.8v0c37.4-37.4 58.6-89 58.6-141.8 0-78.2-63.8-142-142-142s-142 63.8-142 142v46h92v-46c0-27.6 22.4-50 50-50s50 22.4 50 50c0 28.6-11.6 56.6-31.8 76.6l-160.2 160.4v97h284v-92h-159l100.4-100.2z"></path>
                    </svg>
                            <span data-id="subscript">Subscript</span>
                        </button>
                    </li>
                    <!-- Increase Indent -->
                    <li (click)="moreOptions = false;" data-id="increaseIndent">
                        <button data-id="increaseIndent">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                        <path d="M27 778l0.2 0.2c6 2.6 12.4 4 18.8 4 11.4 0 22.2-4.2 30.4-11.8l255.8-223.8c10-8.6 15.8-21.2 15.8-34.6s-5.8-26-15.8-34.6l-256-224c-13.4-12-32.8-14.8-49.4-7.2-16.2 7.4-26.8 23.8-26.8 41.8v448c0 18 10.6 34.4 27 42zM92 634.8v-245.4c48.6 42.4 113.8 99.6 140.2 122.8l-140.2 122.6zM397.4 626h628v92h-628v-92zM397.4 306h628v92h-628v-92zM0-14h1024v92h-1024v-92zM0 946h1024v92h-1024v-92z"></path>
                    </svg>
                            <span data-id="increaseIndent">Increase Indent</span>
                        </button>
                    </li>
                    <!-- Decrease Indent -->
                    <li (click)="moreOptions = false;" data-id="decreaseIndent">
                        <button data-id="decreaseIndent">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                        <path d="M1025.4 736v-448c0-18-10.6-34.4-26.8-41.8-16.6-7.6-36-4.8-49.4 7.2l-256 224c-10 8.6-15.8 21.2-15.8 34.6s5.8 26 15.8 34.6l255.8 223.8c8.2 7.6 19 11.8 30.4 11.8 6.4 0 12.8-1.4 18.8-4l0.2-0.2c16.4-7.6 27-24 27-42zM793.2 512.2c26.4-23.2 91.6-80.4 140.2-122.8v245.4l-140.2-122.6zM0 626h628v92h-628v-92zM0 306h628v92h-628v-92zM1.4-14h1024v92h-1024v-92zM1.4 946h1024v92h-1024v-92z"></path>
                    </svg>
                            <span data-id="decreaseIndent">Decrease Indent</span>
                        </button>
                    </li>
                </ul>

            </div>
        </div>

        <div class="child-row" *ngIf="!moreOptionsButton">
            <!-- Quote -->
            <div class="col" data-id="quote">
                <button data-id="quote" [csTooltip]="'Quote'" placement="bottom" delay="0" type="button"
                    [class.active]="toolbarConfig?.quote" [tooltipMandatory]="true">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                        <path d="M430 438.4h-332.6c22.2-131 135.2-228 268.6-228h46v-92h-46c-201.8 0-366 164.2-366 366v384c0 25.4 20.6 46 46 46h384c25.4 0 46-20.6 46-46v-384c0-25.4-20.6-46-46-46zM384 530.4v292h-292v-292h292zM978 438.4h-332.6c22.2-131 135.2-228 268.6-228h46v-92h-46c-201.8 0-366 164.2-366 366v384c0 25.4 20.6 46 46 46h384c25.4 0 46-20.6 46-46v-384c0-25.4-20.6-46-46-46zM932 530.4v292h-292v-292h292z"></path>
                    </svg>
                </button>
            </div>
            <!-- Superscript -->
            <div class="col" data-id="superscript">
                <button [class.active]="toolbarConfig?.superscript" data-id="superscript" [csTooltip]="'Superscript'"
                    placement="bottom" delay="0" type="button" [tooltipMandatory]="true">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                    <path d="M576 114l-223.4 367.8-240.2-367.8h-112.4l296.6 448-296.6 462h112.4l240.4-381.8 223.2 381.8h112.4l-279.6-462 279.6-448zM965.4 283.8v0c37.2-37.4 58.6-89 58.6-141.8 0-78.2-63.8-142-142-142s-142 63.8-142 142v46h92v-46c0-27.6 22.4-50 50-50s50 22.4 50 50c0 28.6-11.6 56.6-31.8 76.6l-160.2 160.4v97h284v-92h-159l100.4-100.2z"></path>
                </svg>
                </button>
            </div>
            <!-- Subscript -->
            <div class="col" data-id="subscript">
                <button [class.active]="toolbarConfig?.subscript" data-id="subscript" [csTooltip]="'Subscript'"
                    placement="bottom" delay="0" type="button" [tooltipMandatory]="true">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                        <path d="M576 0l-223.4 367.8-240.2-367.8h-112.4l296.6 448-296.6 462h112.4l240.4-381.8 223.2 381.8h112.4l-279.6-462 279.6-448zM965.4 831.8v0c37.4-37.4 58.6-89 58.6-141.8 0-78.2-63.8-142-142-142s-142 63.8-142 142v46h92v-46c0-27.6 22.4-50 50-50s50 22.4 50 50c0 28.6-11.6 56.6-31.8 76.6l-160.2 160.4v97h284v-92h-159l100.4-100.2z"></path>
                    </svg>
                </button>
            </div>
            <!-- Increase Indent -->
            <div class="col" data-id="increaseIndent">
                <button [csTooltip]="'Increase indent'" placement="bottom" delay="0" type="button"
                    [tooltipMandatory]="true" data-id="increaseIndent">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                        <path d="M27 778l0.2 0.2c6 2.6 12.4 4 18.8 4 11.4 0 22.2-4.2 30.4-11.8l255.8-223.8c10-8.6 15.8-21.2 15.8-34.6s-5.8-26-15.8-34.6l-256-224c-13.4-12-32.8-14.8-49.4-7.2-16.2 7.4-26.8 23.8-26.8 41.8v448c0 18 10.6 34.4 27 42zM92 634.8v-245.4c48.6 42.4 113.8 99.6 140.2 122.8l-140.2 122.6zM397.4 626h628v92h-628v-92zM397.4 306h628v92h-628v-92zM0-14h1024v92h-1024v-92zM0 946h1024v92h-1024v-92z"></path>
                    </svg>
                </button>
            </div>
            <!-- Decrease Indent -->
            <div class="col" data-id="decreaseIndent">
                <button [csTooltip]="'Decrease indent'" placement="bottom" delay="0" type="button"
                    [tooltipMandatory]="true" data-id="decreaseIndent">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                        <path d="M1025.4 736v-448c0-18-10.6-34.4-26.8-41.8-16.6-7.6-36-4.8-49.4 7.2l-256 224c-10 8.6-15.8 21.2-15.8 34.6s5.8 26 15.8 34.6l255.8 223.8c8.2 7.6 19 11.8 30.4 11.8 6.4 0 12.8-1.4 18.8-4l0.2-0.2c16.4-7.6 27-24 27-42zM793.2 512.2c26.4-23.2 91.6-80.4 140.2-122.8v245.4l-140.2-122.6zM0 626h628v92h-628v-92zM0 306h628v92h-628v-92zM1.4-14h1024v92h-1024v-92zM1.4 946h1024v92h-1024v-92z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="right" #menuRight>
        <!-- @ -->
        <div class="col" data-id="@" *ngIf="editorConfig?.mentionedNames?.length > 0">
            <button data-id="@">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                    <path d="M771.2 881.8c-61 29.8-136.8 44.8-227.2 44.8-84.6 0-161.6-14.4-231-43-69.6-28.8-122.6-73-159.4-133.2s-55.2-131.8-55.2-215c0-79.4 18.4-153.8 55.2-223.4 36.8-69.4 88.4-122.8 155.2-160s140.4-55.8 221.2-55.8c70.8 0 135.2 14.8 193.8 44.4 58.4 29.6 102.4 69 132 118.2s44.2 102.2 44.2 159c0 48.6-11.4 95.6-34.4 141.4-23 45.6-54 82-93.4 109.2-29.6 20.8-53.6 31-72 31-10 0-18.6-3.4-25.6-10s-10.6-14.6-10.6-23.6c0-5 5.2-31.4 15.6-79l74.4-341.8h-92.6l-17.4 79c-19.6-31.6-43.2-55-70.4-70.6-27.2-15.4-55.8-23.2-85.8-23.2-39.4 0-79.8 13.6-121.6 40.8s-76.6 67.8-104.8 122c-28.2 54.2-42.2 108.2-42.2 162.2 0 43.8 9 84 27.2 120.8 18.2 36.6 41.6 63.8 70.6 81.4s58.8 26.4 89.6 26.4c28 0 55.8-7.8 83.6-23.2s52.8-36 75.2-61.4c2 20.8 5.4 35.4 9.8 43.8 7 13.2 17.6 23.4 32.4 30.6s33.8 10.8 57.8 10.8c74.4 0 143.2-34.2 206-102.8 70.4-76.4 105.6-163.8 105.6-262.4 0-69-16.8-132.8-50.2-191.6-39.4-68.2-93-119.6-161.2-154-68.4-34.4-145.2-51.6-230.8-51.6-110.4 0-204.4 24.4-281.8 73.4s-137.2 119.4-179.2 211.4c-34.6 75-51.8 154-51.8 236.8 0 74.4 14.4 143.6 43.4 207.8 23.2 50.6 57.4 95.4 103 134.2s100.6 68 165.4 87.4c64.6 19.4 135.4 29 211.8 29 83.2 0 154.2-10.8 213.2-32.4s109.8-50.8 152.6-87.8c42.8-37 73-73.4 90.6-109h-93.6c-30.4 42.8-76.2 79.2-137.2 109zM595.8 555.6c-12.4 34.4-28.4 63-47.8 85.4s-40 39.4-61.4 50.6c-21.4 11.4-41.8 17-61 17-29 0-54.6-13-77.2-38.8-22.4-25.8-33.6-62-33.6-108.4 0-29.2 5.6-61.2 16.6-96.2s25.6-64.6 44-89.2c18.2-24.4 37.2-42.2 56.6-53.2s40.2-16.6 62.4-16.6c33.4 0 61.8 12.8 85.2 38.2 23.2 25.4 35 61.2 35 107.4-0.2 34.8-6.4 69.2-18.8 103.8z"></path>
                </svg>
            </button>
        </div>
        <!-- # -->
        <div class="col" data-id="#" *ngIf="editorConfig?.mentionedDates?.length > 0">
            <button data-id="#">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                    <path d="M146.6 1002h90.8l69.8-275.4h270.6l-69 275.4h92.8l69.8-275.4h305.8v-92.4h-284.6l56.4-218.6h224v-92.4h-202.6l75.8-301.2h-93.6l-75.8 301.4h-269.2l75.8-301.4h-92.8l-75.8 301.4h-272v92.4h250.6l-55.6 218.6h-191v92.4h167.6l-67.8 275.2zM386.2 415.6h269.2l-56.4 218.6h-270.4l57.6-218.6z"></path>
                </svg>
            </button>
        </div>
        <!-- Button Name -->
        <div class="col" *ngIf="editorConfig?.buttonName">
            <button class="submit" data-id="submit"
                [class.disabled]="editorConfig?.disabledButton">{{editorConfig?.buttonName}}</button>
        </div>
    </div>
</div>`

export default template;