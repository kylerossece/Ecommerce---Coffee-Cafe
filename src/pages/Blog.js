import React from 'react';
import './Blog.css'; // Import CSS file for styling

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-header">Welcome to Our Blog</h2>
      <div className="blog-post">
        <h3 className="post-title">Exploring the World of Coffee</h3>
        <p className="post-content">
          Coffee is not just a beverage; it's a culture, a lifestyle, and a passion for many people around the world. In this blog post, we'll take you on a journey to explore the fascinating world of coffee, from its origins to the latest trends in brewing methods and flavors.
        </p>
        <p className="post-content">
          From the bustling streets of Ethiopia, where coffee was first discovered, to the cozy cafes of Paris and the trendy coffee shops of Brooklyn, we'll delve into the rich history and cultural significance of this beloved drink.
        </p>
        <p className="post-content">
          Whether you're a seasoned coffee aficionado or just beginning to discover the delights of a freshly brewed cup, join us as we dive deep into the world of coffee and uncover the stories, flavors, and experiences that make it so special.
        </p>
      </div>
      <div className="blog-post">
        <h3 className="post-title">The Art of Brewing: A Beginner's Guide</h3>
        <p className="post-content">
          Brewing the perfect cup of coffee is both a science and an art. In this blog post, we'll provide you with a beginner's guide to coffee brewing, covering everything from choosing the right beans to mastering different brewing methods.
        </p>
        <p className="post-content">
          Whether you prefer the simplicity of a pour-over or the convenience of a coffee machine, we'll walk you through the step-by-step process of brewing coffee like a pro. From grinding your beans to adjusting the water temperature and brew time, we'll share tips and tricks to help you achieve the perfect cup every time.
        </p>
        <p className="post-content">
          So grab your favorite mug, roll up your sleeves, and join us as we embark on a journey to discover the art of brewing coffee. By the end of this blog post, you'll be ready to impress your friends and family with your newfound coffee brewing skills.
        </p>
      </div>
    </div>
  );
};

export default Blog;
