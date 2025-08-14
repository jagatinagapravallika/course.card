const courses = [
    { name: "React", duration: "3 Months", img: "https://tse1.mm.bing.net/th/id/OIP.T9Y8u-4S5csWV8wOjaO2qwHaDt?pid=Api&P=0&h=220", desc: "Learn React from basics to advanced with hands-on projects." },
    { name: "JavaScript", duration: "2 Months", img: "https://tse1.mm.bing.net/th/id/OIP.onNPPdQ_KMJC-4UbnT-IYwHaE8?pid=Api&P=0&h=220", desc: "Master core JavaScript concepts and DOM manipulation." },
    { name: "Python", duration: "4 Months", img: "https://tse4.mm.bing.net/th/id/OIP.E4od0LKRNcYZ6ueDyfSqIQHaEK?pid=Api&P=0&h=220", desc: "Learn Python programming from scratch to expert level." },
    { name: "HTML & CSS", duration: "1 Month", img: "https://tse1.mm.bing.net/th/id/OIP.dAyDga1P-Y4MjYWFKgGNDQHaGJ?pid=Api&P=0&h=220", desc: "Build beautiful websites with HTML & CSS." },
    { name: "Data Science", duration: "5 Months", img: "https://tse3.mm.bing.net/th/id/OIP.Zdq29hJxgNj5urDGTcjj4wHaDs?pid=Api&P=0&h=220", desc: "Learn data analysis, visualization, and machine learning." },
    { name: "Machine Learning", duration: "6 Months", img: "https://tse2.mm.bing.net/th/id/OIP.wNARWHbDERUTCTpLKFuroQHaFP?pid=Api&P=0&h=220", desc: "Master ML algorithms and AI concepts." }
];

// Render Cards
const cardContainer = document.getElementById("courseCards");
courses.forEach((course, index) => {
    const cardHTML = `
        <div class="col-md-4 mb-3">
            <div class="card course-card">
                <img src="${course.img}" class="card-img-top" alt="${course.name}">
                <div class="card-body">
                    <h5 class="card-title">${course.name}</h5>
                    <button class="btn btn-primary view-btn" data-index="${index}">Click Here</button>
                    <p class="course-desc" id="desc-${index}">${course.desc}</p>
                </div>
            </div>
        </div>
    `;
    cardContainer.innerHTML += cardHTML;
});

// Show Description on Click
document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", function() {
        const index = this.dataset.index;
        const desc = document.getElementById(`desc-${index}`);
        desc.style.display = desc.style.display === "block" ? "none" : "block";
    });
});

// Render Table
const tableBody = document.getElementById("courseTableBody");
courses.forEach(course => {
    const row = `
        <tr>
            <td>${course.name}</td>
            <td>${course.duration}</td>
        </tr>
    `;
    tableBody.innerHTML += row;
});

// Handle Table Click (Activate Row + Column)
document.querySelectorAll("#courseTableBody tr").forEach(row => {
    row.addEventListener("click", function() {
        document.querySelectorAll("#courseTableBody tr").forEach(r => r.classList.remove("active"));
        document.querySelectorAll("td").forEach(td => td.classList.remove("active-cell"));

        this.classList.add("active");
        this.cells[0].classList.add("active-cell");
        this.cells[1].classList.add("active-cell");
    });
});

// Navbar Alert Click
document.querySelectorAll(".nav-alert").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert(`You clicked on ${this.dataset.alert}`);
    });
});
