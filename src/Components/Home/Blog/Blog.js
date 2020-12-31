import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/Ellipse 2.png'

const Blog = () => {
    const blogData = [
        {
            title : 'Check at least a doctor in a year for your teeth',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : wilson,
            date : '23 April 2019'
        },
        {
            title : 'Two time brush in a day can keep you healthy',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Sinthia',
            authorImg : wilson,
            date : '23 April 2019'
        },
        {
            title : 'The tooth cancer is taking a challenge',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : wilson,
            date : '23 April 2019'
        },
    ]
    
    return (
       <section className='blog text-center'>
           <div className="container">
               <h5 style={{color:'#50DCE5', fontWeight:'bold'}}>OUR BLOG</h5>
               <h1><b>From Our Blog News</b></h1>
           </div>
           <div className='card-deck py-5 w-80 m-auto'>
               {
                   blogData.map(post => <BlogPost post={post}></BlogPost>)
               }
           </div>

       </section>
    );
};

export default Blog;