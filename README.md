#Testable Profile Card (HTML, CSS, JS)

A simple, semantic, and responsive profile card built with plain HTML, CSS, and Vanilla JavaScript.
This project follows the official Frontend Wizards Stage 0 requirements for accessibility, testability, and responsive design.


📜 Project Overview

The Profile Card displays a user’s name, bio, avatar, social links, hobbies, dislikes, and the current time in milliseconds.
Every visible element includes a data-testid for automated testing.

🧩 Features

✅ Semantic HTML structure (article, figure, nav, section, etc.)
✅ Responsive layout using Flexbox
✅ Accessible keyboard-focusable social links
✅ Real-time time display using Date.now()
✅ Separate, clean CSS and JS files
✅ Tested with data-testid attributes for every visible element



🏗️ Folder Structure
profile-card/
│
├── index.html       # Main HTML file
├── style.css        # Styling
└── script.js        # JavaScript logic (current time)




🧠 Core Requirements (all included)
Element	Description	data-testid
Profile card container	Root wrapper	test-profile-card
User name	Plain text	test-user-name
Bio	Short paragraph	test-user-bio
Time	Current time in ms	test-user-time
Avatar image	User photo	test-user-avatar
Social links list	Container for social links	test-user-social-links
Individual social links	e.g. Twitter, GitHub, LinkedIn	test-user-social-<network>
Hobbies list	List of hobbies	test-user-hobbies
Dislikes list	List of dislikes	test-user-dislikes
🧑‍💻 How to Run Locally
1. Clone the repository
git clone https://github.com/yourusername/profile-card.git
cd profile-card

2. Open in browser

Simply open the file index.html in your browser.

No build step or dependency installation required.

🧱 Tech Stack

HTML5 (semantic, accessible)

CSS3 (Flexbox, responsive layout)

JavaScript (ES6) for live time updates

🧭 Accessibility Notes

Avatar image includes descriptive alt text.

Links are focusable and open in a new tab (target="_blank", rel="noopener noreferrer").

Layout adapts for mobile, tablet, and desktop screens.

🧪 Automated Testing Ready

Each element has a data-testid to support automated testing, example:

<h2 data-testid="test-user-name">Christobel John</h2>


This ensures stable tests and clear targeting for selectors.

📱 Responsive Design
Screen	Layout
Mobile	Vertical stacking
Tablet	Balanced layout
Desktop	Side-by-side (avatar left, text right)
🕒 Dynamic Time Example

JavaScript updates the current time every second:

function updateTime() {
  document.getElementById("current-time").textContent = Date.now();
}
setInterval(updateTime, 1000);
