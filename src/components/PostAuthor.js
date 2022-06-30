import { useSelector } from "react-redux";
import { selectedAllUsers } from "../store/slices/users";
const PostAuthor = ({userId}) => {
   const users= useSelector(selectedAllUsers);
   const author=users.find(user=>user.id===userId);
  return (
    <span>
        by {author?author.name:'uknown author '}
    </span>
  )
}
export default PostAuthor;