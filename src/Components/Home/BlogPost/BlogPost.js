import React from "react";

const BlogPost = (props) => {
  const { title, description, author, authorImg, date } = props.post;
  return (
    
   
        <div className="card container shadow-sm">
          <div className="card-body">
            <div style={{alignSelf: 'center'}}className="d-flex align-items-center p-3">
              <img src={authorImg} alt="" />
              <br/>
              <div className="p-3">
                <h6><b>{author}</b></h6>
                <p style={{color:'gray'}}>{date}</p>
              </div>
            </div>
            <br/>
            <div>
              <h5><b>{title}</b></h5>
              <p style={{textAlign: 'justify', lineHeight: '30px', color:'gray'}}>{description}</p>
            </div>
          </div>
        </div>
      
    
  );
};

export default BlogPost;
