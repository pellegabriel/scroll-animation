interface Props {
    children: JSX.Element | JSX.Element[];
    title: string;
}

 const ItemCustom = ({ children, title }: Props) => {
    return (
        <div className="Item-opt">
            <h4 className="title-opt">{title}</h4>
            <div className="container-inputs">
                {children}
            </div>
        </div>
    )
}
export default ItemCustom