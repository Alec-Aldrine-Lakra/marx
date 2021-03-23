const linkTemplate = `<div class="popup-container">
    <div class="head">
        <h3>Insert Link</h3>
        <button class="close" (click)="close();" type="button">&times;</button>
    </div>
    <div class="body">
        <div class="link">
            <label>{{editorConfig?.urlValue ? editorConfig?.urlValue : 'URL'}}</label>
            <input [(ngModel)]="linkUrl" type="text" placeholder="{{editorConfig?.urlInputPlaceHolder ? editorConfig?.urlInputPlaceHolder : 'Enter a URL (Example: https://example.com)'}}">
            <p class="error" *ngIf="invalid">{{editorConfig?.validUrlMesssage ? editorConfig?.validUrlMesssage : 'Please provide a valid URL.'}}</p>
        </div>

        <div class="link">
            <label>{{editorConfig?.urlText ? editorConfig?.urlText : 'Display Text'}}</label>
            <input [(ngModel)]="linkText" type="text" placeholder="{{editorConfig?.textInputPlaceHolder ? editorConfig?.textInputPlaceHolder : 'Enter a display text'}}">
        </div>
        <div class="link">
            <label>{{editorConfig?.urlTitle ? editorConfig?.urlTitle : 'Title'}}</label>
            <input [(ngModel)]="linkTitle" type="text" placeholder="{{editorConfig?.titlePlaceholder? editorConfig?.titlePlaceholder: 'Enter a title'}}">
        </div>
    </div>
    <div class="footer">
        <button class="cancel" (click)="close();" type="button">Cancel</button>
        <button type="button" (click)="save()" class="upload">Save</button>
    </div>
</div>`;

export default linkTemplate;