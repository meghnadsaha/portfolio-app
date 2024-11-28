
import React from 'react';


function BlogCards() {
  return (
<div class="row">
<div class="col-md-4 mb-5">
    <div class="card blog-post-card">
        <img class="card-img-top" src="https://themes.3rdwavemedia.com/devcard/bs5/assets/images/blog/blog-post-thumb-card-1.jpg" alt="image"/>
        <div class="card-body">
            <h5 class="card-title"><a class="theme-link" href="blog-post.html">Top 3 JavaScript Frameworks</a></h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...</p>
            <p class="mb-0"><a class="text-link" href="blog-post.html">Read more →</a></p>
            
        </div>
        <div class="card-footer">
            <small class="text-muted">Published 2 days ago</small>
        </div>
    </div>
</div>

</div>
  );
}

export default BlogCards;