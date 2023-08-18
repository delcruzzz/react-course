import { apiAxios } from '../../api/apiAxios'
import { setLoading, setPosts, setTags } from '../slices/socialSlice'

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(setLoading(true))

    try {
      const response = await apiAxios.get('post')
      const {data: posts} = response.data
      dispatch(setPosts(posts))
      return response
    } catch (error) {
      return {
        ok: false,
        error
      }
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export const fetchTags = () => {
  return async (dispatch) => {
    dispatch(setLoading(true))

    try {
      const response = await apiAxios.get('tag')
      const {data: tags} = response.data
      dispatch(setTags(tags))
      return response
    } catch (error) {
      return {
        ok: false,
        error
      }
    } finally {
      dispatch(setLoading(false))
    }
  }
}
