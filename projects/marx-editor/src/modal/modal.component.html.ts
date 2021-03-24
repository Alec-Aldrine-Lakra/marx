const template = `<div class="popup-modal" [style.zIndex]="zIndexValue">
    <div class="popup-modal-body">
        <ng-content></ng-content>
    </div>
</div>
<div class="popup-modal-background" [style.zIndex]="zIndexValue - 1"></div>`

export default template;