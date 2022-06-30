import {useSelector } from "react-redux";
import { selectedAllPosts } from "../store/slices/post";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const posts=useSelector(selectedAllPosts);
  const ordenerPost=posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
  return (
    <section>
      <h2>Posts</h2>
      {ordenerPost?.map((post) => (
        <article key={post.id}>
          <h3> {post.title} </h3>
          <p> {post.content.substring(0, 100)} </p>
          <p className="postCredit">
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date}/>
          </p>
            <ReactionButtons post={post} />
        </article>
      ))}
    </section>
  );
};

export default PostList;
