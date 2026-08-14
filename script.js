/* =====================================================
   VIBEVERSE
   Mood Based Quote Generator
===================================================== */

const quotes = {

    happy: [
        {
            text: "Happiness is not something ready made. It comes from your own actions.",
            author: "— Dalai Lama"
        },
        {
            text: "The best way to pay for a lovely moment is to enjoy it.",
            author: "— Richard Bach"
        },
        {
            text: "Let your smile change the world, but don't let the world change your smile.",
            author: "— Unknown"
        },
        {
            text: "There is always something to be grateful for.",
            author: "— Unknown"
        }
    ],

    sad: [
        {
            text: "You are allowed to feel sad. Just don't forget that this feeling is temporary.",
            author: "— Unknown"
        },
        {
            text: "Even the darkest night will end and the sun will rise.",
            author: "— Victor Hugo"
        },
        {
            text: "Sometimes you need to fall apart to discover what you're really made of.",
            author: "— Unknown"
        },
        {
            text: "Your current situation is not your final destination.",
            author: "— Unknown"
        }
    ],

    motivated: [
        {
            text: "Success is the sum of small efforts, repeated day in and day out.",
            author: "— Robert Collier"
        },
        {
            text: "Don't watch the clock. Do what it does. Keep going.",
            author: "— Sam Levenson"
        },
        {
            text: "Your future self is watching you right now. Make them proud.",
            author: "— Unknown"
        },
        {
            text: "The dream doesn't work unless you do.",
            author: "— Unknown"
        }
    ],

    stressed: [
        {
            text: "Almost everything will work again if you unplug it for a few minutes, including you.",
            author: "— Anne Lamott"
        },
        {
            text: "You don't have to control everything. Just breathe and take the next step.",
            author: "— Unknown"
        },
        {
            text: "Sometimes the most productive thing you can do is rest.",
            author: "— Mark Black"
        },
        {
            text: "Slow down. You are doing better than you think.",
            author: "— Unknown"
        }
    ],

    lonely: [
        {
            text: "You are never truly alone when you learn to enjoy your own company.",
            author: "— Unknown"
        },
        {
            text: "Sometimes being alone is the space where you finally hear yourself.",
            author: "— Unknown"
        },
        {
            text: "Your own presence is a place worth coming home to.",
            author: "— Unknown"
        },
        {
            text: "The right people will find their way into your life.",
            author: "— Unknown"
        }
    ],

    angry: [
        {
            text: "For every minute you remain angry, you give up sixty seconds of peace.",
            author: "— Ralph Waldo Emerson"
        },
        {
            text: "Speak when you are angry and you will make the best speech you will ever regret.",
            author: "— Ambrose Bierce"
        },
        {
            text: "Peace is not weakness. Sometimes walking away is the strongest move.",
            author: "— Unknown"
        },
        {
            text: "Don't let someone's bad energy rent space in your mind.",
            author: "— Unknown"
        }
    ],

    confused: [
        {
            text: "Not every path has to be clear before you take the first step.",
            author: "— Unknown"
        },
        {
            text: "Sometimes you find yourself only after you get lost.",
            author: "— Unknown"
        },
        {
            text: "Clarity comes from engagement, not thought alone.",
            author: "— Marie Forleo"
        },
        {
            text: "It's okay not to have all the answers yet.",
            author: "— Unknown"
        }
    ],

    romantic: [
        {
            text: "Whatever our souls are made of, his and mine are the same.",
            author: "— Emily Brontë"
        },
        {
            text: "Love is composed of a single soul inhabiting two bodies.",
            author: "— Aristotle"
        },
        {
            text: "The best thing to hold onto in life is each other.",
            author: "— Audrey Hepburn"
        },
        {
            text: "Some hearts understand each other even before they speak.",
            author: "— Unknown"
        }
    ]
};


/* =====================================================
   MOOD INFORMATION
===================================================== */

const moodInfo = {

    happy: {
        name: "HAPPY MOMENT",
        icon: "☀️"
    },

    sad: {
        name: "GENTLE REMINDER",
        icon: "🌧️"
    },

    motivated: {
        name: "POWER MODE",
        icon: "🔥"
    },

    stressed: {
        name: "TAKE A BREATH",
        icon: "🌊"
    },

    lonely: {
        name: "YOU ARE ENOUGH",
        icon: "🌙"
    },

    angry: {
        name: "FIND YOUR PEACE",
        icon: "⚡"
    },

    confused: {
        name: "ONE STEP AT A TIME",
        icon: "🌀"
    },

    romantic: {
        name: "FROM THE HEART",
        icon: "💗"
    }
};


/* =====================================================
   DAILY THOUGHTS
===================================================== */

const thoughts = [

    "You don't need to have everything figured out today.",

    "A small step forward is still a step forward.",

    "Your story is still being written. Don't judge it from one page.",

    "Be patient with yourself. Growth takes time.",

    "Sometimes the pause is part of the progress.",

    "You survived every difficult day before this one.",

    "Your worth does not depend on how productive you are.",

    "The version of you that you dream about is built one choice at a time.",

    "You deserve the same kindness that you give to everyone else.",

    "Today doesn't have to be perfect to be meaningful."
];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const moodButtons = document.querySelectorAll(".mood");

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

const moodIcon = document.getElementById("moodIcon");
const moodName = document.getElementById("moodName");

const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

const favoriteBtn = document.getElementById("favoriteBtn");

const thought = document.getElementById("thought");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

const favoritesContainer =
    document.getElementById("favoritesContainer");

const favoriteCount =
    document.getElementById("favoriteCount");


/* =====================================================
   STATE
===================================================== */

let currentMood = null;
let currentQuote = null;

