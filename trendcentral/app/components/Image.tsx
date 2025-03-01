
interface ImageProps {
    src: string;
    alt: string;
    style?: React.CSSProperties;
}

const Image = ({ src, alt, style }: ImageProps) => {

    const defaultStyle: React.CSSProperties = {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
    };
    const mergedStyle = { ...defaultStyle, ...style };
    return (
        <div>
            <img src={src} alt={alt} style={mergedStyle}/>
        </div>
    )
};

export default Image;