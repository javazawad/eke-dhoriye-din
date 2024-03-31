import { mockApi } from "./mockAPI";

export const addPost = (post) => {
  return mockApi({
    url: "/add-post",
    method: "POST",
    data: post,
  });
};
export const updatePost = (post) => {
  return mockApi({
    url: "/update-post",
    method: "PUT",
    data: post,
  });
};

export const getPosts = (filters) => {
  return mockApi({
    url: "/posts",
    method: "GET",
    params: filters,
  });
};

export const getPost = (postId) => {
  return mockApi({
    url: `/post`,
    method: "GET",
    params: { id: postId },
  });
};

export const currentUser = 1;
