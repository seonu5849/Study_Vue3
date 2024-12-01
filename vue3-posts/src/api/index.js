// axios
import axios from "axios";

// Object.assign은 여러 객체를 복사하거나 병합할 때 사용
function create(baseURL, options){
  const instance = axios.create(
    Object.assign({baseURL}, options)
  );
  return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}/posts`);
// development : http://localhost:5000/posts/
// production : http://localhost:5001/posts/