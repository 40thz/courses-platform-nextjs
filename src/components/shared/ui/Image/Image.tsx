import React from 'react'
import NextImage from 'next/image'


export const Image = ({ src, withUrl = true, ...props }: any) => {
    const API_URL = process.env.API_URL

    if (withUrl) {
        return (
            <NextImage src={src} {...props} />
        )
    }

    return <NextImage src={src} {...props} />
}

