import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    icon: string;
    role: string;
}

const MENUITEMS = [
    {state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: ''},
    {state: 'category', name: 'Menage Category', icon: 'category', role: 'admin'},
    {state: 'product', name: 'Menage Product', icon: 'inventory_2', role: 'admin'},
    {state: 'order', name: 'Menage Order', icon: 'list_alt', role: ''},
    {state: 'bill', name: 'View Bill', icon: 'import_contacts', role: ''},
    {state: 'user', name: 'View User', icon: 'people', role: 'admin'},
]

@Injectable()
export class MenuItems{
    getMenuItems(): Menu[] {
        return MENUITEMS
    }
}