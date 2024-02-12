// Componentes e estilos
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

// Bibliotecas
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { FormEvent, ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

// Types
interface Author {
  avatar: string
  name: string
  office: string
}

interface Content {
  id: string;
  type: "paragraph" | "link"
  content: string;
}

export interface PostType {
  id: string
  author: Author
  publishedAt: Date
  content: Content[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {

  // Data formatada na nossa localidade
  const publishedDateFormated = format(post.publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR
  })

  // Calcula a distância da data da publicação
  const publishedDistanceSoFar = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  // 3 - Estado para captura e armazenar o valor da 'textarea'
  const [newCommentText, setNewCommentText] = useState("")

  // 2 - Função para monitorar e capturar o valor e alterações
  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event?.target.value)
  }

  // 2 - Estado para a caixa de comentários
  const [comment, setComment] = useState(["Post da horaa 🥳"])

  // 5 - Função passada para o <form/>
  function handleCreateNewComment(event: FormEvent) {
    event?.preventDefault()

    // Atualiza o estado da commentBox
    setComment([...comment, newCommentText])
    setNewCommentText('')
  }

  // Função para deletar o comentário
  function deleteComment(commentToDelete: string) {
    // Imutabilidade
    const commentWithoutDeleteOne = comment.filter(comment => {
      return comment !== commentToDelete
    })

    setComment(commentWithoutDeleteOne)
  }

  // Verifica se há conteúco na textarea
  const isNewCommentTextEmpity = newCommentText.length === 0

  return (
    <article className={styles.post}>

      {/* Cabeçalho */}
      <header>
        {/* Informações do autor */}
        <div className={styles.author}>
          <Avatar
            src={post.author.avatar}
          />
          <div className={styles.profile}>
            <strong>{post.author.name}</strong>
            <span>{post.author.office}</span>
          </div>
        </div>

        {/* Data da publicação */}
        <time
          title={publishedDateFormated}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDistanceSoFar}
        </time>
      </header>

      {/* Conteúdo do post */}
      <div className={styles.content}>
        {/* Verifica a etiqueta que demos para cada tipo de dado */}
        {post.content.map(line => {

          if (line.type === 'paragraph') {
            return <p key={line.id}>{line.content}</p>
          }

          else if (line.type === 'link') {
            return <p key={line.id}><a href="#">{line.content}</a></p>
          }
        })}

        <section className={styles.links}>
          <p><a href="#">#novoprojeto</a></p>
          <p><a href="#">#nlw</a></p>
          <p><a href="#">#rocketseat</a></p>
        </section>
      </div>

      {/* Formulário de coméntarios */}
      <form
        onSubmit={handleCreateNewComment} // 4 - Dispara a função
        id='comentário'
        className={styles.commentForm}
      >
        <label>Deixe seu feedback</label>
        <textarea
          name='comment'
          value={newCommentText}
          onChange={handleNewCommentText} // 1 - Executa a função
          placeholder='Escreva um comentário...'
        />
        <button
          type='submit'
          form='comentário'
          disabled={isNewCommentTextEmpity}
        >Publicar</button>

      </form>

      {comment.map(comment => {
        return (
          <Comment
            key={uuidv4()}
            content={comment}
            onDeleteComment={deleteComment}
          />
        )
      })}
    </article>
  )
}