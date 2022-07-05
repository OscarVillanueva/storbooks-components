import { jsx as _jsx } from "react/jsx-runtime";
import '../styles/label.css';
const Label = ({ allCaps, color = 'primary', size = 'normal', title = 'Hello World!', fontColor, backgroundColor = 'transparent' }) => (_jsx("span", { className: `label text-${color} ${size} `, style: { color: fontColor, backgroundColor }, children: allCaps ? title.toUpperCase() : title }));
export default Label;
