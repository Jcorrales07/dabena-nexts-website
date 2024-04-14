import React from 'react'

type PropType = {
    selected: boolean
    index: number
    onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
    const { selected, index, onClick } = props

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
                {index + 1}
            </button>
        </div>
    )
}
