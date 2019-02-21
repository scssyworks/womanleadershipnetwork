import { SHOW_MAIN_MENU, HIDE_MAIN_MENU } from '../constants';

export function showMenu() {
    return {
        type: SHOW_MAIN_MENU
    };
}

export function hideMenu() {
    return {
        type: HIDE_MAIN_MENU
    };
}