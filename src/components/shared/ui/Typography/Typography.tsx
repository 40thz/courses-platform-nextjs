import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

type TypographyProps = {
    children?: React.ReactNode
    component: string
    type: 'headlines' | 'body' | 'all'
    variant: 'mega' | 'big' | 'medium' | 'small' | 'btn' | 'header'
    color?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Typography = ({className, color, type, variant, children, component, ...props}: TypographyProps) => {
    const styles = {
        [className as string]: className ? true : false,
        [`color-${color}`]: color,
        [type]: true,
        [variant]: true,
    }

    switch (component) {
        case 'h1':
            return <h1 {...props} className={cn('typography', { ...styles })}>{children}</h1>
        case 'h2':
            return <h2 {...props} className={cn('typography', { ...styles })}>{children}</h2>
        case 'h3':
            return <h3 {...props} className={cn('typography', { ...styles })}>{children}</h3>
        case 'p':
            return <p {...props} className={cn('typography', { ...styles })}>{children}</p>
        case 'span':
            return <span {...props} className={cn('typography', { ...styles })}>{children}</span>
        case 'div':
            return <div {...props} className={cn('typography', { ...styles })}>{children}</div>
    }
}