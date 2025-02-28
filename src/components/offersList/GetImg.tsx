interface IDataProps {
    src: string
    alt: string
}

function GetImg(props: IDataProps) {
    const { src, alt } = props;
    return (
        <img src={ src } alt={ alt } />
    )
}

export default GetImg;