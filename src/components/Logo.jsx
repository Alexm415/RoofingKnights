import { Link } from 'react-router-dom'
import { siteConfig } from '../siteConfig.js'

export function Logo({ to = '/', size = 'md', className = '' }) {
  const logo = siteConfig.brand.logo
  const sizes = {
    sm: { w: 44, sizes: '44px' },
    md: { w: 56, sizes: '56px' },
    lg: { w: 180, sizes: '(max-width: 600px) 160px, 180px' },
    xl: { w: 280, sizes: '(max-width: 600px) 200px, 280px' },
  }
  const s = sizes[size] || sizes.md
  const img = (
    <picture>
      <source
        type="image/webp"
        srcSet={`${logo.webp256} 256w, ${logo.webp512} 512w, ${logo.webp} 1024w`}
        sizes={s.sizes}
      />
      <img
        src={logo.png256}
        alt={logo.alt}
        width={s.w}
        height={s.w}
        className={`brand-logo ${className}`.trim()}
        decoding="async"
      />
    </picture>
  )
  if (to) {
    return (
      <Link to={to} className="brand-link">
        {img}
        <span className="visually-hidden">{siteConfig.brand.name}</span>
      </Link>
    )
  }
  return img
}
