import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'
import { PencilSimple } from 'phosphor-react'

export function Sidebar() {
  return (

    // Main Container
    <aside className={styles.sidebar}>
      <img
        src="https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Capa de perfil do usuário"
        className={styles.cover}
      />

      {/*Author Container */}
      <div className={styles.author}>
        <Avatar
          src="https://images.pexels.com/photos/19855074/pexels-photo-19855074/free-photo-of-lindo-bonito-atraente-elegante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=14"
        />

        <div>
          <strong>Natacha</strong>
          <p>UI Disigner</p>
        </div>
      </div>

      <footer>
        <a
          href="#"
          className={styles.editProfile}
        >
          <PencilSimple />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}