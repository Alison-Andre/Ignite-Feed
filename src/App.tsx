// Componentes
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Post, PostType } from './Post'
import { v4 as uuidv4 } from 'uuid';

// Dados do back-end
const user:PostType[] = [
  // Objeto 01
  {
    id: uuidv4(), // ID do usuárip

    author: { // Objeto autor com sua propriedades
      avatar: 'https://images.pexels.com/photos/19855074/pexels-photo-19855074/free-photo-of-lindo-bonito-atraente-elegante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=14',
      name: 'Natacha',
      office: 'UI Designer'
    },

    content: [ // Array com o conteúdo do post
      { id: uuidv4(), type: 'paragraph', content: 'Fala galeraa 👋' },
      { id: uuidv4(), type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: uuidv4(), type: 'link', content: 'jane.design/doctorcare' }
    ],

    // Data da publicação
    publishedAt: new Date("2024-01-28 09:18:00")
  },
]

// Estilos
import './Global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {user.map(post => {
            return (
              <Post
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
