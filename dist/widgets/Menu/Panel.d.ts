import React from "react";
import { NavProps, PanelProps, PushedProps } from "./types";
interface Props extends PanelProps, PushedProps, NavProps {
    showMenu: boolean;
    isMobile: boolean;
}
declare const Panel: React.FC<Props>;
export default Panel;
