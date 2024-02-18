import logo from '@assets/img/logo.svg'
import Image from 'next/image'
import { Checkbox } from './Checkbox'

export const Logo = ({ type = 'desktop' }: { type?: 'desktop' | 'mobile' }) => {
    if (type === 'desktop') {
        return <Image style={{ objectFit: 'contain' }} src={logo} alt='Прагмат' />
    }

    if (type === 'mobile') {
        return <Checkbox />
    }
}