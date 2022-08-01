/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * The text to display in the label.
     */
    title: string;
    /**
     * The color of the label.
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * If true, the label will be displayed in all caps.
     */
    allCaps?: boolean;
    /**
     * The color of the label.
     */
    color: "primary" | "secondary" | "tertiary";
    /**
     * Custom Color.
     */
    fontColor?: string;
    optional?: string;
}
export declare const MyLabel: ({ title, size, allCaps, color, optional, fontColor }: MyLabelProps) => JSX.Element;
