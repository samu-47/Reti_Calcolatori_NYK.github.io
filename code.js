const ChangeColorText = document.getElementById("clickableText");

ChangeColorText.addEventListener("click", function() {

	alert("Pagina customizzata! Sei un vero Knick :)");

	const testi = document.getElementsByTagName("p");
	for (i = 0; i < testi.length; i++) {
    	testi[i].style.color = "blue";
    }

    const titoli1 = document.getElementsByTagName("h1");
	for (i = 0; i < titoli1.length; i++) {
    	titoli1[i].style.color = "orange";
    }

    const titoli2 = document.getElementsByTagName("h2");
	for (i = 0; i < titoli2.length; i++) {
    	titoli2[i].style.color = "orange";
    }

    const titoli3 = document.getElementsByTagName("h3");
	for (i = 0; i < titoli3.length; i++) {
    	titoli3[i].style.color = "orange";
    }

    const elenchi = document.getElementsByTagName("ul");
	for (i = 0; i < elenchi.length; i++) {
    	elenchi[i].style.color = "blue";
    }

    const tabelle = document.getElementsByTagName("table");
	for (i = 0; i < tabelle.length; i++) {
    	tabelle[i].style.color = "blue";
    }
});

