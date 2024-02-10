import styles from './Avatar.module.css'

interface avatarProps {
  src: string
  hasBorder?: boolean
}

export function Avatar({hasBorder = true, src}: avatarProps) {
  return (
    <img 
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}