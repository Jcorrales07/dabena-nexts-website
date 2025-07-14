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
        className="h-[150px] w-full flex items-center justify-center overflow-hidden border-4 border-lime-950"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Thumbnail ${index + 1}`}
            className="h-[100px] w-auto object-cover"
            fallbackSrc="/assets/botella-fallback-bgl.png"
            loading="eager"
          />
        ) : (
          index + 1
        )}
      </button>
    </div>
  )
}
