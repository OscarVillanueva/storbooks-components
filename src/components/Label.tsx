
import '../styles/label.css'

export interface LabelProps {
  /**
   * A label to show on the button
   */
  title: string;

  /**
   * An icon to show on the left of the label
   */
  size ?: 'normal' | 'h1' | 'h2' | 'h3' ;

  /**
   * Color of the text
   */
  color ?: 'primary' | 'secondary' | 'tertiary'

  /**
   * Text transformation
   */
  allCaps ?: boolean,

  /**
   * Custom Font text
   */
  fontColor ?: string
}

const Label = ({ 
    allCaps, color = 'primary', size = 'normal', title = 'Hello World!', fontColor
  }: LabelProps) => (
  <span 
    className={`label text-${color} ${size} `}
    style = {fontColor ? { color: fontColor } : {}}
  >
    { allCaps ? title.toUpperCase() : title }
  </span>
);

export default Label;