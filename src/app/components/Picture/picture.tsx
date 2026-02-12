interface PictureProps {
    src: string;
    format: 'svg' | 'png' | 'jpg';
    className?: string;
    dataArrt?: string | null;
    imgProps?: React.ImgHTMLAttributes<HTMLImageElement>
}
export default function Picture({src, format, dataArrt, className}: PictureProps) {
    const isRaster = format === 'jpg' || format === 'png';

    return (
        <picture>
            {src !== '' && isRaster && (
                <source srcSet={`${src}.webp`} type="image/webp"/>
            )}
            <img
                className={className}
                draggable={false}
                src={src !== '' ? `${src}.${format}` : ''}
                alt=""
            >
        </picture>
);
}