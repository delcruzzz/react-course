import { useDispatch, useSelector } from 'react-redux'
import style from '../styles/TagsBar.module.css'
import { useEffect, useMemo } from 'react'
import { fetchTags } from '../../redux/thunks/socialThunk'

export const TagsBar = () => {
  const dispatch = useDispatch()
  const { tags } = useSelector((state) => state.social)

  useEffect(() => {
    dispatch(fetchTags())
  }, [dispatch])

  const filterdTags = useMemo(() => {
    const firstFilter = 
      tags.filter((tag) => tag !== null && tag.trim() !== '')
    const secondFilter = 
      firstFilter.map((tag) => tag.length > 10 ? tag.substring(0, 7) + '...' : tag)
    const thirdFilter = secondFilter.filter((tag) => tag.match(new RegExp('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')))
    
    return thirdFilter
  }, [tags])

  return (
    <div className={style.tagsBar}>
      {filterdTags.map((tag, i) => (
        <button key={i}>{`${tag}`}</button>
      ))}
    </div>
  )
}
