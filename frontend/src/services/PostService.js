import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api/posts/'

export const getPosts = async () => {
    try {
        const res = await axios.get(API_URL)
        return res.data
    } catch (e){
        console.log('there was an error fetching the data', e)
    }
}

export const createPost = async (post) => {
    console.log('post', post)
    try {
        const response = await axios.post(API_URL, post, {
            headers: {
                'Content-Type': 'application/json',
            },});
        console.log('Success!',response.data)
        return response.data;
    } catch (e){
        console.log('there was an error creating the post', e)
    }
};

export const updatePost = async (id, post) => {
    console.log('update post', id, post)
    const response = await axios.put(`${API_URL}${id}/`, post);
    return response.data;
};

export const deletePost = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
};
