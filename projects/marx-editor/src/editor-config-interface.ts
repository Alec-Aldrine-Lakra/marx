export interface EditorConfig {
    file?: boolean;
    id?: string;
    mode?: 'basic' | 'prime';
    mentionedNames?: MentionedName[];
    mentionedDates?: string[];
    colorPalette?: boolean;
    toolbarPlacement?: 'top' | 'bottom';
    placeholder?: string;
    buttonName?: string;
    disabledButton?: boolean;
    isCollapsible?: boolean;
    link?: boolean;
    urlValue?: string;
    urlText?: string;
    urlTitle?: string;
    configFontStyle?: boolean;
    validUrlMessage?: string;
    urlPlaceHolder?: string;
    textPlaceHolder?: string;
    titlePlaceholder?: string;
    maxHeight?: string;
    zIndex?: number;
}

export interface MentionedName {
    id: number;
    name: string;
}

export interface ToolbarConfig {
    bold?: boolean;
    italic?: boolean;
    strikeThrough?: boolean;
    underline?: boolean;
    orderedList?: boolean;
    unorderedList?: boolean;
    superscript?: boolean;
    subscript?: boolean;
    quote?: boolean;
    fontStyle?: string,
    fontColor: string;
    backgroundColor: string;
}

