export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    submenu?:boolean;
    children?: NavItem[];
  }
