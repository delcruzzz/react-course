import { useMemo } from 'react'
import style from '../styles/PostCard.module.css'
import { LikeIcon } from './../icons/Like'

export const PostCard = ({ profile, firstName, lastName, prefix, image, text, publishDate, tags, likes }) => {
  const formatDate = useMemo(() => {
    const date = new Date(publishDate)
    return date.toUTCString()
  }, [publishDate])

  return (
    <article className={style.cardPost}>
      <header className={style.headerPost}>
        <img src={`${profile}`} alt={`${firstName}`} />
        <div>   
          <p>
            {`${firstName} ${lastName}`}
          </p>
          <small>prefijo: {`${prefix}`}</small>
        </div>
      </header>
      <main className={style.mainPost}>
        <section>
          <img src={`${image}`} alt={`${text}`} width={240} />
        </section>
        <section>
          <p>{`${text}`}</p>
          <small>{`${formatDate}`}</small>
          <div className={style.tagsBox}>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
          <div className={style.likesBox}>
              <LikeIcon />
              <span>{`${likes}`}</span>
          </div>
        </section>
      </main>
      <footer></footer>
    </article>
  )
}
