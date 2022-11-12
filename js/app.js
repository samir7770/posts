fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => getPost(data));

const parentRow = document.getElementById("row");

const getPost = (posts) => {
  let post = posts.map((post) => {
    parentRow.innerHTML += `
        <div class="col-4">
            <div>
                <div class="card text-white bg-dark mb-3">
                    <div class="card-header">Post ID : ${post.id}</div>
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">
                            ${post.body}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
  });
};
