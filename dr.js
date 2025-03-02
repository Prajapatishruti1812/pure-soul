/* const extraDoctors = [
    { name: "Dr. Mike Johnson", specialty: "Orthopedic", experience: "12 Years", image: "doctor4.jpg" },
    { name: "Dr. Sarah Lee", specialty: "Pediatrician", experience: "9 Years", image: "doctor5.jpg" }
];

// Function to Add Extra Doctors Dynamically
function addExtraDoctors() {
    const container = document.getElementById("doctorsList");

    extraDoctors.forEach(doctor => {
        const doctorCard = document.createElement("div");
        doctorCard.classList.add("doctor-card");

        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <h2>${doctor.name}</h2>
            <p>${doctor.specialty}</p>
            <p>Experience: ${doctor.experience}</p>
        `;

        container.appendChild(doctorCard);
    });
}

// Function to Filter Doctors by Specialty
function filterDoctors() {
    const searchValue = document.getElementById("searchBox").value.toLowerCase();
    const doctorCards = document.querySelectorAll(".doctor-card");

    doctorCards.forEach(card => {
        const specialty = card.getElementsByTagName("p")[0].innerText.toLowerCase();
        if (specialty.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Load Extra Doctors on Page Load
window.onload = addExtraDoctors; */