interface JQuery {
    fadeIn(): JQuery;
    fadeOut(): JQuery;
    focus(): JQuery;
    html(): string;
    html(val: string): JQuery;
    show(): JQuery;
    addClass(className: string): JQuery;
    removeClass(className: string): JQuery;
    append(el: HTMLElement): JQuery;
    val(): string;
    val(value: string): JQuery;
    attr(attrName: string): string;
}

export {JQuery};

declare const $: {
    (el: HTMLElement): JQuery;
    (selector: string): JQuery;
    (readyCallback: () => void ): JQuery;
};

export{$};

//export const a = 100;
