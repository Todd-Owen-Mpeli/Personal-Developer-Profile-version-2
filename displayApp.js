/*==================== VARIABLES ====================*/
// Texts Displayed
const submitBtn = document.getElementById("submit");
const featuredProjectsBtn = document.getElementById("featuredProjectsBtn");

/*===== DISPLAY RESIZE SECTION =====*/
function resizeDiv() {
	const displayStyles = document.getElementById("outer_container");

	// Changing Div Element
	displayStyles.style.transition = "1.25s";
	displayStyles.style.color = "#fff";
	displayStyles.style.backgroundColor = "#ff0055";
	displayStyles.style.padding = "1.5rem";
}

/*===== DISPLAY NEW TEXT =====*/
// Page Display two
function pageTwo() {
	submitBtn.innerText = "Page 3";
	// document.getElementsByClassName("header1").style.transition = "5s";

	const cc = document.getElementById("cc").remove();

	const header1 = (document.getElementById("header1").innerHTML = `
                <h2><strong> Future features </strong></h2>
            `);
	const paraph1 = (document.getElementById("paraph1").innerHTML = `
                <p><br /> These are the features I want to implement.
							<br />
							<br />
							1. User can share the result of a quiz on social media.<br />
							2. Add multiple quizzes to the application. User can select which
							one to take.<br />
							3. User can create an account and have all the scores saved in his
							dashboard
							<br /> </p>
            `);

	//load's third page
	submitBtn.addEventListener("click", () => {
		pageThree();
	});
}

// Page Display three
function pageThree() {
	submitBtn.innerText = "Page 1";
	// const title1 = document.getElementById("questionnaire_title").remove();

	const header1 = (document.getElementById("header1").innerHTML = `
                <h2><strong> Real-World Applications </strong></h2>
            `);
	const paraph1 = (document.getElementById("paraph1").innerHTML = `
                <p><br /> 1. User Feedback<br />
							2. Targeted Surveys<br />
							3. Scalable questionnaire<br />
							4. Cost-Effective Data Collection </p>
            `);

	// Reload's the default page
	submitBtn.addEventListener("click", () => {
		window.location.reload();
	});
}

/*===== NOTIFICATION DISPLAY =====*/
function featuredProjectsDisplay() {
	const showDisplay = document.getElementById("info_containerN");
	const displayStyles = document.getElementById("contentN");
	const plusBtn = document.getElementById("featuredProjectsBtn");

	// Changing Div styles
	if (showDisplay.style.display === "none") {
		showDisplay.style.display = "block";
		displayStyles.style.color = "#fff";
		displayStyles.style.minHeight = "5.5rem";
		plusBtn.style.backgroundColor = "#ff0055";

		// More Featured Projects Button
		plusBtn.innerHTML = `<i class="bi bi-dash-lg"></i>`;
	} else {
		showDisplay.style.display = "none";
		displayStyles.style.color = "#111";
		plusBtn.style.backgroundColor = "#9d73ff";
		// More Featured Projects Button
		plusBtn.innerHTML = `<i class="bi bi-plus-lg"></i>`;
	}
}

/*==================== QUESTIONNAIRE INFO ====================*/
// Submit Button Listener
submitBtn.addEventListener("click", () => {
	resizeDiv();
	pageTwo();
});

featuredProjectsBtn.addEventListener("click", () => {
	featuredProjectsDisplay();
});

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navToggle) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======================================================================================*/
