window.onload = function () {
    const forma = document.querySelector(".formContent");
    const greskeDiv = document.createElement("div");
    greskeDiv.style.color = "red";
    greskeDiv.style.marginTop = "20px";
    forma.appendChild(greskeDiv);

    forma.addEventListener("submit", function (e) {
        e.preventDefault();
        greskeDiv.innerHTML = "";

        let greske = [];

        const ime = document.getElementById("ime").value.trim();
        const prezime = document.getElementById("prezime").value.trim();
        const email = document.getElementById("email").value.trim();
        const broj = document.getElementById("kontaktBroj").value.trim();
        const poruka = document.getElementById("poruka").value.trim();

        if (ime === "") {
            greske.push("Ime je obavezno.");
        } else if (imaBroj(ime)) {
            greske.push("Ime ne smije sadržavati brojeve.");
        }

        if (prezime === "") {
            greske.push("Prezime je obavezno.");
        } else if (imaBroj(prezime)) {
            greske.push("Prezime ne smije sadržavati brojeve.");
        }

        if (email === "") {
            greske.push("Email je obavezan.");
        } else if (!email.includes("@") || !email.includes(".")) {
            greske.push("Email nije ispravan.");
        }

        if (broj === "") {
            greske.push("Kontakt broj je obavezan.");
        } else if (!samoBrojevi(broj)) {
            greske.push("Kontakt broj mora sadržavati samo brojeve.");
        }

        if (poruka === "") {
            greske.push("Poruka je obavezna.");
        }

        if (greske.length > 0) {
            greske.forEach(greska => {
                const p = document.createElement("p");
                p.textContent = greska;
                greskeDiv.appendChild(p);
            });
        } else {
            alert("Forma je uspješno poslana!");
            forma.reset();
        }
    });

    function imaBroj(tekst) {
        for (let i = 0; i < tekst.length; i++) {
            const znak = tekst[i];
            if (znak >= "0" && znak <= "9") {
                return true;
            }
        }
        return false;
    }

    function samoBrojevi(tekst) {
        for (let i = 0; i < tekst.length; i++) {
            const znak = tekst[i];
            if (!(znak >= "0" && znak <= "9")) {
                return false;
            }
        }
        return true;
    }
}
