const express = require('express')
const app = express()

app.set('view engine', 'ejs');

const user = {
    firstname: 'john',
    lastname: 'Black'
}


const articles = [
    {
        id: 1,
        title: "The Future of Web Design: Trends to Watch in 2025",
        description: "Explore the emerging trends in web design, including minimalism, immersive 3D elements, and AI-generated content."
    },
    {
        id: 2,
        title: "How to Improve Website Performance Without Sacrificing Design",
        description: "Discover practical strategies to optimize your website’s speed while keeping the user experience visually engaging."
    },
    {
        id: 3,
        title: "Bootstrap vs Tailwind CSS: Which Should You Choose in 2025?",
        description: "Compare two leading CSS frameworks and find out which one aligns best with your development workflow."
    },
    {
        id: 4,
        title: "Why Accessibility Should Be a Priority in Your Web Projects",
        description: "Learn why accessible web design matters and how to implement it effectively in your next project."
    },
    {
        id: 5,
        title: "Building a Personal Brand Online: A Developer's Guide",
        description: "Tips on crafting a strong online identity through portfolios, blogging, and professional networking."
    }
];

app.use(express.urlencoded({ extended: true }))

app.get("", (req, res) => {
    res.render('pages/home', { user })
})

app.get("/about", (req, res) => {
    res.render('pages/about', { user })
})

app.get("/contact", (req, res) => {
    res.render('pages/contact', { user })
})

app.get("/add", (req, res) => {
    res.render('pages/addarticles', { user })
})

app.get("/articles", (req, res) => {
    res.render('pages/articles', { articles })
})

app.post('/addarticles', (req, res) => {
    // console.log(req.body);
    articles.push(req.body)
    res.redirect("/articles")
})

app.listen(3000, () => {
    console.log("Server starting....!!!");

})

