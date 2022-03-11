const BASE_URL = process.env.REACT_APP_POSTS_API_BASE_URL;

export interface Post {
    id?: string
    title: string
    body: string
}

export const getPosts = async (): Promise<Post[]> => fetch(`${BASE_URL}`).then((res) => res.json());

export const createPost = async (post: Post): Promise<Post> =>
    fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    }).then((res) => res.json());

export const updatePost = async (post: Post): Promise<Post> =>
    fetch(`${BASE_URL}/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    }).then((res) => res.json());

export const deletePost = async (post: Post): Promise<Post> =>
    fetch(`${BASE_URL}/${post.id}`, {
        method: "DELETE",
    }).then(() => post);