let favorites =
    JSON.parse(localStorage.getItem("vibeverseFavorites")) || [];


/* =====================================================
   RANDOM QUOTE
===================================================== */

function getRandomQuote(mood) {

    const moodQuotes = quotes[mood];

    const randomIndex =
        Math.floor(Math.random() * moodQuotes.length);

    return moodQuotes[randomIndex];
}


/* =====================================================
   DISPLAY QUOTE
===================================================== */

function displayQuote(mood) {

    if (!quotes[mood]) return;

    currentMood = mood;

    currentQuote = getRandomQuote(mood);

    quoteText.classList.remove("quote-change");

    void quoteText.offsetWidth;

    quoteText.classList.add("quote-change");

    quoteText.textContent = currentQuote.text;

    quoteAuthor.textContent = currentQuote.author;

    moodName.textContent = moodInfo[mood].name;

    moodIcon.textContent = moodInfo[mood].icon;

    updateFavoriteButton();

    updateBackground(mood);
}


/* =====================================================
   MOOD SELECTION
===================================================== */

moodButtons.forEach(button => {

    button.addEventListener("click", () => {

        moodButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const mood = button.dataset.mood;

        displayQuote(mood);

    });

});


/* =====================================================
   NEW QUOTE
===================================================== */

newQuoteBtn.addEventListener("click", () => {

    if (!currentMood) {

        showToast("Choose your mood first ✨");

        return;
    }

    displayQuote(currentMood);

});


/* =====================================================
   COPY
===================================================== */

copyBtn.addEventListener("click", async () => {

    if (!currentQuote) {

        showToast("Choose a mood first ✨");

        return;
    }

    const text =
        `"${currentQuote.text}" ${currentQuote.author}`;

    try {

        await navigator.clipboard.writeText(text);

        showToast("Quote copied to clipboard!");

    } catch {

        showToast("Unable to copy quote.");

    }

});


/* =====================================================
   SHARE
===================================================== */

shareBtn.addEventListener("click", async () => {

    if (!currentQuote) {

        showToast("Choose a mood first ✨");

        return;
    }

    const shareText =
        `"${currentQuote.text}" ${currentQuote.author}\n\n— Found on VibeVerse`;

    if (navigator.share) {

        try {

            await navigator.share({
                title: "A quote from VibeVerse",
                text: shareText
            });

        } catch {

            // User cancelled share

        }

    } else {

        await navigator.clipboard.writeText(shareText);

        showToast("Share text copied!");

    }

});


/* =====================================================
   FAVORITES
===================================================== */

favoriteBtn.addEventListener("click", () => {

    if (!currentQuote) {

        showToast("Choose a mood first ✨");

        return;
    }

    const exists = favorites.some(
        item =>
            item.text === currentQuote.text
    );

    if (exists) {

        favorites = favorites.filter(
            item =>
                item.text !== currentQuote.text
        );

        showToast("Removed from favorites");

    } else {

        favorites.push({
            text: currentQuote.text,
            author: currentQuote.author,
            mood: currentMood
        });

        showToast("Saved to your collection ♥");

    }

    saveFavorites();

    renderFavorites();

    updateFavoriteButton();

});


/* =====================================================
   UPDATE FAVORITE BUTTON
===================================================== */

function updateFavoriteButton() {

    if (!currentQuote) return;

    const exists = favorites.some(
        item =>
            item.text === currentQuote.text
    );

    if (exists) {

        favoriteBtn.textContent = "♥";

        favoriteBtn.classList.add("saved");

    } else {

        favoriteBtn.textContent = "♡";

        favoriteBtn.classList.remove("saved");

    }

}


/* =====================================================
   SAVE FAVORITES
===================================================== */

function saveFavorites() {

    localStorage.setItem(
        "vibeverseFavorites",
        JSON.stringify(favorites)
    );

}


/* =====================================================
   RENDER FAVORITES
===================================================== */

function renderFavorites() {

    favoriteCount.textContent =
        `${favorites.length} saved`;

    if (favorites.length === 0) {

        favoritesContainer.innerHTML = `

            <div class="empty-favorites">

                <span>♡</span>

                <p>
                    Your favorite quotes will appear here.
                </p>

            </div>

        `;

        return;
    }


    favoritesContainer.innerHTML =
        favorites.map((item, index) => `

            <div class="favorite-item">

                <button
                    class="remove-favorite"
                    onclick="removeFavorite(${index})"
                >
                    ×
                </button>

                <p>
                    “${item.text}”
                </p>

                <small>
                    ${item.author} · ${item.mood}
                </small>

            </div>

        `).join("");

}


/* =====================================================
   REMOVE FAVORITE
===================================================== */

function removeFavorite(index) {

    favorites.splice(index, 1);

    saveFavorites();

    renderFavorites();

    updateFavoriteButton();

    showToast("Removed from collection");

}


/* =====================================================
   RANDOM DAILY THOUGHT
===================================================== */

function generateThought() {

    const random =
        thoughts[Math.floor(Math.random() * thoughts.length)];

    thought.textContent = random;

}


/* =====================================================
   DYNAMIC BACKGROUND
===================================================== */

function updateBackground(mood) {

    const colors = {

        happy: "#ffd166",

        sad: "#5b8def",

        motivated: "#ff6b35",

        stressed: "#4ecdc4",

        lonely: "#7667d8",

        angry: "#ff4757",

        confused: "#a77bff",

        romantic: "#ff70b7"

    };

    const color =
        colors[mood] || "#b89cff";

    document.documentElement.style
        .setProperty("--accent", color);

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =====================================================
   INITIALIZE
===================================================== */

renderFavorites();

generateThought();


/* Automatically change thought every 30 seconds */

setInterval(generateThought, 30000);