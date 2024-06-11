/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from 'react';
export interface MouseClickEvent {
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
}
export type MouseClickEventHandler = (event: MouseClickEvent) => void;
export interface KeyboardClickEvent {
    enterKey: boolean;
    spaceKey: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
}
export type KeyboardClickEventHandler = (event: KeyboardClickEvent) => void;
export interface ClickableWrapperProps {
    wrapperTag: any;
    passthroughProps?: any;
    onSingleClick?: MouseClickEventHandler;
    onDoubleClick?: MouseClickEventHandler;
    onKeyboardClick?: KeyboardClickEventHandler;
    setFocused?: (focused: boolean) => void;
    children?: React.ReactNode;
}
export declare const ClickableWrapper: React.FC<ClickableWrapperProps>;
