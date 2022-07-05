/// <reference types="react" />
import '../styles/label.css';
export interface LabelProps {
    /**
     * A label to show on the button
     */
    title: string;
    /**
     * An icon to show on the left of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Color of the text
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Text transformation
     */
    allCaps?: boolean;
    /**
     * Custom Font text
     */
    fontColor?: string;
    /**
     * Background color
     */
    backgroundColor?: string;
}
declare const Label: ({ allCaps, color, size, title, fontColor, backgroundColor }: LabelProps) => JSX.Element;
export default Label;
