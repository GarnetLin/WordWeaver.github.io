window.addEventListener("DOMContentLoaded", () => {

	// Option language

	const lang = document.getElementById("languages"),
		languageContent = document.querySelector(".languageContent"),
		ourTutors = document.querySelector(".ourTutors");


	class OfferCard {
		constructor(src, alt, title, descr, duration, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.duration = duration;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 0.91;
			this.changeToEUR();
		}

		changeToEUR() {
			this.price *= this.transfer;
		}

		render() {
			const element = document.createElement("div");
			if (this.classes.length === 0) {
				this.element = "offer__item";
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
			<div class='fade'>
				<img src=${this.src} alt=${this.alt}>
				<h3 class="offer__item-title">${this.title}</h3>
				<div class="offer__item-descr">${this.descr}</div>
				<div class="offer__item-divider"></div>
				<div class="offer__item-duration">
					<div class="offer__item-dur">Duration in hours: </div>
					<div class="offer__item-hour"><span>${this.duration}</span> hours</div>
				</div>
				<div class="offer__item-price">
					<div class="offer__item-cost">Price per lesson:</div>
					<div class="offer__item-total"><span>${this.price}</span> eur/lesson</div>
				</div>
			</div>
			`;
			this.parent.append(element);
		}
	}

	class Tutors {
		constructor(src, alt, name, experience, langs, birthplace, rate, education, description, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.name = name,
			this.experience = experience;
			this.education = education;
			this.rate = rate;
			this.langs = langs;
			this.birthplace = birthplace;
			this.description = description;
			this.parent = document.querySelector(parentSelector);
			this.classes = classes;
		}

		render() {
			const element = document.createElement("div");
			if (this.classes.length === 0) {
				this.element = "tutors__pers";
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
			<div class='teach'>
				<div class='tutors__pers-left-block'>
					<img src=${this.src} alt=${this.alt}>
					<h3 class="tutors__pers-name">${this.name}</h3>
					<div class='tutors__pers-birth'>${this.birthplace}</div>
					<div class='tutors__pers-langs'>Languages: <span>${this.langs}</span></div>
					<div class='tutors__pers-rate'>Rating: <span>${this.rate}</span></div>
				</div>
				<div class='tutors__pers-right-block'>
					<div class="tutors__pers-experience">Experience in years: <span>${this.experience}</span></div>
					<div class="tutors__pers-education">Place of education: <span>${this.education}</span></div>
					<div class="tutors__pers-description">${this.description}</div>
				</div>
			</div>
			<div class='divide'></div>
			`;
			this.parent.append(element);
		}
	}

	function updateContent(langSelect) {
		switch (langSelect) {
		case "german":
			showGerman();
			break;
		case "french":
			showFrench();
			break;
		case "spanish":
			showSpanish();
			break;
		case "japanese":
			showJapanese();
			break;
		default:
			showGerman();
		}
	}
	
	// Language functions

	function showJapanese() {
		new OfferCard (
			"img/japan/japan_street.jpg",
			"Japanese street",
			"Beginner Japanese Course (N5-N4)",
			"Our Beginner Japanese Course introduces essential grammar, vocabulary, and cultural insights for N5-N4 proficiency levels. Interactive lessons, cultural immersion, and experienced instructors ensure rapid progress towards confident communication in everyday situations. Start your Japanese journey with us today!",
			200,
			35,
			".languageContent"
		).render();

		new OfferCard (
			"img/japan/japan_tori.jpg",
			"Japanese tori",
			"Intermediate Japanese N3",
			"Take your Japanese skills to the next level with our Intermediate Course, covering proficiency level N3. Led by experienced instructors, dive deeper into grammar, expand vocabulary, and enhance cultural understanding. Engaging lessons and real-life scenarios ensure rapid progress. Unlock new opportunities with us today!",
			300,
			31,
			".languageContent"
		).render();

		new OfferCard (
			"img/japan/japan_mountain.jpg",
			"Japanese mountain",
			"Advanced Japanese N2",
			"Achieve mastery in Japanese with our Advanced Course, tailored for N2 proficiency. Led by seasoned instructors, delve into complex grammar, broaden vocabulary, and deepen cultural understanding. Engaging lessons and immersive experiences ensure swift progress. Elevate your proficiency and seize new opportunities. Enroll now!",
			400,
			28,
			".languageContent"
		).render();

		new Tutors (
			"img/teachers/molly.jpg",
			"Molly",
			"Molly",
			"5",
			"Japanese, English, French",
			"Kyoto",
			"5",
			"Kyoto University",
			"Meet Molly, your Japanese language guide. With her passion and expertise, she makes learning Japanese engaging and fun. Join her class to master the language and explore Japanese culture with confidence.",
			".ourTutors"
		).render();

		new Tutors (
			"img/teachers/arisu.jpg",
			"Arisu",
			"Arisu",
			"3",
			"Japanese, English, Chinese",
			"Osaka",
			"5",
			"New York University",
			"Arisu, a passionate language enthusiast deeply immersed in Japanese culture, offers a dynamic approach to teaching. With a blend of tradition and innovation, her classes promise an enriching journey through the language and culture of Japan.",
			".ourTutors"	
		).render();

		new Tutors (
			"img/teachers/mira.jpg",
			"Mira",
			"Mira",
			"11",
			"Japanese, English",
			"Tokyo",
			"4.9",
			"The University of Tokyo",
			"Introducing Mira, your Japanese language guru. With her vibrant teaching style and deep knowledge, she makes mastering Japanese a breeze. Join her class for an enriching journey into the language and culture of Japan.",
			".ourTutors"
		).render();
	}

	function showGerman() {
		new OfferCard (
			"img/germany/german_street.jpg",
			"German street",
			"Beginner German Course (A1-A2)",
			"In our beginner course, you'll learn essential German vocabulary and grammar structures, enabling you to confidently engage in basic conversations and understand everyday texts. Through interactive exercises and practical activities, you'll build a strong foundation for further language learning.Our Beginner Japanese Course introduces essential grammar, vocabulary, and cultural insights for N5-N4 proficiency levels. Interactive lessons, cultural immersion, and experienced instructors ensure rapid progress towards confident communication in everyday situations. Start your Japanese journey with us today!",
			100,
			30,
			".languageContent"
		).render();

		new OfferCard (
			"img/germany/german_castle.jpg",
			"German castle",
			"Intermediate German (B1-B2)",
			"Transitioning to intermediate level, our course focuses on expanding your vocabulary, refining your grammar skills, and enhancing your ability to communicate in more varied and nuanced situations. Engage in discussions, role-plays, and authentic materials to deepen your understanding and fluency.",			
			200,
			28,
			".languageContent"

		).render();

		new OfferCard (
			"img/germany/german_gate.jpg",
			"German gate",
			"Advanced German C1",
			"Elevate your German proficiency in our advanced course, where you'll tackle complex grammar concepts, master idiomatic expressions, and refine your language skills for advanced communication purposes. Dive into authentic texts, debates, and presentations to hone your linguistic abilities and confidently navigate professional or academic contexts.",
			300,
			25,
			".languageContent"
		).render();

		
		new Tutors (
			"img/teachers/hanna.jpg",
			"Hanna",
			"Hanna",
			"9",
			"German, English, Dutch",
			"Hannover",
			"5",
			"Ludwig Maximilians University",
			"A dedicated tutor with years of experience, Frieda specializes in making German learning accessible and enjoyable. Her patient demeanor and clear explanations ensure that students of all levels feel confident and motivated to progress in their language skills.",
			".ourTutors"
		).render();

		new Tutors (
			"img/teachers/frieda.jpg",
			"Frieda",
			"Frieda",
			"4",
			"German, English, Greek",
			"München",
			"4.9",
			"Oxford university",
			"Hailing from Munich, Frieda combines his love for teaching with a deep understanding of German linguistics. Whether you're a beginner or advanced learner, her tailored lessons cater to individual needs, fostering a supportive environment for language mastery.",
			".ourTutors"	
		).render();

		new Tutors (
			"img/teachers/emma.jpg",
			"Emma",
			"Emma",
			"7",
			"German, English, Polish",
			"Berlin",
			"5",
			"The University of Mannheim",
			"With a passion for language and a knack for effective teaching methods, Hanna brings a dynamic approach to learning German. Born and raised in Berlin, she offers insights into both language and culture, making every lesson engaging and immersive.",
			".ourTutors"
		).render();
	}

	function showFrench() {
		new OfferCard (
			"img/france/france_eiffel.jpg",
			"Eiffel tower",
			"Beginner French Course (A1-A2)",
			"Begin your journey with our introductory French course, where you'll acquire fundamental vocabulary and grammar structures to engage confidently in basic conversations and comprehend everyday texts. Through interactive exercises and practical tasks, you'll lay a strong foundation for further language exploration.",
			100,
			30,
			".languageContent"
		).render();

		new OfferCard (
			"img/france/france_louvre.jpg",
			"Louvre",
			"Intermediate French (B1-B2)",
			"Transitioning to the intermediate stage, our program focuses on expanding vocabulary, honing grammar skills, and cultivating versatile communication abilities across diverse contexts. Engage in dynamic discussions, role-plays, and authentic materials to deepen understanding and fluency.",			
			200,
			28,
			".languageContent"

		).render();

		new OfferCard (
			"img/france/france_nature.jpg",
			"French nature",
			"Advanced French C1",
			"Elevate your French proficiency in our advanced course, delving into complex grammar concepts, mastering idiomatic expressions, and refining language skills for advanced communication purposes. Explore authentic texts, debates, and presentations to sharpen linguistic abilities and navigate professional or academic environments with confidence.",
			300,
			25,
			".languageContent"
		).render();

		new Tutors (
			"img/teachers/adeline.jpg",
			"Adelina",
			"Adeline",
			"5",
			"French, English, Italian",
			"Paris",
			"5",
			"Université Paris-Saclay ",
			"A native of Paris with a love for language and teaching, Adeline brings her expertise in French linguistics to every lesson. Her personalized approach focuses on practical communication skills, helping students develop fluency while immersing themselves in the beauty of the French language.",
			".ourTutors"
		).render();

		new Tutors (
			"img/teachers/alan.jpg",
			"Alan",
			"Alan",
			"4",
			"French, English, ",
			"Vancouver",
			"4.9",
			"The University of British Columbia",
			"Hailing from Vancouver, Alan is a dedicated tutor known for his patient and encouraging teaching style. With a background in French literature and language acquisition, he guides students of all levels through engaging lessons that emphasize both grammar and conversational fluency.",
			".ourTutors"	
		).render();

		new Tutors (
			"img/teachers/claire.jpg",
			"Claire",
			"Claire",
			"3",
			"French, English, Ukrainian",
			"Nice",
			"5",
			"Sorbonne University",
			"Passionate about sharing her love for French culture and language, Claire creates dynamic and interactive learning experiences for her students. Originally from Nice, she combines her expertise in language teaching with a deep understanding of French customs, ensuring a well-rounded education that goes beyond vocabulary and grammar.",
			".ourTutors"
		).render();
	}

	function showSpanish() {
		new OfferCard (
			"img/spain/spain_street.jpg",
			"Spanish street",
			"Beginner Spanish Course (A1-A2)",
			"Dive into our introductory Spanish course, where you'll grasp fundamental vocabulary and grammar structures, empowering you to converse confidently in basic settings and comprehend everyday written materials. Through interactive exercises and practical tasks, you'll lay a robust groundwork for further linguistic exploration.",			
			100,
			30,
			".languageContent"
		).render();

		new OfferCard (
			"img/spain/spain_cathedral.jpg",
			"Spanish cathedral",
			"Intermediate Spanish (B1-B2)",
			"Transitioning to the intermediate stage, our program emphasizes vocabulary expansion, grammar finesse, and the cultivation of versatile communication skills across various scenarios. Engage in lively discussions, simulated interactions, and authentic materials to deepen comprehension and fluency.",			
			200,
			28,
			".languageContent"

		).render();

		new OfferCard (
			"img/spain/spain_coast.jpg",
			"Spanish coast",
			"Advanced Spanish C1",
			"Propel your Spanish fluency to new heights with our advanced curriculum, designed to tackle intricate grammar intricacies, refine idiomatic expressions, and polish language proficiency for sophisticated discourse in professional or academic environments. Immerse yourself in authentic literature, debates, and presentations to sharpen linguistic prowess and confidently navigate complex situations.",			
			300,
			25,
			".languageContent"
		).render();
		
		new Tutors (
			"img/teachers/lana.jpeg",
			"Lana",
			"Elizabeth",
			"15",
			"Spanish, English, French",
			"Lake Placid",
			"5",
			"Fordham University in the Bronx",
			"With a vibrant personality and a passion for Spanish culture, Lana brings energy and enthusiasm to her teaching. Born in Lake Placid, she's been always craving for Spanish culture. She offers authentic language experiences intertwined with cultural insights, making each lesson an exciting journey of discovery.",
			".ourTutors"
		).render();

		new Tutors (
			"img/teachers/alejandro.jpg",
			"Alejandro",
			"Alejandro",
			"4",
			"Spanish, Portuguese, English",
			"Barcelona",
			"4.9",
			"Universidad Autónoma de Madrid",
			"A seasoned tutor with a talent for simplifying complex concepts, Alejandro is known for his patient and approachable teaching style. Originally from Barcelona, he empowers his students to build confidence in their Spanish skills through interactive exercises and personalized feedback.",
			".ourTutors"	
		).render();

		new Tutors (
			"img/teachers/isabella.jpg",
			"Isabella",
			"Isabella",
			"2",
			"Spanish, English",
			"Madrid",
			"5",
			"Autonomous University of Barcelona",
			"As a native Spanish speaker with a background in language education, Isabelle excels in creating engaging and effective learning experiences. Her warmth and encouragement create a supportive environment where students feel motivated to explore the beauty of the Spanish language and its rich heritage.",
			".ourTutors"
		).render();
	}

	showGerman();

	function clearContent() {
		while (languageContent.firstChild) {
			languageContent.removeChild(languageContent.firstChild);
		}

		while (ourTutors.firstChild) {
			ourTutors.removeChild(ourTutors.firstChild);
		}
	}

	lang.addEventListener("change", () => {
		clearContent();
		updateContent(lang.value);
	});

	// Timer

	const deadline = "2025-07-14";

	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;
		const t = Date.parse(endtime) - Date.parse(new Date());

		if (t <= 0)    {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(t / (1000 * 60 * 60 * 24));
			hours = Math.floor((t / (1000 * 60 * 60) % 24));
			minutes = Math.floor((t / 1000 / 60) % 60);
			seconds = Math.floor((t / 1000) % 60);
		}

		return {
			"total": t,
			"days": days,
			"hours": hours,
			"minutes": minutes,
			"seconds": seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector("#hours"),
			minutes = timer.querySelector("#minutes"),
			seconds = timer.querySelector("#seconds"),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();
			
		function updateClock () {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock(".timer", deadline);

});
