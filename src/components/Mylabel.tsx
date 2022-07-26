import "./mylabel.css"

interface MyLabelProps {
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
    color: "primary" | "secondary" | "tertiary"

    /**
     * Custom Color.
     */ 
    fontColor?: string;
    optional?: string;
}

export const MyLabel = ({ title = "", size = "normal", allCaps = false, color = "primary", optional, fontColor }: MyLabelProps) => {

    return (
        <span 
            style={{
                color: fontColor,
            }}
            className={`label ${size} ${color}`}>
            { allCaps ? title.toUpperCase() :title}
            { optional && <div className="optional">{optional}</div> }
        </span>
    )
}