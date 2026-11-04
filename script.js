// Fetch 

async function getPapers() {
  try {
    const response = await fetch("https://upadhayay.github.io/db.json");
    const data = await response.json();
    const divPapers = document.querySelector(".second");

    const publishedPapers = data.books.filter(
      (paper) => paper.published === true,
    );

    for (let paper of publishedPapers) {
      console.log(paper);
      // maker sure the paper # matches with the db.json id

      const singlePaperDiv = document.createElement("div");
      singlePaperDiv.innerHTML = `
            <img src="images/paper${paper.id}.jpg">
            <h2>Title: ${paper.title}</h2>
            <h3>Year: ${paper.year}</h3>
            `;

      singlePaperDiv.classList.add("singlePaper");
      divPapers.append(singlePaperDiv);
    }
  } catch (error) {
    console.log("Error in fetch");
    // console.log("Error: ", error);
  }
}

getPapers();

// Blog

const title = document.getElementById("title");
const textBody = document.getElementById("textBody");
const postBtn = document.getElementById("postBtn");
const blogPosts = document.getElementById("blogPosts");

postBtn.addEventListener("click", function () {
  const titleInput = title.value;
  const textBodyInput = textBody.value;

  if (title.value == "" || textBody.value == "") {
    alert("Please input title and/or text body before you submit");
    return;
  }

  const singlePostDiv = document.createElement("div");
  singlePostDiv.innerHTML = `
    <h2>${titleInput}</h2>
    <p>${textBodyInput}</p>
    `;
  singlePostDiv.classList.add("blogPosts");
  blogPosts.append(singlePostDiv);

  title.value = "";
  textBody.value = "";
});

// Hamburger Button

const menuButton = document.querySelector(".menuBtn");
const navLinks = document.querySelector(".navLinks");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open"); // open the menu
});
const allLinks = document.querySelectorAll(".navLinks a"); // create an array of links

// adds a function if one of the links is clicked it directs you to the destination and closes the menu
for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
}
