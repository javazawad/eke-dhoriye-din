import { mockData } from "./mockData";
import { uid } from "uid";

const addPost = (requestConfig) => {
  const newPost = {
    id: uid(),
    ...requestConfig.data,
  };
  mockData.push(newPost);
  return Promise.resolve(newPost);
};

const updatePost = (requestConfig) => {
  const updatePost = {
    ...requestConfig.data,
  };
  mockData = mockData.map((x) => {
    if (x.id === updatePost.id) {
      x = updatePost;
    }
    return x;
  });
  return Promise.resolve(updatePost);
};

const filterPost = (requestConfig) => {
  const filter = requestConfig.params;
  console.log(filter);
  const data = mockData.filter((x) => {
    for (const key in filter) {
      if (
        filter.hasOwnProperty(key) &&
        x.hasOwnProperty(key) &&
        x[key] !== filter[key]
      ) {
        return false;
      }
    }
    return true;
  });
  console.log(data);
  return Promise.resolve(data);
};

const getPost = (requestConfig) => {
  console.log(requestConfig);
  const postId = requestConfig.params.id;
  return Promise.resolve(mockData.find((x) => x.id === postId));
};

export const mockApi = (requestConfig) => {
  switch (requestConfig.url) {
    case "/add-post":
      return addPost(requestConfig);
    case "/update-post":
      return updatePost(requestConfig);
    case "/posts":
      return filterPost(requestConfig);
    case "/post":
      return getPost(requestConfig);
    default:
      break;
  }
};
