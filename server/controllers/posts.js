import PostMessage from "../models/posts";

export const getposts = async  (req,res) => {
    try {
        const postMessages = await PostMessage.find();
    } catch (error) {
        
    }
};

export const createPost = (req,res) => {
    res.send("Post Create");
};
