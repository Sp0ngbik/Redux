import { useDispatch, useSelector } from "react-redux";
import { asyncPosts } from "../actions/actions";
import Loader from "../reducer/Loader";

const AxiosPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.axiosRequest;
  });
  const loading = useSelector((state) => {
    return state.appReducer.isLoaded;
  });

  if (!posts.length) {
    return (
      <button
        onClick={() => {
          dispatch(asyncPosts());
        }}
      >
        Загрузить
      </button>
    );
  } else if (loading) {
    return <Loader />;
  } else {
    return posts.map((post) => <div key={post.id}> Title - {post.title}</div>);
  }
};

export default AxiosPost;
