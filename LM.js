// Toggle sidebar on mobile
document.getElementById('menuToggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

// Sample data for the student
const studentData = {
    name: "John Doe",
    gpa: "3.75",
    attendance: "92%",
    assignmentsDue: "3",
    totalCredits: "45",
    rollNo: "12345",
    email: "john.doe@example.com",
    college: "XYZ College",
    department: "Computer Science",
    subjects: [{
            name: "Mathematics",
            progress: "85%"
        },
        {
            name: "Science",
            progress: "70%"
        },
        {
            name: "History",
            progress: "60%"
        }
    ],
    deadlines: [{
            date: "2023-10-15",
            task: "Math Assignment"
        },
        {
            date: "2023-10-18",
            task: "Science Project"
        },
        {
            date: "2023-10-20",
            task: "History Essay"
        }
    ]
};

// Function to populate student data
function populateStudentData(data) {
    document.getElementById('studentName').textContent = data.name;
    document.getElementById('gpa').textContent = data.gpa;
    document.getElementById('attendance').textContent = data.attendance;
    document.getElementById('assignmentsDue').textContent = data.assignmentsDue;
    document.getElementById('totalCredits').textContent = data.totalCredits;
    document.getElementById('profileName').textContent = data.name;
    document.getElementById('rollNo').textContent = data.rollNo;
    document.getElementById('email').textContent = data.email;
    document.getElementById('college').textContent = data.college;
    document.getElementById('department').textContent = data.department;

    // Populate subject progress table
    const subjectProgressTable = document.getElementById('subjectProgressTable').getElementsByTagName('tbody')[0];
    data.subjects.forEach(subject => {
        const row = subjectProgressTable.insertRow();
        row.innerHTML = `
            <td>${subject.name}</td>
            <td><div class="progress-bar" style="width: ${subject.progress}">${subject.progress}</div></td>
        `;
    });

    // Populate upcoming deadlines
    const upcomingDeadlines = document.getElementById('upcomingDeadlines');
    data.deadlines.forEach(deadline => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="date-badge">${deadline.date}</span> ${deadline.task}`;
        upcomingDeadlines.appendChild(li);
    });
}

// Function to simulate fetching notifications
function fetchNotifications() {
    // Simulate fetching notifications
    setTimeout(() => {
        const notificationCount = Math.floor(Math.random() * 10);
        document.getElementById('notificationCount').textContent = notificationCount;
    }, 1000);
}

// Initialize the dashboard
populateStudentData(studentData);
fetchNotifications();