import { useDispatch, useSelector } from 'react-redux'
import { SocialLayout } from '../layouts/SocialLayout'
import { useEffect } from 'react'
import { fetchPosts } from '../../redux/thunks/socialThunk'
import { PostCard } from '../components/PostCard'
import style from '../styles/PostPage.module.css'
import { TagsBar } from '../components/TagsBar'

export const PostsPage = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.social)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <SocialLayout>
      <section className={style.containerTagsBar}>
        <TagsBar />
      </section>
      <div className={style.containerPosts}>
        {posts.map((post) => (
          <PostCard 
            key={post.id}
            profile={post.owner.picture}
            firstName={post.owner.firstName}
            lastName={post.owner.lastName}
            prefix={post.owner.title}
            image={post.image}
            text={post.text}
            publishDate={post.publishDate}
            tags={post.tags}
            likes={post.likes}
          />
        ))}
      </div>
    </SocialLayout>
  )
}
