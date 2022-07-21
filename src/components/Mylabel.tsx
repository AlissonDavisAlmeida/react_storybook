import "./mylabel.css"

interface MyLabelProps{
    title: string;
    secondary?: boolean;
}

export const MyLabel = ({title="label", secondary=false}:MyLabelProps) => {

    return (
        <span>
            Hello World
        </span>
    )
}