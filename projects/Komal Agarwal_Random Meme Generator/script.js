const btn = document.querySelector(".meme-gen");
const meme = document.querySelector(".cont img");
const mtitle = document.querySelector(".title");
const mauthor = document.querySelector(".author");

const update = (url, title, author) => {
    meme.setAttribute("src", url);
    mtitle.innerHTML = title;
    mauthor.innerHTML = `Meme by: ${author}`;
};

const handleApiResponse = (data) => {
    update(data.url, data.title, data.author);
};

const genmeme = async () => {
    try {
        const response = await fetch("https://meme-api.com/gimme/wholesomememes");
        const data = await response.json();
        handleApiResponse(data);
    } catch (error) {
        console.error("Error fetching meme:", error);
    }
};

genmeme();

btn.addEventListener("click", genmeme);
