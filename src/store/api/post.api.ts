import {Env} from "../../constants/Env";
import {Post} from "../../libs/models/post.model";

export const getPosts = async (): Promise<Post[]> => fetch(`${(Env.POSTS_API_BASE_URL)}`).then((res) => res.json());

export const createPost = async (post: Post): Promise<Post> =>
    fetch(`${(Env.POSTS_API_BASE_URL)}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    }).then((res) => res.json());

export const updatePost = async (post: Post): Promise<Post> =>
    fetch(`${(Env.POSTS_API_BASE_URL)}/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    }).then((res) => res.json());

export const deletePost = async (post: Post): Promise<Post> =>
    fetch(`${(Env.POSTS_API_BASE_URL)}/${post.id}`, {
        method: "DELETE",
    }).then(() => post);