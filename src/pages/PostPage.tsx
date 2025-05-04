import { useParams } from 'react-router'
import { PostDetail } from '../components/PostDetail'

export const PostPage = () => {
	const { id } = useParams<{ id: string }>()

	return (
		<div className='pt-10'>
			<h2 className='text-6xl font-bold mb-6 text-center bg-gradient-to-r from-lime-500 to-pink-500 bg-clip-text text-transparent'>
				Recent Posts
			</h2>
			<div>
				<PostDetail postId={Number(id)} />
			</div>
		</div>
	)
}
