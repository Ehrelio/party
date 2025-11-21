// Predefined personas based on username
const personas = {
    "delta": {
        "name": "Viktoria Adelheid von Hohenberg",
        "titel": "Die Tänzerin der Klinge",
        "nationality": "Deutsch",
        "beruf": "Prima Ballerina & Schattenagentin",
        "hintergrund": "Einst gefeierte Primaballerina der Berliner Oper, wurde Viktoria zum Symbol des 'ästhetischen Todes'. Ihre Bewegungen sind so präzise wie chirurgische Eingriffe – und ihre Auftritte enden oft mit einem fehlenden Zuschauer.",
        "fahigkeiten": "Präzision, Tarnung, lautlose Eliminierung, Körperbeherrschung",
        "rolle_im_orden": "Vollstreckerin der Urteile",
        "foto": "../pictures/delta.png",
        "location": "Münsterbrücke"
    },
    "pinata": {
        "name": "Contessa Isabella van Rotenhäusler",
        "titel": "Die Kuratorin der Illusionen",
        "nationality": "Österreichisch",
        "beruf": "Kunsthändlerin & Vermögensverwalterin des Ordens",
        "hintergrund": "Die Contessa finanziert Revolutionen so leicht wie Kunstausstellungen. In ihren Galerien werden Entscheidungen getroffen, die Regierungen stürzen und neue entstehen lassen.",
        "fahigkeiten": "Finanznetzwerke, Manipulation, Fälschungserkennung",
        "rolle_im_orden": "Hüterin der Ressourcen",
        "foto": "../pictures/pinata.png",
        "location": "Münsterbrücke"
    },
    "tschippo": {
        "name": "Dimitri Sergejewitsch Volkov",
        "titel": "Der Schatten des Nordens",
        "nationality": "Russisch",
        "beruf": "Sicherheitskoordinator & Vollstrecker",
        "hintergrund": "Nachdem er einen internen Machtkampf in Sibirien überlebte, schwor Dimitri ewige Loyalität zum Orden. Seine Kälte ist ebenso berüchtigt wie nützlich.",
        "fahigkeiten": "Nahkampf, Einschüchterung, Überlebenstaktiken",
        "rolle_im_orden": "Wächter der Ordnung",
        "foto": "../pictures/tschippo.png",
        "location": "Kino Stüssihof"
    },
    "fuerte": {
        "name": "Rafael 'Rafa' Monteiro de Souza",
        "titel": "Der Architekt des Einflusses",
        "nationality": "Brasilianisch",
        "beruf": "Eventkurator & Netzwerkbroker",
        "hintergrund": "Rafas Soiréen bringen Politiker, Künstler und Spione an denselben Tisch. Niemand bemerkt, dass das Menü – und das Ergebnis – längst entschieden sind.",
        "fahigkeiten": "Charisma, Networking, Logistik im Untergrund",
        "rolle_im_orden": "Koordinator der Fronten",
        "foto": "../pictures/fuerte.png",
        "location": "Kino Stüssihof"
    },
    "calimera": {
        "name": "Ophelia Wren Thorne",
        "titel": "Die Malerin der Seelen",
        "nationality": "Britisch",
        "beruf": "Künstlerin & Informationsgewinnerin",
        "hintergrund": "Ihre Porträts zeigen mehr als Gesichter – sie enthüllen Schuld, Gier und Angst. Viele ihrer Modelle verschwanden, nachdem sie sich von ihr malen ließen.",
        "fahigkeiten": "Psychologische Manipulation, Porträtkunst, emotionale Wahrnehmung",
        "rolle_im_orden": "Chronistin der Emotionen",
        "foto": "../pictures/calimera.png",
        "location": "Kino Stüssihof"
    },
    "sushi": {
        "name": "Dr. Samira El-Fahri",
        "titel": "Die Hüterin der Relikte",
        "nationality": "Algerisch",
        "beruf": "Archäologin & Kryptologin",
        "hintergrund": "Samira sucht nicht nach Geschichte – sie bewahrt Macht, die in uralten Artefakten verborgen liegt. Der Orden vertraut ihr Relikte an, die älter sind als Nationen.",
        "fahigkeiten": "Alte Sprachen, Artefaktanalyse, Kryptografie",
        "rolle_im_orden": "Bewahrerin des Wissens",
        "foto": "../pictures/sushi.png",
        "location": "Polybahn Central"
    },
    "limbo": {
        "name": "Maximillian von Drachenfels",
        "titel": "Der Erbe des Stahls",
        "nationality": "Deutsch",
        "beruf": "Aristokrat & Meister des traditionellen Kampfes",
        "hintergrund": "Aus einer Linie uralter Krieger stammend, glaubt Maximillian, dass nur Blut Gleichgewicht schafft. Seine Ehre ist unerschütterlich, seine Klinge unangefochten.",
        "fahigkeiten": "Schwertkampf, Disziplin, Einschüchterung, Ritualkenntnis",
        "rolle_im_orden": "Vollstrecker der Tradition",
        "foto": "../pictures/limbo.png",
        "location": "Polybahn Central"
    },
    "tamtam": {
        "name": "Luca 'Il Seduttore' Santorelli",
        "titel": "Der Maskierte Charmeur",
        "nationality": "Schweizer (gibt sich als Italiener aus)",
        "beruf": "Gesellschaftsbegleiter & Juwelendieb",
        "hintergrund": "Der Orden nutzt Luca, um Herzen – und Tresore – zu öffnen. Sein Charme entwaffnet, sein Lächeln täuscht. Nur wenige merken den Diebstahl, bevor es zu spät ist.",
        "fahigkeiten": "Verführung, Spionage, Schmuckexpertise",
        "rolle_im_orden": "Gesandter der Versuchung",
        "foto": "../pictures/tamtam.png",
        "location": "Bürkliplatz"
    },
    "tabasco": {
        "name": "Elise Maren Dubois",
        "titel": "Die Analytikerin",
        "nationality": "Schweizerin (Genf)",
        "beruf": "Daten- und Verhaltensanalystin",
        "hintergrund": "„Menschen sind Systeme“, sagt Elise. „Und jedes System kann gehackt werden.“ Sie erkennt Schwächen, bevor andere sie überhaupt spüren.",
        "fahigkeiten": "Psychologie, Datenanalyse, Verhaltensprofilierung",
        "rolle_im_orden": "Architektin der Strategie",
        "foto": "../pictures/tabasco.png",
        "location": "Bürkliplatz"
    },
    "yoshi": {
        "name": "Gustav von Gustav",
        "titel": "Der Schmied der Schatten",
        "nationality": "Deutsch",
        "beruf": "Waffeningenieur & Technologe",
        "hintergrund": "Unter seinem Anwesen liegt eine Werkstatt, deren Erfindungen niemals das Tageslicht sehen dürfen. Gustav rüstet den Orden für lautlose Kriege.",
        "fahigkeiten": "Ingenieurskunst, Waffendesign, Hacking",
        "rolle_im_orden": "Erfinder der Instrumente",
        "foto": "../pictures/yoshi.png",
        "location": "Lindenhof"
    },
    "dominic": {
        "name": "Dominic 'Dom' Caruso",
        "titel": "Der Bote der Geschwindigkeit",
        "nationality": "Italo-Amerikanisch",
        "beruf": "Rennfahrer & Schmuggler",
        "hintergrund": "Dom beherrscht Europas Straßen wie Schachfelder. Seine Fahrzeuge transportieren mehr als Motoren – manchmal ganze Operationen.",
        "fahigkeiten": "Fahren, Flucht, Mechanik",
        "rolle_im_orden": "Verbindung zwischen den Zellen",
        "foto": "../pictures/dominic.png",
        "location": "Lindenhof"
    }
};

