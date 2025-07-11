import React from 'react'
import { Image } from "@nextui-org/react";

type PropType = {
    selected: boolean
    index: number
    onClick: () => void
    imageUrl?: string
}

export const Thumb: React.FC<PropType> = (props) => {
    const { selected, index, onClick, imageUrl } = props

    return (
        <div
            className={'embla-tpc-thumbs__slide'.concat(
                selected ? ' embla-tpc-thumbs__slide--selected' : ''
            )}
        >
            <button
                onClick={onClick}
                type="button"
                className="embla-tpc-thumbs__slide__number"
            >
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={`Thumbnail ${index + 1}`}
                        className="embla-tpc-thumbs__slide__img"
                        fallbackSrc="/assets/frasco-vigo.png"
                    />
                ) : (
                    index + 1
                )}
            </button>
        </div>
    )
}
