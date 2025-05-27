// Frontend/Components/BlogList.js
const posts = [
  {
    title: "Big Heart, Bigger Purpose",
    description: "An empowering message about the emotional strength of kind-hearted people and their higher calling.",
    path: "./Articles/big-heart.html"
  },
  {
    title: "The Healing Journey",
    description: "A deep reflection on pain, growth, and rediscovering purpose through soul-searching and resilience.",
    path: "./Articles/healing-journey.html"
  }
];

const blogListContainer = document.getElementById('blog-list');
if (blogListContainer) {
  posts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.className = 'blog-post';
    postEl.innerHTML = `
      <h2><a href="${post.path}">${post.title}</a></h2>
      <p>${post.description}</p>
    `;
    blogListContainer.appendChild(postEl);
  });
}
