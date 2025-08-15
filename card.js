const courses = [
    { name: "React", duration: "3 Months",  price: "$299",  img: "https://media.licdn.com/dms/image/v2/D5612AQFFu40iwnkuIg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1728243310140?e=2147483647&v=beta&t=VUPTfqNNx-WzjAyI3yVl_hmsA1uUxlVIje4pZNceOgU", desc: "Master component-based architecture, hooks, context API, state management with Redux, and build production-ready web applications with modern best practices." },
    { name: "JavaScript", duration: "2 Months",  price: "$199",  img: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto", desc: "From ES6+ features to asynchronous programming, fetch API, and advanced DOM handling — gain confidence to create interactive, dynamic websites." },
    { name: "Python", duration: "4 Months", price: "$199",  img:  "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90", desc: "Learn Python programming from scratch to expert level. Covers syntax, OOP, data structures, file handling, libraries like Pandas & NumPy, and practical projects including web scraping and automation." },
    { name: "HTML & CSS", duration: "1 Month", price: "$99",  img: "https://camo.githubusercontent.com/21bb8ae3629c4852404841252c65baa38426e4c0d01a68a0f7e6fd121d4649dc/68747470733a2f2f7777772e69696d2e66722f65636f6c652d7765622f77702d636f6e74656e742f75706c6f6164732f323031372f30312f48544d4c352e6a7067", desc: "Build beautiful websites with HTML & CSS. Learn semantic HTML, CSS Grid, Flexbox, animations, and responsive design techniques to create stunning and accessible web pages." },
    { name: "Data Science", duration: "5 Months", price: "$299",  img: "https://www.cdmi.in/courses@2x/Data-Science.webp", desc: "Learn data analysis, visualization, and machine learning. Covers Python for data science, Pandas, Matplotlib, Seaborn, statistics, and building predictive models using scikit-learn." },
    { name: "Machine Learning", duration: "6 Months", price: "$299",  img: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2023/03/types-of-machine-learning.jpg.optimal.jpg", desc: "Master ML algorithms and AI concepts. Deep dive into supervised, unsupervised, and reinforcement learning, neural networks, and deploying ML models into production." }
];

// Render Cards
const cardContainer = document.getElementById("courseCards");
courses.forEach((course, index) => {
    const cardHTML = `
        <div class="col-md-4 mb-4">
            <div class="card course-card shadow-lg border-0">
                <img src="${course.img}" class="card-img-top" alt="${course.name}">
                <div class="card-body">
                    <h5 class="card-title fw-bold text-primary">${course.name}</h5>
                    <p class="card-text small text-muted mb-2">${course.duration} • <span class="fw-bold text-success">${course.price}</span></p>
                    
                    <button class="btn btn-gradient w-100 view-btn  " data-index="${index}">View More</button>
                    <p class="course-desc mt-3 p-2 rounded" id="desc-${index}">${course.desc}</p>
                </div>
            </div>
        </div>
    `;
    cardContainer.innerHTML += cardHTML;
});

// Show Description on Click
document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", function () {
        const index = this.dataset.index;
        const desc = document.getElementById(`desc-${index}`);
        desc.style.display = desc.style.display === "block" ? "none" : "block";
    });
});

// Render Table
const tableBody = document.getElementById("courseTableBody");
courses.forEach((course, i) => {
    const row = `
        <tr>
            <td >${i + 1}</td>
            <td>${course.name}</td>
            <td>${course.duration}</td>
        </tr>
    `;
    tableBody.innerHTML += row;
});

// Handle Table Click (Activate Row + Column)
document.querySelectorAll("#courseTableBody tr").forEach(row => {
    row.addEventListener("click", function () {
        document.querySelectorAll("#courseTableBody tr").forEach(r => r.classList.remove("active"));
        document.querySelectorAll("td").forEach(td => td.classList.remove("active-cell"));

        this.classList.add("active");
        this.cells[0].classList.add("active-cell");
        this.cells[1].classList.add("active-cell");
    });
});

// Navbar Alert Click
document.querySelectorAll(".nav-alert").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        alert(`You clicked on ${this.dataset.alert}`);
    });
});
