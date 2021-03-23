const fileTemplate = `<div class="popup-container">
    <div class="head">
        <h3>Attach Files</h3>
        <button class="close" (click)="close()" type="button">&times;</button>
    </div>
    <div class="body">
        <div class="drag-drop" (dragenter)="dragenter($event)" (dragover)="dragover($event)" (dragend)="dragend($event)"
            (dragleave)="dragleave($event)" (drop)="dropFiles($event)" [class.enter]="enter">
            <input type="file" id="browse" (change)="filesFromInput($event)" multiple>
            <div class="container">
                <span>Drop files here or browse to upload</span>
                <label for="browse">Browse</label>
            </div>
        </div>
        <div class="file-row">
            <div class="file-col" *ngFor="let fileObj of filesArray; let i = index">
                <button (click)="removeFile(i)" type="button">
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
                    <p class="file-title" [csTooltip]="fileObj.file.name" placement="bottom" delay="0" type="black"
                        [tooltipMandatory]="true">{{fileObj.file.name}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <button class="cancel" (click)="close()" type="button">Cancel</button>
        <button (click)="save()" class="upload" type="button" [class.disabled]="filesArray.length === 0">Save</button>
    </div>
</div>`

export default fileTemplate;