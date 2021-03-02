const template = `<div class="editor-menu" (click)="buttonClicked($event)">
    <div class="left">
        <!-- Bold -->
        <div class="col" data-id="bold">
            <button data-id="bold" [class.active]="toolbarConfig?.bold" [csTooltip]="'Bold'" placement="bottom"
                delay="0" type="black" [tooltipMandatory]="true">
                <svg width="299" height="299" viewBox="0 0 299 299" fill="none" xmlns="http://www.w3.org/2000/svg"
                    data-id="bold">
                    <g clip-path="url(#clip0)">
                        <path data-id="bold"
                            d="M213.133 144.853C240.5 134.5 248.333 102.2 248.333 80.333C248.333 32.227 211.107 0 168 0H44.667V298.667H184.854C224.547 298.667 254.001 269 254.001 217.814C254 185.387 240.547 157.76 213.133 144.853ZM93.667 48.333H162.667C180.374 48.333 194.667 62.626 194.667 80.333C194.667 98.04 180.374 117.333 162.667 117.333H93.667V48.333ZM173.333 250.333H93.667V181.333H173.334C191.041 181.333 205.334 197.626 205.334 215.333C205.334 234.5 191.04 250.333 173.333 250.333Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="298.667" height="298.667" fill="white" data-id="bold" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
        <!-- Italic -->
        <div class="col" data-id="italic">
            <button data-id="italic" [class.active]="toolbarConfig?.italic" [csTooltip]="'Italic'" placement="bottom"
                delay="0" type="black" [tooltipMandatory]="true">
                <svg width="299" height="299" viewBox="0 0 299 299" fill="none" xmlns="http://www.w3.org/2000/svg"
                    data-id="italic">
                    <g clip-path="url(#clip0)">
                        <path data-id="italic"
                            d="M105.881 0V54H154.873L79.104 244.667H21V298.667H190.761V244.667H139.78L214.554 54H275.641V0H105.881Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="298.667" height="298.667" fill="white" data-id="italic" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
        <!-- Underline -->
        <div class="col" data-id="underline">
            <button data-id="underline" [class.active]="toolbarConfig?.underline" [csTooltip]="'Underline'"
                placement="bottom" delay="0" type="black" [tooltipMandatory]="true">
                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384 384" data-id="underline"
                    style="enable-background: new 0 0 384 384" xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <path data-id="underline" d="M192,298.667c70.72,0,128-57.28,128-128V0h-53.333v170.667c0,41.28-33.387,74.667-74.667,74.667
                                s-74.667-33.387-74.667-74.667V0H64v170.667C64,241.387,121.28,298.667,192,298.667z" />
                                <rect x="42.667" y="341.333" width="298.667" height="42.667" data-id="underline" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <!-- Line through -->
        <div class="col" data-id="strikeThrough">
            <button data-id="strikeThrough" [class.active]="toolbarConfig?.strikeThrough" [csTooltip]="'Strike Through'"
                placement="bottom" delay="0" type="black" [tooltipMandatory]="true">
                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384 384" xml:space="preserve"
                    data-id="strikeThrough">
                    <g>
                        <g>
                            <g>
                                <path data-id="strikeThrough" d="M90.347,154.667c1.067,1.92,2.24,3.627,3.307,5.44H192c-13.653-4.693-21.973-9.707-29.973-14.933
                                c-10.453-6.933-15.68-15.573-15.68-25.813c0-4.907,1.067-9.707,3.093-14.08s5.12-8.213,9.173-11.52
                                c4.053-3.307,9.173-5.867,15.36-7.68c6.293-1.813,13.547-2.773,21.973-2.773c8.747,0,16.32,1.067,22.72,3.307
                                c6.4,2.133,11.733,5.333,16,9.28s7.467,8.747,9.493,14.4c2.027,5.547,3.093,11.627,3.093,18.133h64.213
                                c0-13.973-2.667-26.88-8.107-38.613c-5.44-11.84-13.12-21.973-23.147-30.507c-10.027-8.64-22.08-15.253-36.16-20.053
                                c-14.08-4.8-29.76-7.147-47.04-7.147c-16.853,0-32.213,2.133-46.293,6.293c-14.08,4.16-26.133,10.027-36.373,17.6
                                c-10.24,7.573-18.133,16.747-23.787,27.52s-8.427,22.613-8.427,35.627C82.133,132.693,84.907,144.533,90.347,154.667
                                L90.347,154.667z" />
                                <path data-id="strikeThrough" d="M0,181.44v42.667h205.333c3.84,1.493,8.533,2.987,11.733,4.373c7.893,3.52,14.08,7.253,18.56,10.88
                                c4.48,3.733,7.467,7.787,9.067,12.053c1.6,4.373,2.347,9.28,2.347,14.613c0,5.013-0.96,9.707-2.88,13.973
                                c-1.92,4.373-4.907,8.107-8.853,11.2c-3.947,3.093-9.067,5.547-15.147,7.36c-6.187,1.813-13.333,2.667-21.653,2.667
                                c-9.28,0-17.707-0.96-25.28-2.773c-7.573-1.813-13.973-4.8-19.307-8.853c-5.333-4.053-9.493-9.387-12.48-15.893
                                C138.453,267.2,136,257.387,136,248H72.533c0,11.733,1.707,24.107,5.013,33.707c3.307,9.6,8,18.24,13.867,25.813
                                c5.867,7.573,12.907,14.08,20.907,19.627c8,5.547,16.64,10.24,26.027,13.867c9.387,3.733,19.093,6.507,29.44,8.213
                                c10.24,1.813,20.587,2.667,30.827,2.667c17.067,0,32.64-1.92,46.507-5.867c13.867-3.947,25.813-9.6,35.627-16.853
                                c9.813-7.36,17.387-16.32,22.827-27.093c5.44-10.773,8-22.933,8-36.587c0-12.8-2.24-24.32-6.613-34.453
                                c-1.067-2.453-2.24-4.8-3.627-7.147H384V181.44H0z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <!-- list -->
        <div class="col" clickOutside (clickOutside)="closeListStylesPopover()">
            <button class="lg" [class.active]="listStyle|| toolbarConfig?.orderedList || toolbarConfig?.unorderedList"
                (click)="listStyles()" [csTooltip]="'List Option'" placement="bottom" delay="0" type="black"
                [tooltipMandatory]="true">
                <svg width="595" height="400" viewBox="0 0 595 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M34.3783 20C15.3553 20 0 35.6776 0 55.1C0 74.5224 15.3553 90.2 34.3783 90.2C53.4013 90.2 68.7566 74.5224 68.7566 55.1C68.7566 35.6776 53.4013 20 34.3783 20Z" />
                    <path
                        d="M34.3783 160.4C15.3553 160.4 0 176.077 0 195.5C0 214.922 15.3553 230.6 34.3783 230.6C53.4013 230.6 68.7566 214.922 68.7566 195.5C68.7566 176.077 53.4013 160.4 34.3783 160.4Z" />
                    <path
                        d="M34.3783 300.8C15.2414 300.8 0 316.595 0 335.9C0 355.205 15.4702 371 34.3783 371C53.2864 371 68.7566 355.205 68.7566 335.9C68.7566 316.595 53.5152 300.8 34.3783 300.8Z" />
                    <path d="M424 312.5H103.135V359.301H424V312.5Z" />
                    <path d="M424 31.7002H103.135V78.5006H424V31.7002Z" />
                    <path d="M424 172.1H103.135V218.901H424V172.1Z" />
                    <path d="M595 162L538 228L481 162H594.989H595Z" />
                </svg>
            </button>
            <div class="popover small" *ngIf="listStyle" (click)="closeListStylesPopover()">
                <ul class="option-list">
                    <li data-id="orderedList">
                        <!-- List with Number -->
                        <button data-id="orderedList" [class.active]="toolbarConfig?.orderedList">
                            <svg width="298" height="298" viewBox="0 0 298 298" fill="none" data-id="orderedList"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path data-id="orderedList"
                                        d="M0 242.125H31.3687V251.438H15.684V270.063H31.3687V279.375H0V298H47.0527V223.5H0V242.125Z" />
                                    <path d="M15.684 74.4998H31.3687V0H0V18.6247H15.684V74.4998Z"
                                        data-id="orderedList" />
                                    <path
                                        d="M0 130.375H28.2316L0 169.487V186.25H47.0527V167.625H18.8211L47.0527 128.513V111.75H0V130.375Z"
                                        data-id="orderedList" />
                                    <path d="M298.001 242.125H78.4214V279.375H298.001V242.125Z" data-id="orderedList" />
                                    <path d="M298.001 18.6246H78.4214V55.875H298.001V18.6246Z" data-id="orderedList" />
                                    <path d="M298.001 130.375H78.4214V167.625H298.001V130.375Z" data-id="orderedList" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="298" height="298" fill="white" data-id="orderedList" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span data-id="orderedList">List with number</span>
                        </button>
                    </li>
                    <li data-id="unorderedList">
                        <!-- List with bullets -->
                        <button data-id="unorderedList" [class.active]="toolbarConfig?.unorderedList">
                            <svg width="299" height="299" viewBox="0 0 299 299" fill="none" data-id="unorderedList"
                                xmlns="http://www.w3.org/2000/svg">
                                <path data-id="unorderedList"
                                    d="M24.2432 28.2834C10.8284 28.2834 0 39.1118 0 52.5267C0 65.9415 10.8284 76.7699 24.2432 76.7699C37.6581 76.7699 48.4865 65.9415 48.4865 52.5267C48.4865 39.1118 37.6581 28.2834 24.2432 28.2834Z" />
                                <path data-id="unorderedList"
                                    d="M24.2432 125.256C10.8284 125.256 0 136.085 0 149.5C0 162.914 10.8284 173.743 24.2432 173.743C37.6581 173.743 48.4865 162.914 48.4865 149.5C48.4865 136.085 37.6581 125.256 24.2432 125.256Z" />
                                <path data-id="unorderedList"
                                    d="M24.2432 222.229C10.7481 222.229 0 233.139 0 246.472C0 259.806 10.9095 270.716 24.2432 270.716C37.577 270.716 48.4865 259.806 48.4865 246.472C48.4865 233.139 37.7384 222.229 24.2432 222.229Z" />
                                <path data-id="unorderedList" d="M299 230.311H72.7297V262.635H299V230.311Z" />
                                <path data-id="unorderedList" d="M299 36.3647H72.7297V68.6893H299V36.3647Z" />
                                <path data-id="unorderedList" d="M299 133.338H72.7297V165.662H299V133.338Z" />
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
                placement="bottom" delay="0" type="black" [tooltipMandatory]="true">
                <svg width="595" height="400" viewBox="0 0 595 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M394.311 356.146H0V400H394.311V356.146Z" />
                    <path d="M284.78 267.11H0V310.963H284.78V267.11Z" />
                    <path d="M259.008 89.0365H0V132.89H259.008V89.0365Z" />
                    <path d="M394.311 178.073H0V221.927H394.311V178.073Z" />
                    <path d="M394.311 0H0V43.8538H394.311V0Z" />
                    <path d="M595 178L529.5 252L464 178H594.987H595Z" />
                </svg>
            </button>
            <div class="popover small" *ngIf="alignment">
                <ul class="option-list" (click)="alignment = false;">
                    <li data-id="left-align">
                        <!-- Left Align -->
                        <button data-id="left-align">
                            <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384 384" xml:space="preserve"
                                data-id="left-align">
                                <g>
                                    <g>
                                        <g>
                                            <rect x="0" y="341.333" width="384" height="42.667" data-id="left-align" />
                                            <rect x="0" y="256" width="256" height="42.667" data-id="left-align" />
                                            <rect x="0" y="85.333" width="256" height="42.667" data-id="left-align" />
                                            <rect x="0" y="170.667" width="384" height="42.667" data-id="left-align" />
                                            <rect x="0" y="0" width="384" height="42.667" data-id="left-align" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span data-id="left-align">Align Left</span>
                        </button>
                    </li>
                    <li data-id="center-align">
                        <!-- Center Align -->
                        <button data-id="center-align">
                            <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384 384" xml:space="preserve"
                                data-id="center-align">
                                <g>
                                    <g>
                                        <g>
                                            <rect x="85.333" y="256" width="213.333" height="42.667"
                                                data-id="center-align" />
                                            <rect x="0" y="341.333" width="384" height="42.667"
                                                data-id="center-align" />
                                            <rect x="0" y="170.667" width="384" height="42.667"
                                                data-id="center-align" />
                                            <rect x="85.333" y="85.333" width="213.333" height="42.667"
                                                data-id="center-align" />
                                            <rect x="0" y="0" width="384" height="42.667" data-id="center-align" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span data-id="center-align">Align Center</span>
                        </button>
                    </li>
                    <li data-id="right-align">
                        <!-- Right Align -->
                        <button data-id="right-align">
                            <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384 384" xml:space="preserve"
                                data-id="right-align">
                                <g>
                                    <g>
                                        <g>
                                            <rect x="128" y="256" width="256" height="42.667" data-id="right-align" />
                                            <rect x="0" y="341.333" width="384" height="42.667" data-id="right-align" />
                                            <rect x="0" y="0" width="384" height="42.667" data-id="right-align" />
                                            <rect x="0" y="170.667" width="384" height="42.667" data-id="right-align" />
                                            <rect x="128" y="85.333" width="256" height="42.667"
                                                data-id="right-align" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span data-id="right-align">Align Right</span>
                        </button>
                    </li>
                    <li data-id="justify-full">
                        <button data-id="justify-full">
                            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" data-id="justify-full"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M250 356H0V400H250V356Z" data-id="justify-full" />
                                <path d="M400 267H0V311H400V267Z" data-id="justify-full" />
                                <path d="M400 89H0V133H400V89Z" data-id="justify-full" />
                                <path d="M400 178H0V222H400V178Z" data-id="justify-full" />
                                <path d="M400 0H0V44H400V0Z" data-id="justify-full" />
                            </svg>
                            <span data-id="justify-full">Align Justify</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Font-Style -->
        <div class="col" clickOutside (clickOutside)="closeFontStylePopover()" *ngIf="editorConfig?.mode === 'prime'">
            <button (click)="fontStylePopover()" [csTooltip]="'Font Style'" placement="bottom" delay="0" type="black"
                [tooltipMandatory]="true">
                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 405.333 405.333" xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <polygon
                                    points="0,213.333 64,213.333 64,362.667 128,362.667 128,213.333 192,213.333 192,149.333 0,149.333 			" />
                                <polygon points="128,42.667 128,106.667 234.667,106.667 234.667,362.667 298.667,362.667 298.667,106.667 405.333,106.667 
                    405.333,42.667 " />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
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
            <button class="lg" (click)="fontSizePopover()" [csTooltip]="'Font Size'" placement="bottom" delay="0" type="black"
                [tooltipMandatory]="true">
                <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M55.6363 235.199H148.364L165.055 275.999H204L115.909 72H88.0905L0 276H38.9454L55.6363 235.199ZM102 108.72L136.679 201.818H67.319L102 108.72Z" />
                    <path d="M212 246.4H277L288.7 274.999H316L254.25 132H234.75L173 275H200.3L212 246.4ZM244.5 157.74L268.809 223H220.189L244.5 157.74Z" />
                    <path d="M170 135L190.064 107.046L210 135.092L170.004 135L170 135Z" />
                    <path d="M210.064 140.091L190 168.046L170.064 140.001L210.06 140.091L210.064 140.091Z" />
                </svg>
            </button>
            <div class="popover small" *ngIf="fontSize">
                <ul class="option-list">
                    <li *ngFor="let size of [11,12,14,18,24,32,36,48]"  attr.data-id="fontsize-{{size}}" (click)="fontSize = false;">
                        <button attr.data-id="fontsize-{{size}}">{{size}}</button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Font Family-->
        <div class="col" clickOutside (clickOutside)="fontFamily = false;" *ngIf="editorConfig?.mode === 'prime'">
            <button (click)="openfontFamily()" [class.active]="fontFamily" [csTooltip]="'Font Family'" [class.active]="fontStyles.includes(toolbarConfig?.fontStyle)"
                placement="bottom" delay="0" type="black" [tooltipMandatory]="true">
                <svg viewBox="0 0 20 20">
                    <path
                        d="M11.03 3h6.149a.75.75 0 1 1 0 1.5h-5.514L11.03 3zm1.27 3h4.879a.75.75 0 1 1 0 1.5h-4.244L12.3 6zm1.27 3h3.609a.75.75 0 1 1 0 1.5h-2.973L13.57 9zm-2.754 2.5L8.038 4.785 5.261 11.5h5.555zm.62 1.5H4.641l-1.666 4.028H1.312l5.789-14h1.875l5.789 14h-1.663L11.436 13z">
                    </path>
                </svg>
            </button>
            <div class="popover small" *ngIf="fontFamily">
                <ul class="option-list" (click)="fontFamily = false;">
                    <li *ngFor="let font of fontStyles" attr.data-id="font-{{font}}">
                        <button attr.data-id="font-{{font}}" [class.active]="toolbarConfig?.fontStyle === font">
                            {{font | titlecase}}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Fill Color -->
        <div class="col" clickOutside (clickOutside)="fillColor[0] = false;" *ngIf="editorConfig?.colorPalette && editorConfig?.mode === 'prime'">
            <button (click)="fillColor[0] = !fillColor[0]; fillColor[1] = false;" [class.active]="fillColor[0]"
                [csTooltip]="'Background Color'" placement="bottom" delay="0" type="black" [tooltipMandatory]="true">
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
            <div class="popover color-palette" *ngIf="fillColor[0]">
                <app-color-palette [(color)]="toolbarConfig.backgroundColor"
                    (colorChange)="fillColor[0] = false; colorChange('fillColor');">
                </app-color-palette>
            </div>
        </div>
        <!-- Text Color -->
        <div class="col" clickOutside (clickOutside)="fillColor[1] = false;" *ngIf="editorConfig?.colorPalette && editorConfig?.mode === 'prime'">
            <button (click)="fillColor[1] = !fillColor[1]; fillColor[0] = false;" [class.active]="fillColor[1]"
                [csTooltip]="'Text Color'" placement="bottom" delay="0" type="black" [tooltipMandatory]="true">
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
            <div class="popover color-palette" *ngIf="fillColor[1]">
                <app-color-palette [(color)]="toolbarConfig.fontColor"
                    (colorChange)="fillColor[1] = false;  colorChange('textColor');">
                </app-color-palette>
            </div>
        </div>
        <!-- Link -->
        <div class="col" clickOutside (clickOutside)="closeAddLinksPopover()">
            <button (click)="addLink = true;" [class.active]="addLink" [csTooltip]="'Add Link'" placement="bottom"
                delay="0" type="black" [tooltipMandatory]="true">
                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 426.667 426.667" xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <path d="M320,106.667h-85.333V147.2H320c36.48,0,66.133,29.653,66.133,66.133S356.48,279.467,320,279.467h-85.333V320H320
                c58.88,0,106.667-47.787,106.667-106.667S378.88,106.667,320,106.667z" />
                                <path d="M40.533,213.333c0-36.48,29.653-66.133,66.133-66.133H192v-40.533h-85.333C47.787,106.667,0,154.453,0,213.333
                S47.787,320,106.667,320H192v-40.533h-85.333C70.187,279.467,40.533,249.813,40.533,213.333z" />
                                <rect x="128" y="192" width="170.667" height="42.667" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
            <div class="popup-mask link" *ngIf="addLink">
                <div class="popover attach">
                    <div class="head">
                        <h3>Insert Link</h3>
                        <button class="close" (click)="closeAddLinksPopover()">&times;</button>
                    </div>
                    <div class="link">
                        <label>Web Address</label>
                        <input [(ngModel)]="linkUrl" type="text" placeholder="https://exampleimage.com">
                        <p class="error" *ngIf="invalidUrlMessage">{{invalidUrlMessage}}</p>
                    </div>
                    <div class="link">
                        <label>Display Text</label>
                        <input [(ngModel)]="linkText" type="text" placeholder="Enter Text">
                    </div>
                    <div class="link">
                        <label>Title</label>
                        <input [(ngModel)]="linkTitle" type="text" placeholder="Enter a title">
                    </div>
                    <div class="footer">
                        <button class="cancel" (click)="closeAddLinksPopover()">Cancel</button><button
                            (click)="saveLink()" class="upload">Save</button>

                    </div>
                </div>
            </div>
        </div>
        <!-- Attachment -->
        <div class="col" clickOutside (clickOutside)="closeAttachPopover()" *ngIf="editorConfig?.file">
            <button (click)="upload = true" [class.active]="upload" [csTooltip]="'Upload File'" placement="bottom"
                delay="0" type="black" [tooltipMandatory]="true">
                <svg width="199" height="199" viewBox="0 0 199 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path
                            d="M107.325 7L112.231 1.32746L110.118 -0.5H107.325V7ZM172 62.9397H179.5V59.5105L176.906 57.2672L172 62.9397ZM106.843 93C106.843 88.8579 103.485 85.5 99.3429 85.5C95.2007 85.5 91.8429 88.8579 91.8429 93H106.843ZM91.8429 145C91.8429 149.142 95.2007 152.5 99.3429 152.5C103.485 152.5 106.843 149.142 106.843 145H91.8429ZM73.2 111.5C69.0579 111.5 65.7 114.858 65.7 119C65.7 123.142 69.0579 126.5 73.2 126.5V111.5ZM125.486 126.5C129.628 126.5 132.986 123.142 132.986 119C132.986 114.858 129.628 111.5 125.486 111.5V126.5ZM162 183.5H38V198.5H162V183.5ZM35.5 181V17H20.5V181H35.5ZM38 14.5H107.325V-0.5H38V14.5ZM99.8247 7V52.9397H114.825V7H99.8247ZM117.325 70.4397H172V55.4397H117.325V70.4397ZM164.5 62.9397V181H179.5V62.9397H164.5ZM102.418 12.6725L167.094 68.6122L176.906 57.2672L112.231 1.32746L102.418 12.6725ZM91.8429 93V119H106.843V93H91.8429ZM91.8429 119V145H106.843V119H91.8429ZM73.2 126.5H99.3429V111.5H73.2V126.5ZM99.3429 126.5H125.486V111.5H99.3429V126.5ZM38 183.5C36.6193 183.5 35.5 182.381 35.5 181H20.5C20.5 190.665 28.335 198.5 38 198.5V183.5ZM162 198.5C171.665 198.5 179.5 190.665 179.5 181H164.5C164.5 182.381 163.381 183.5 162 183.5V198.5ZM99.8247 52.9397C99.8247 62.6047 107.66 70.4397 117.325 70.4397V55.4397C115.944 55.4397 114.825 54.3204 114.825 52.9397H99.8247ZM35.5 17C35.5 15.6193 36.6193 14.5 38 14.5V-0.5C28.335 -0.5 20.5 7.33501 20.5 17H35.5Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="199" height="199" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <div class="popup-mask" *ngIf="upload">
                <div class="popover attach">
                    <div class="head">
                        <h3>Attach File</h3>
                        <button class="close" (click)="closeAttachPopover()">&times;</button>
                    </div>
                    <div class="drag-drop" (dragenter)="dragenter($event)" (dragover)="dragover($event)"
                        (dragend)="dragend($event)" (dragleave)="dragleave($event)" (drop)="dropFiles($event)"
                        [class.enter]="enter">
                        <input type="file" id="browse" (change)="filesFromInput($event)" multiple>
                        <div class="container">
                            <span>Drop file here or browse to upload</span>
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
                                <p class="file-title">{{fileObj.file.name}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <button class="cancel" (click)="closeAttachPopover()">Cancel</button><button
                            (click)="saveFiles()" class="upload">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Image -->
        <div class="col" clickOutside (clickOutside)="clickOutsideImage()" *ngIf="editorConfig?.mode === 'prime' && false">
            <button (click)="uploadImage = true" [class.active]="uploadImage" [csTooltip]="'Add Image'"
                placement="bottom" delay="0" type="black" [tooltipMandatory]="true">

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
        <div class="col" *ngIf="moreOptionsButton" clickOutside (clickOutside)="clickOutsideMoreOptions()">
            <button (click)="showMoreOptions()" [class.active]="moreOptions">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                    viewBox="0 0 1024 1024">
                    <g id="icomoon-ignore"></g>
                    <path
                        d="M512 383.256q50.912 0 89.815 38.903t38.903 89.815-38.903 89.815-89.815 38.903-89.815-38.903-38.903-89.815 38.903-89.815 89.815-38.903zM895.282 383.256q50.912 0 89.815 38.903t38.903 89.815-38.903 89.815-89.815 38.903-89.815-38.903-38.903-89.815 38.903-89.815 89.815-38.903zM128.718 383.256q50.912 0 89.815 38.903t38.903 89.815-38.903 89.815-89.815 38.903-89.815-38.903-38.903-89.815 38.903-89.815 89.815-38.903z">
                    </path>
                </svg>
            </button>

            <div class="popover small" *ngIf="moreOptions">
                <ul class="option-list">
                    <!-- Quote -->
                    <li (click)="moreOptions = false;" data-id="quote">
                        <button data-id="quote" [class.active]="toolbarConfig?.quote">
                            <svg width="299" height="299" viewBox="0 0 299 299" fill="none"
                                xmlns="http://www.w3.org/2000/svg" data-id="quote">
                                <path data-id="quote"
                                    d="M0 169.4H64.0714L21.3568 299H85.4281L128.143 169.4V0H0V169.4Z" />
                                <path data-id="quote"
                                    d="M170.143 0V169.4H234.214L191.499 299H255.571L298.285 169.4V0H170.143Z" />
                            </svg>
                            <span data-id="quote">Quote</span>
                        </button>
                    </li>
                    <!-- Superscript -->
                    <li (click)="moreOptions = false;" data-id="superscript">
                        <button [class.active]="toolbarConfig?.superscript" data-id="superscript">
                            <svg width="200" height="174" viewBox="0 0 200 174" fill="none" data-id="superscript">
                                <path data-id="superscript"
                                    d="M85.9381 113.681L139.578 173.934H106.571L69.0088 129.867L32.2984 173.934H0L53.2083 113.681L2.562 56.8192H35.145L70.4356 98.0449L106.001 56.8192H137.163L85.9381 113.681ZM159.28 72.9393L181.389 56.6618C188.928 51.4813 193.881 46.6757 196.255 42.2405C198.627 37.8077 199.812 33.044 199.812 27.9395C199.812 19.6009 197.024 12.8704 191.456 7.74929C185.882 2.62529 178.555 0.0657349 169.477 0.0657349C160.724 0.0657349 153.723 2.65782 148.482 7.83793C143.229 13.0209 140.607 20.8317 140.607 31.2789H157.49C157.49 25.0457 158.596 20.7365 160.802 18.3465C163.008 15.9561 166.031 14.7607 169.882 14.7607C173.727 14.7607 176.765 15.9769 179.019 18.4055C181.264 20.8317 182.384 23.8491 182.384 27.4552C182.384 31.0553 181.346 34.313 179.259 37.2295C177.173 40.1461 171.376 45.0656 161.864 51.9883C153.726 57.939 142.714 63.5448 139.412 68.807L139.578 88.3617H200V72.9393H159.28Z" />

                            </svg>
                            <span data-id="superscript">Superscript</span>
                        </button>
                    </li>
                    <!-- Subscript -->
                    <li (click)="moreOptions = false;" data-id="subscript">
                        <button [class.active]="toolbarConfig?.subscript" data-id="subscript">
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none"
                                xmlns="http://www.w3.org/2000/svg" data-id="subscript">
                                <path data-id="subscript"
                                    d="M85.9381 68.8616L139.578 129.115H106.571L69.0088 85.048L32.2984 129.115H0L53.2083 68.8616L2.562 12H35.145L70.4356 53.2257L106.001 12H137.163L85.9381 68.8616ZM159.28 173.12L181.389 156.843C188.928 151.662 193.881 146.857 196.255 142.421C198.627 137.989 199.812 133.225 199.812 128.12C199.812 119.782 197.024 113.051 191.456 107.93C185.882 102.806 178.555 100.247 169.477 100.247C160.724 100.247 153.723 102.839 148.482 108.019C143.229 113.202 140.607 121.013 140.607 131.46H157.49C157.49 125.227 158.596 120.917 160.802 118.527C163.008 116.137 166.031 114.942 169.882 114.942C173.727 114.942 176.765 116.158 179.019 118.586C181.264 121.013 182.384 124.03 182.384 127.636C182.384 131.236 181.346 134.494 179.259 137.41C177.173 140.327 171.376 145.246 161.864 152.169C153.726 158.12 142.714 173.726 139.412 178.988L139.578 188.543H200V173.12H159.28Z" />
                            </svg>
                            <span data-id="subscript">Subscript</span>
                        </button>
                    </li>
                    <!-- Increase Indent -->
                    <li (click)="moreOptions = false;" data-id="increaseIndent">
                        <button data-id="increaseIndent">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                                data-id="increaseIndent" viewBox="0 0 1024 1024">
                                <g id="icomoon-ignore" data-id="increaseIndent">
                                </g>
                                <path data-id="increaseIndent"
                                    d="M27 778l0.2 0.2c6 2.6 12.4 4 18.8 4 11.4 0 22.2-4.2 30.4-11.8l255.8-223.8c10-8.6 15.8-21.2 15.8-34.6s-5.8-26-15.8-34.6l-256-224c-13.4-12-32.8-14.8-49.4-7.2-16.2 7.4-26.8 23.8-26.8 41.8v448c0 18 10.6 34.4 27 42zM92 634.8v-245.4c48.6 42.4 113.8 99.6 140.2 122.8l-140.2 122.6zM397.4 626h628v92h-628v-92zM397.4 306h628v92h-628v-92zM0-14h1024v92h-1024v-92zM0 946h1024v92h-1024v-92z">
                                </path>
                            </svg>
                            <span data-id="increaseIndent">Increase Indent</span>
                        </button>
                    </li>
                    <!-- Decrease Indent -->
                    <li (click)="moreOptions = false;" data-id="decreaseIndent">
                        <button data-id="decreaseIndent">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                                data-id="decreaseIndent" viewBox="0 0 1024 1024">
                                <g id="icomoon-ignore" data-id="decreaseIndent">
                                </g>
                                <path data-id="decreaseIndent"
                                    d="M1025.4 736v-448c0-18-10.6-34.4-26.8-41.8-16.6-7.6-36-4.8-49.4 7.2l-256 224c-10 8.6-15.8 21.2-15.8 34.6s5.8 26 15.8 34.6l255.8 223.8c8.2 7.6 19 11.8 30.4 11.8 6.4 0 12.8-1.4 18.8-4l0.2-0.2c16.4-7.6 27-24 27-42zM793.2 512.2c26.4-23.2 91.6-80.4 140.2-122.8v245.4l-140.2-122.6zM0 626h628v92h-628v-92zM0 306h628v92h-628v-92zM1.4-14h1024v92h-1024v-92zM1.4 946h1024v92h-1024v-92z">
                                </path>
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
                <button data-id="quote" [csTooltip]="'Quote'" placement="bottom" delay="0" type="black" [class.active]="toolbarConfig?.quote"
                    [tooltipMandatory]="true">
                    <svg width="299" height="299" viewBox="0 0 299 299" fill="none" xmlns="http://www.w3.org/2000/svg"
                        data-id="quote">
                        <path data-id="quote" d="M0 169.4H64.0714L21.3568 299H85.4281L128.143 169.4V0H0V169.4Z" />
                        <path data-id="quote"
                            d="M170.143 0V169.4H234.214L191.499 299H255.571L298.285 169.4V0H170.143Z" />
                    </svg>
                </button>
            </div>
            <!-- Superscript -->
            <div class="col" data-id="superscript">
                <button [class.active]="toolbarConfig?.superscript" data-id="superscript" [csTooltip]="'Superscript'"
                    placement="bottom" delay="0" type="black" [tooltipMandatory]="true">
                    <svg width="200" height="174" viewBox="0 0 200 174" fill="none" data-id="superscript">
                        <path data-id="superscript"
                            d="M85.9381 113.681L139.578 173.934H106.571L69.0088 129.867L32.2984 173.934H0L53.2083 113.681L2.562 56.8192H35.145L70.4356 98.0449L106.001 56.8192H137.163L85.9381 113.681ZM159.28 72.9393L181.389 56.6618C188.928 51.4813 193.881 46.6757 196.255 42.2405C198.627 37.8077 199.812 33.044 199.812 27.9395C199.812 19.6009 197.024 12.8704 191.456 7.74929C185.882 2.62529 178.555 0.0657349 169.477 0.0657349C160.724 0.0657349 153.723 2.65782 148.482 7.83793C143.229 13.0209 140.607 20.8317 140.607 31.2789H157.49C157.49 25.0457 158.596 20.7365 160.802 18.3465C163.008 15.9561 166.031 14.7607 169.882 14.7607C173.727 14.7607 176.765 15.9769 179.019 18.4055C181.264 20.8317 182.384 23.8491 182.384 27.4552C182.384 31.0553 181.346 34.313 179.259 37.2295C177.173 40.1461 171.376 45.0656 161.864 51.9883C153.726 57.939 142.714 63.5448 139.412 68.807L139.578 88.3617H200V72.9393H159.28Z" />
                    </svg>
                </button>
            </div>
            <!-- Subscript -->
            <div class="col" data-id="subscript">
                <button [class.active]="toolbarConfig?.subscript" data-id="subscript" [csTooltip]="'Subscript'"
                    placement="bottom" delay="0" type="black" [tooltipMandatory]="true">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
                        data-id="subscript">
                        <path data-id="subscript"
                            d="M85.9381 68.8616L139.578 129.115H106.571L69.0088 85.048L32.2984 129.115H0L53.2083 68.8616L2.562 12H35.145L70.4356 53.2257L106.001 12H137.163L85.9381 68.8616ZM159.28 173.12L181.389 156.843C188.928 151.662 193.881 146.857 196.255 142.421C198.627 137.989 199.812 133.225 199.812 128.12C199.812 119.782 197.024 113.051 191.456 107.93C185.882 102.806 178.555 100.247 169.477 100.247C160.724 100.247 153.723 102.839 148.482 108.019C143.229 113.202 140.607 121.013 140.607 131.46H157.49C157.49 125.227 158.596 120.917 160.802 118.527C163.008 116.137 166.031 114.942 169.882 114.942C173.727 114.942 176.765 116.158 179.019 118.586C181.264 121.013 182.384 124.03 182.384 127.636C182.384 131.236 181.346 134.494 179.259 137.41C177.173 140.327 171.376 145.246 161.864 152.169C153.726 158.12 142.714 173.726 139.412 178.988L139.578 188.543H200V173.12H159.28Z" />
                    </svg>
                </button>
            </div>
            <!-- Increase Indent -->
            <div class="col" data-id="increaseIndent">
                <button [csTooltip]="'Increase indent'" placement="bottom" delay="0" type="black"
                    [tooltipMandatory]="true" data-id="increaseIndent">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                        data-id="increaseIndent" viewBox="0 0 1024 1024">
                        <g id="icomoon-ignore" data-id="increaseIndent">
                        </g>
                        <path data-id="increaseIndent"
                            d="M27 778l0.2 0.2c6 2.6 12.4 4 18.8 4 11.4 0 22.2-4.2 30.4-11.8l255.8-223.8c10-8.6 15.8-21.2 15.8-34.6s-5.8-26-15.8-34.6l-256-224c-13.4-12-32.8-14.8-49.4-7.2-16.2 7.4-26.8 23.8-26.8 41.8v448c0 18 10.6 34.4 27 42zM92 634.8v-245.4c48.6 42.4 113.8 99.6 140.2 122.8l-140.2 122.6zM397.4 626h628v92h-628v-92zM397.4 306h628v92h-628v-92zM0-14h1024v92h-1024v-92zM0 946h1024v92h-1024v-92z">
                        </path>
                    </svg>
                </button>
            </div>
            <!-- Decrease Indent -->
            <div class="col" data-id="decreaseIndent">
                <button [csTooltip]="'Decrease indent'" placement="bottom" delay="0" type="black"
                    [tooltipMandatory]="true" data-id="decreaseIndent">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
                        data-id="decreaseIndent" viewBox="0 0 1024 1024">
                        <g id="icomoon-ignore" data-id="decreaseIndent">
                        </g>
                        <path data-id="decreaseIndent"
                            d="M1025.4 736v-448c0-18-10.6-34.4-26.8-41.8-16.6-7.6-36-4.8-49.4 7.2l-256 224c-10 8.6-15.8 21.2-15.8 34.6s5.8 26 15.8 34.6l255.8 223.8c8.2 7.6 19 11.8 30.4 11.8 6.4 0 12.8-1.4 18.8-4l0.2-0.2c16.4-7.6 27-24 27-42zM793.2 512.2c26.4-23.2 91.6-80.4 140.2-122.8v245.4l-140.2-122.6zM0 626h628v92h-628v-92zM0 306h628v92h-628v-92zM1.4-14h1024v92h-1024v-92zM1.4 946h1024v92h-1024v-92z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="right">
        <!-- @ -->
        <div class="col" data-id="@" *ngIf="editorConfig?.mentionedNames?.length > 0">
            <button data-id="@">
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;" xml:space="preserve" data-id="@">
                    <g>
                        <g>
                            <path data-id="@"
                                d="M226.735,1.636C111.259,14.518,17.472,106.202,2.285,221.396c-21.518,163.24,111.938,302.116,273.589,289.849
			c59.464-4.513,115.124-31.086,158.736-71.759l3.746-3.492c4.309-4.018,4.544-10.768,0.526-15.076l-14.555-15.607
			c-4.018-4.309-10.767-4.544-15.076-0.526l-7.803,7.277c-48.51,45.232-115.104,65.582-182.284,54.141
			c-95.215-16.216-168.411-97.052-175.846-193.352C33.487,145.508,136.207,39.093,262.324,42.758
			c116.288,3.381,207.009,102.616,207.009,218.953v15.622c0,24.934-21.486,44.932-46.921,42.46
			C400.246,317.637,384,297.714,384,275.442v-94.108c0-5.892-4.776-10.667-10.667-10.667H352c-4.283,0-7.921,2.56-9.618,6.203
			c-21.465-23.413-52.19-38.203-86.382-38.203c-64.698,0-117.333,52.635-117.333,117.333S191.302,373.334,256,373.334
			c40.755,0,76.691-20.909,97.732-52.54c15.842,26.475,45.276,43.922,78.78,41.677c45.303-3.035,79.488-42.746,79.488-88.15V256
			C512,105.202,380.931-15.566,226.735,1.636z M256,330.667c-41.167,0-74.667-33.5-74.667-74.667
			c0-41.167,33.5-74.667,74.667-74.667c41.167,0,74.667,33.5,74.667,74.667C330.667,297.167,297.167,330.667,256,330.667z" />
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <!-- # -->
        <div class="col" data-id="#" *ngIf="editorConfig?.mentionedDates?.length > 0">
            <button data-id="#">
                <svg height="469pt" viewBox="0 -21 469.33333 469" width="469pt" data-id="#">
                    <path data-id="#"
                        d="m448 106.839844h-64.8125l21.398438-79.808594c3.050781-11.371094-3.691407-23.082031-15.082032-26.132812-11.390625-3.050782-23.105468 3.710937-26.132812 15.082031l-24.339844 90.859375h-151.511719l21.398438-79.808594c3.050781-11.371094-3.691407-23.082031-15.082031-26.132812-11.394532-3.027344-23.082032 3.710937-26.113282 15.082031l-24.363281 90.859375h-79.359375c-11.777344 0-21.332031 9.535156-21.332031 21.332031 0 11.800781 9.554687 21.335937 21.332031 21.335937h67.902344l-34.324219 128h-76.246094c-11.773437 0-21.332031 9.535157-21.332031 21.332032s9.558594 21.332031 21.332031 21.332031h64.8125l-21.398437 79.808594c-3.050782 11.371093 3.691406 23.082031 15.082031 26.132812 1.835937.492188 3.691406.726563 5.503906.726563 9.410157 0 18.050781-6.273438 20.589844-15.808594l24.382813-90.859375h151.507812l-21.398438 79.808594c-3.046874 11.371093 3.691407 23.082031 15.085938 26.132812 1.832031.492188 3.6875.726563 5.523438.726563 9.410156 0 18.046874-6.273438 20.585937-15.808594l24.363281-90.859375h79.359375c11.777344 0 21.335938-9.535156 21.335938-21.332031s-9.558594-21.332032-21.335938-21.332032h-67.902343l34.324218-128h76.246094c11.777344 0 21.332031-9.535156 21.332031-21.335937 0-11.796875-9.554687-21.332031-21.332031-21.332031zm-154.753906 170.667968h-151.507813l34.324219-128h151.511719zm0 0" />
                </svg>
            </button>
        </div>
        <!-- Button Name -->
        <div class="col" *ngIf="editorConfig?.buttonName">
            <button class="submit" data-id="submit" [class.disabled]="editorConfig?.disabledButton">{{editorConfig?.buttonName}}</button>
        </div>
    </div>
</div>`

export default template;