// Load the correct persona
const currentUsername = localStorage.getItem('username') || 'delta'; // fallback for demo
const persona = personas[currentUsername];

// Populate page
document.getElementById('personaName').textContent = persona.name;
document.getElementById('role').textContent = persona.titel;
document.getElementById('nationality').textContent = persona.nationality;
document.getElementById('occupation').textContent = persona.beruf;
document.getElementById('background').textContent = persona.hintergrund;
document.getElementById('skills').textContent = persona.fahigkeiten;
document.getElementById('photo').style.backgroundImage = `url('${persona.foto}')`;
document.getElementById('missionText').textContent = persona.rolle_im_orden;
document.getElementById('location').textContent = persona.location;

function downloadDossier() {
    // Holt den gesamten HTML-Inhalt der aktuellen Seite
    const htmlContent = document.documentElement.outerHTML;

    // Erstellt daraus ein Blob-Objekt (Dateidaten)
    const blob = new Blob([htmlContent], {type: "text/html"});

    // Erstellt einen Download-Link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);

    // Automatischer Dateiname – z. B. basierend auf dem Titel der Seite
    const pageTitle = document.title || "Mission_Dossier";
    link.download = `${pageTitle.replace(/\s+/g, "_")}.html`;

    // Startet den Download
    link.click();

    // Speicher wieder freigeben
    URL.revokeObjectURL(link.href);
}

