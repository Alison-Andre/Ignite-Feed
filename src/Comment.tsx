import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps) {
  // Função para deletar o comentário
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  // Estado para os likes
  const [likesCount, setLikesCount] = useState(0)

  // Função para atualizar os likes
  function handleLikesComment() {
    setLikesCount((state) => {return state + 1}) // Resolvendo as closures
  }
  
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      />

      {/* Comment Box */}
      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniel <span>(você)</span></strong>
              <time dateTime='24/01/2024'>Há cerca de 2h</time>
            </div>
            <button onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikesComment}>
            <ThumbsUp />
            Aplaudir
            <span>{likesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}