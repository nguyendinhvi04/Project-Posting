import {Outlet} from 'react-router-dom';
import PostsList from '../components/PostList/PostList.jsx';
function Posts() {
  return (
    <>
          <Outlet/>
      <main>
        <PostsList/>
      </main>
    </>
  );
}

export default Posts;
