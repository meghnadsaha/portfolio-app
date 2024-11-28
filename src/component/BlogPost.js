import React from "react";

const BlogPost = () => {
  return (
    <div className="main-wrapper">
      <article className="blog-post px-3 py-5 p-md-5">
        <div className="container single-col-max-width">
          <header className="blog-post-header">
            <h2 className="title mb-2">Why Every Developer Should Have A Blog</h2>
            <div className="meta mb-3">
              <span className="date">Published 2 days ago</span>
              <span className="time">5 min read</span>
              <span className="comment">
                <a className="text-link" href="#">
                  4 comments
                </a>
              </span>
            </div>
          </header>

          <div className="blog-post-body">
            <figure className="blog-banner">
              <a href="https://made4dev.com">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-post-banner.jpg"
                  alt="image"
                />
              </a>
              <figcaption className="mt-2 text-center image-caption">
                Image Credit:{" "}
                <a
                  className="theme-link"
                  href="https://made4dev.com?ref=devblog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  made4dev.com (Premium Programming T-shirts)
                </a>
              </figcaption>
            </figure>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim.
            </p>

            <h3 className="mt-5 mb-3">Code Block Example</h3>
            <p>
              You can get more info at{" "}
              <a
                className="text-link"
                href="https://highlightjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://highlightjs.org/
              </a>
              .
            </p>
            <pre>
              <code className="hljs language-javascript">
                {`function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) + \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export $initHighlight;`}
              </code>
            </pre>
            <h3 className="mt-5 mb-3">Typography</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <h5 className="my-3">Bullet Points:</h5>
            <ul className="mb-5">
              <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
              <li className="mb-2">Aenean commodo ligula eget dolor.</li>
              <li className="mb-2">Aenean massa cum sociis natoque penatibus.</li>
            </ul>
            <ol className="mb-5">
              <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
              <li className="mb-2">Aenean commodo ligula eget dolor.</li>
              <li className="mb-2">Aenean massa cum sociis natoque penatibus.</li>
            </ol>
            <h5 className="my-3">Quote Example:</h5>
            <blockquote className="blockquote m-lg-5 py-3 ps-4 px-lg-5">
              <p className="mb-2">
                You might not think that programmers are artists, but programming
                is an extremely creative profession. It's logic-based creativity.
              </p>
              <footer className="blockquote-footer mt-0">John Romero</footer>
            </blockquote>

            <h5 className="my-3">Table Example:</h5>
            <table className="table table-striped my-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

            <h5 className="mb-3">Embed A Tweet:</h5>

            <div
              className="twitter-tweet twitter-tweet-rendered"
              style={{
                display: "flex",
                maxWidth: "550px",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <iframe
                id="twitter-widget-0"
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allowFullScreen="true"
                title="X Post"
                src="https://platform.twitter.com/embed-holdback-prod/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19taXhlZF9tZWRpYV8xNTg5NyI6eyJidWNrZXQiOiJ0cmVhdG1lbnQiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0Zndfd3RlZXRfZGVmaW5lZG9fdGV4dF90b3RhbC1saW5lcyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZGFydCIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHJhbml0aW9uX3BpcGVsaW5lIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19"
                style={{
                  border: "none",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                }}
                width="100%"
                height="500"
              />
            </div>
            <p>
              To learn more about coding practices and best resources, follow{" "}
              <a href="https://twitter.com/code_blog" className="text-link">
                @code_blog
              </a>
            </p>
          </div>

          <footer className="blog-post-footer d-flex justify-content-between align-items-center mt-5 pt-5">
            <div className="footer-left">
              <div className="blog-tags">
                <a href="#">Technology</a>
                <a href="#">Programming</a>
                <a href="#">React</a>
              </div>
            </div>
            <div className="footer-right">
              <a href="#" className="btn btn-outline-primary">
                Share this post
              </a>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
