import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs-content'>
            <div className='secondary-review-title'>
                <h2>Recent Blogs</h2>
            </div>
            <div className="questions-answer">
                <h3>Questions and Answers</h3>
                <hr />
                <p><strong>Question 1: What is Semantic Element? </strong> <br /><br /> A Semantic element helps you to understand the content and also it describe the purpose and the meaning of both you and the browser. Here are some names of Semantic elements: <strong>form, article, table.</strong>  We can clearly see which tag is used for which. It is much easier to read. When you read hundreds or thousands of codes continuously Semantic elements will help you to understand the code properly also it plays an important role in the Search Engine too. Semantic element helps the search engine or assistive technologies to understand the context of your website.</p>
                <p><strong>Question 2: Difference between Block Element and Inline Element? </strong> <br /><br /> A Block Level Element always takes some extra white space also it starts on a new line. You cannot place a block-level element by side by side normally. Block Elements allows you to add width, padding, margin and height. It takes full width. There are many block elements available but here are some of the commonly used Block elements <strong>P, Div, h1 - h6, header, footer, section, ul, li, article.</strong> On the other hand an Inline element work opposite. It does not start on a new line also An inline element does not take any extra width. You can give border or padding easily in Inline elements. Here are some of the most used inline elements: <strong>span, a, button, img, i.</strong></p>
            </div>
        </div>
    );
};

export default Blogs;