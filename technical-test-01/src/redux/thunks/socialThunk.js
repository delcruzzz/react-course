import { apiAxios } from '../../api/apiAxios'
import { setLoading, setPosts } from '../slices/socialSlice'

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
