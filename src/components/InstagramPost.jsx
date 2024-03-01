import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstagramPost = () => {
  const [postData, setPostData] = useState(null);
  const accessToken = 'YOUR_INSTAGRAM_GRAPH_API_ACCESS_TOKEN';
  const postId = 'POST_ID';

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/v12.0/${postId}?fields=id,media_type,media_url,thumbnail_url,caption,permalink,timestamp&access_token=${accessToken}`
        );
        setPostData(response.data);
      } catch (error) {
        console.error('Error fetching Instagram post:', error);
      }
    };

    fetchPostData();
  }, [postId, accessToken]);

  if (!postData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={postData.media_url} alt="Instagram Post" />
      <p>{postData.caption}</p>
      {/* Add more components to display additional post information */}
    </div>
  );
};

export default InstagramPost;
