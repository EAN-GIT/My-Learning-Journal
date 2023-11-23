import { blogsData } from "./blogData.js";

const viewMoreBtn = document.getElementById("view-more-btn");

  function viewMore() {
  
    blogsData.push(
    
            {
                image: "./images/article-image-04.png",
                date: "JULY 23, 2022",
                title: "Blog four",
                content: `I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                 After several months of learning in the Frontend Developer Career Path.`
            }
            ,
            {
                image: "./Images/article-image-05.png",
                date: "JULY 23, 2022",
                title: "Blog five",
                content: `I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                 After several months of learning in the Frontend Developer Career Path.`
            }
            ,
            {
                image: "./Images/article-image-06.png",
                date: "JULY 23, 2022",
                title: "Blog six",
                content: `I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                 After several months of learning in the Frontend Developer Career Path.`
            }
  );

    
    viewMoreBtn.removeEventListener("click",viewMore)
    viewMoreBtn.innerHTML = ""

    document.getElementById("article").innerHTML = renderPage();

};

viewMoreBtn.addEventListener("click", viewMore);




function renderPage() {
  let blogArr = "";

  blogsData.map((blog) => {
    return (blogArr += `
         <div class="article-inner">
        
        <img src="${blog.image}" >
         <h3>${blog.date}</h3>
         <h1>${blog.title}</h1>
         <p>${blog.content}</p>

          </div>
         `);
  });

  return blogArr;
}

document.getElementById("article").innerHTML = renderPage();

// renderPage()
