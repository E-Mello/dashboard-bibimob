import Image from 'next/image';
import React from 'react';
import type { StaticImageData } from 'next/image';

interface AvatarProps {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, width, height }) => {
    return (
        <div className="relative w-[fit-content] h-[fit-content]">
            <div className="relative rounded-full overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    layout="responsive"
                />
            </div>
        </div>
    );
};

export default Avatar;
