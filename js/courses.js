window.addEventListener("DOMContentLoaded", () => {

	// Option language

	const lang = document.getElementById("languages"),
		languageContent = document.querySelector(".languageContent");


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
			<div class="offer_item-duration">
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
	}

	showGerman();

	function clearContent() {
		while (languageContent.firstChild) {
			languageContent.removeChild(languageContent.firstChild);
		}
	}

	lang.addEventListener("change", () => {
		clearContent();
		updateContent(lang.value);
	});
});
