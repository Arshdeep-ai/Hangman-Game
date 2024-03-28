let word = "";
let guessedWord = [];
let guessedLetters = [];
let guessesLeft = 6;
let gameInProgress = false;
let hangmanStages = [
    "    +------+\n" +
    "      |     |\n" +
    "            |\n" +
    "            |\n" +
    "            |\n" +
    "            |\n" +
    "==========",
    "    +------+\n" +
    "      |    |\n" +
    "      O    |\n" +
    "           |\n" +
    "           |\n" +
    "           |\n" +
    "==========",
    "    +------+\n" +
    "      |    |\n" +
    "      O    |\n" +
    "      |    |\n" +
    "           |\n" +
    "           |\n" +
    "==========",
    "    +------+\n" +
    "      |    |\n" +
    "      O    |\n" +
    "     /|    |\n" +
    "           |\n" +
    "           |\n" +
    "==========",
    "    +------+\n" +
    "      |    |\n" +
    "      O    |\n" +
    "     /|\\  | \n" +
    "           |\n" +
    "           |\n" +
    "==========",
    "    +------+\n" +
    "      |   |\n" +
    "      O   |\n" +
    "     /|\\  |\n" +
    "     /     |\n" +
    "           |\n" +
    "==========",
    "    +------+\n" +
    "      |   |\n" +
    "      O   |\n" +
    "     /|\\  |\n" +
    "     / \\  |\n" +
    "          |\n" +
    "==========",
];

// List of words and hints
const wordsAndHints = [
    { word: "apple", hint: "A fruit" },
    { word: "banana", hint: "Yellow fruit" },
    { word: "carrot", hint: "A vegetable" },
    { word: "elephant", hint: "A large mammal" },
    { word: "computer", hint: "An electronic device" },
    { word: "guitar", hint: "A musical instrument" },
    { word: "mountain", hint: "A large natural elevation" },
    { word: "ocean", hint: "A vast body of saltwater" },
    { word: "sunflower", hint: "A tall, bright flower" },
    { word: "bicycle", hint: "A two-wheeled vehicle" },
    { word: "television", hint: "A device for receiving television broadcasts" },
    { word: "dictionary", hint: "A reference book containing words" },
    { word: "basketball", hint: "A sport played with a ball and hoop" },
    { word: "restaurant", hint: "A place where meals are served to customers" },
    { word: "umbrella", hint: "A device used for protection against rain" },
    { word: "sunglasses", hint: "Eyewear designed to protect the eyes from sunlight" },
    { word: "penguin", hint: "A flightless bird found in cold climates" },
    { word: "helicopter", hint: "An aircraft with rotating blades" },
    { word: "diamond", hint: "A precious gemstone" },
    { word: "kangaroo", hint: "A marsupial found in Australia" },
    { word: "library", hint: "A building containing books" },
    { word: "football", hint: "A sport played with a ball and goalposts" },
    { word: "giraffe", hint: "A tall, long-necked mammal" },
    { word: "chocolate", hint: "A sweet, typically brown food" },
    { word: "camera", hint: "A device used to capture images" },
    { word: "cactus", hint: "A spiny desert plant" },
    { word: "keyboard", hint: "A set of keys on a musical instrument or computer" },
    { word: "telephone", hint: "A device used for communication" },
    { word: "tiger", hint: "A large carnivorous feline" },
    { word: "painting", hint: "A visual art form" },
    { word: "pineapple", hint: "A tropical fruit with a spiky skin" },
    { word: "piano", hint: "A musical instrument with keys" },
    { word: "fireworks", hint: "Explosive devices used for entertainment" },
    { word: "sunrise", hint: "The time when the sun appears above the horizon" },
    { word: "whale", hint: "A large marine mammal" },
    { word: "squirrel", hint: "A small rodent with a bushy tail" },
    { word: "globe", hint: "A spherical representation of the Earth" },
    { word: "dragonfly", hint: "An insect with transparent wings" },
    { word: "waterfall", hint: "A cascade of water" },
    { word: "firefighter", hint: "A person who extinguishes fires" },
    { word: "backpack", hint: "A bag worn on the back" },
    { word: "octopus", hint: "A sea creature with eight arms" },
    { word: "rainforest", hint: "A dense forest with high rainfall" },
    { word: "polarbear", hint: "A large bear native to the Arctic" },
    { word: "puzzle", hint: "A game or toy that tests one's ingenuity" },
    { word: "garden", hint: "A plot of ground where plants are cultivated" },
    { word: "paintbrush", hint: "A tool used for applying paint" },
    { word: "treasure", hint: "Valuables hidden underground or in a secret place" },
    { word: "superhero", hint: "A fictional character with superhuman abilities" },
    { word: "robot", hint: "A machine capable of carrying out complex actions" },
    { word: "rainbow", hint: "A spectrum of light appearing in the sky" },
    { word: "sunshine", hint: "Direct sunlight" },
    { word: "moonlight", hint: "Light from the moon" },
    { word: "starfish", hint: "A marine echinoderm with five arms" },
    { word: "raincoat", hint: "Waterproof outerwear worn in rainy weather" },
    { word: "butterfly", hint: "An insect with colorful wings" },
    { word: "mermaid", hint: "A mythical sea creature with the upper body of a human and the tail of a fish" },
    { word: "ostrich", hint: "A large flightless bird with long legs" },
    { word: "volcano", hint: "A mountain with a vent that emits lava" },
    { word: "dinosaur", hint: "An extinct reptile from the Mesozoic era" },
    { word: "snowflake", hint: "A unique ice crystal" },
    { word: "dragon", hint: "A mythical creature resembling a large reptile" },
    { word: "unicorn", hint: "A mythical horse-like creature with a single horn" },
    { word: "wizard", hint: "A person who practices magic" },
    { word: "magic", hint: "Supernatural or mystical power" },
    { word: "castle", hint: "A fortified residence of a noble or royal family" },
    { word: "knight", hint: "A medieval mounted soldier" },
    { word: "princess", hint: "A daughter of a monarch" },
    { word: "fairy", hint: "A mythical being with magical powers" },
    { word: "monster", hint: "A large, ugly, and frightening imaginary creature" },
    { word: "zoo", hint: "A place where live animals are kept for public viewing" },
    { word: "jungle", hint: "A dense tropical forest" },
    { word: "desert", hint: "A barren area of land with little or no vegetation" },
    { word: "oasis", hint: "A fertile spot in a desert where water is found" },
    { word: "tornado", hint: "A violent rotating column of air" },
    { word: "hurricane", hint: "A severe tropical cyclone" },
    { word: "earthquake", hint: "A sudden and violent shaking of the ground" },
    { word: "tsunami", hint: "A long high sea wave caused by an earthquake" },
    { word: "avalanche", hint: "A sudden and powerful rush of snow down a mountainside" },
    { word: "meteor", hint: "A small body of matter from outer space that enters the Earth's atmosphere" },
    { word: "comet", hint: "A celestial object consisting of a nucleus of ice and dust" },
    { word: "galaxy", hint: "A system of millions or billions of stars" },
    { word: "spaceship", hint: "A vehicle designed for travel in outer space" },
    { word: "rocket", hint: "A cylindrical projectile that can be propelled to a great height or distance" },
    { word: "astronaut", hint: "A person trained for traveling in space" },
    { word: "asteroid", hint: "A small rocky body orbiting the sun" },
    { word: "satellite", hint: "An artificial body placed in orbit around the Earth or moon" },
    { word: "supernova", hint: "A stellar explosion that briefly outshines an entire galaxy" },
    { word: "wormhole", hint: "A hypothetical tunnel-like structure linking disparate points in space-time" },
    { word: "gravity", hint: "The force that attracts a body toward the center of the Earth" },
    { word: "lunar", hint: "Relating to the moon" },
    { word: "solar", hint: "Relating to the sun" },
    { word: "cosmic", hint: "Relating to the universe" },
    { word: "galactic", hint: "Relating to a galaxy" },
    { word: "orbit", hint: "The curved path of a celestial object around a star, planet, or moon" },
    { word: "constellation", hint: "A group of stars forming a recognizable pattern" },
    { word: "telescope", hint: "An optical instrument used to observe distant objects" },
    { word: "observatory", hint: "A building or place equipped and used for observing astronomical phenomena" },
    { word: "universe", hint: "All existing matter and space considered as a whole" },
    { word: "lightyear", hint: "The distance light travels in one year" },
    { word: "solar system", hint: "The collection of eight planets and their moons in orbit around the sun" },
    { word: "planetarium", hint: "A theater or hall with an overhead dome displaying a simulated image of the night sky" },
    { word: "milky way", hint: "The galaxy containing our solar system" },
    { word: "nebula", hint: "A cloud of gas and dust in outer space" },
    { word: "asteroid belt", hint: "A region of space between the orbits of Mars and Jupiter" },
    { word: "big bang", hint: "The rapid expansion of matter from a state of extremely high density and temperature" },
    { word: "dark matter", hint: "Nonluminous material that is postulated to exist in space" },
    { word: "quasar", hint: "An intensely bright and distant point-like source of light in the universe" },
    { word: "neutron star", hint: "A celestial object resulting from the collapse of a massive star" },
    { word: "black hole", hint: "A region of space having a gravitational field so intense that no matter or radiation can escape" },
    { word: "galactic cluster", hint: "A large grouping of galaxies held together by their mutual gravitational attraction" },
    { word: "space station", hint: "A large spacecraft in orbit around the Earth" },
    { word: "alien", hint: "A being from another planet" },
    { word: "extraterrestrial", hint: "Relating to or originating from outside the Earth" },
    { word: "UFO", hint: "Unidentified Flying Object" },
    { word: "abduction", hint: "The action of forcibly taking someone away against their will" },
    { word: "encounter", hint: "A meeting, especially one that is unplanned or unexpected" },
    { word: "paranormal", hint: "Beyond the range of normal experience or scientific explanation" },
    { word: "crop circles", hint: "Patterns created by the flattening of crops such as wheat or barley" },
    { word: "Bermuda Triangle", hint: "An area in the western part of the North Atlantic Ocean where ships and planes are said to disappear mysteriously" },
    { word: "ghost", hint: "The soul of a dead person that appears to the living" },
    { word: "witch", hint: "A person who practices magic or sorcery" },
    { word: "vampire", hint: "A mythical or folkloric creature that feeds on the blood of the living" },
    { word: "werewolf", hint: "A person who transforms into a wolf or a wolflike creature" },
    { word: "zombie", hint: "A dead person who is reanimated and behaves like a mindless automaton" },
    { word: "demon", hint: "An evil spirit or devil" },
    { word: "sasquatch", hint: "A large, hairy, humanlike creature reputed to inhabit remote forests" },
    { word: "loch ness monster", hint: "A mythical creature said to inhabit Loch Ness in Scotland" },
    { word: "chupacabra", hint: "A legendary creature in the folklore of parts of the Americas, reputed to attack and drink the blood of livestock" },
    { word: "mothman", hint: "A creature reportedly seen in the Point Pleasant area of West Virginia" },
    { word: "yeti", hint: "A large, hairy, apelike creature resembling a human or bear, said to inhabit the Himalayas" },
    { word: "Baba Yaga", hint: "A supernatural being in Slavic folklore" },
    { word: "kraken", hint: "A legendary sea monster of giant size" },
    { word: "atlantis", hint: "A legendary island first mentioned by Plato" },
    { word: "el dorado", hint: "A legendary city of gold" },
    { word: "shangri-la", hint: "A fictional place of complete bliss, delight, and peace" },
    { word: "avalon", hint: "A legendary island in the Arthurian legend" },
    { word: "midas touch", hint: "The ability to turn everything one touches into gold" },
    { word: "fountain of youth", hint: "A legendary spring believed to restore youth" },
    { word: "holy grail", hint: "A cup or chalice that in medieval legend was associated with unusual powers" },
    { word: "excalibur", hint: "The legendary sword of King Arthur" },
    { word: "sword in the stone", hint: "The sword that only the rightful king of Britain can remove from the stone" },
    { word: "king arthur", hint: "Legendary British leader of the late 5th and early 6th centuries" },
    { word: "camelot", hint: "Legendary castle of King Arthur" },
    { word: "round table", hint: "A table around which King Arthur and his knights were said to sit" },
    { word: "guinevere", hint: "Legendary queen of King Arthur" },
    { word: "merlin", hint: "Legendary wizard and advisor to King Arthur" },
    { word: "lancelot", hint: "One of the knights of the Round Table and the lover of Queen Guinevere" },
    { word: "percival", hint: "One of the Knights of the Round Table, associated with the quest for the Holy Grail" },
    { word: "galahad", hint: "A knight of King Arthur's Round Table, renowned for his gallantry and purity" },
    { word: "tristan", hint: "A knight of the Round Table and lover of Isolde" },
    { word: "mordred", hint: "A knight of the Round Table who is a traitor to King Arthur" },
    { word: "gawain", hint: "A knight of King Arthur's Round Table and the nephew of King Arthur" },
    { word: "grail quest", hint: "The search for the Holy Grail undertaken by King Arthur's knights" },
    { word: "holy lance", hint: "A lance that pierced the side of Jesus during his crucifixion" },
    { word: "siege perilous", hint: "The seat at the Round Table reserved for the knight who would find the Holy Grail" },
    { word: "bible", hint: "The sacred scriptures of Christianity" },
    { word: "quran", hint: "The holy book of Islam" },
    { word: "torah", hint: "The central reference of the religious Judaic tradition" },
    { word: "vedas", hint: "The oldest scriptures of Hinduism" },
    { word: "tripitaka", hint: "The traditional term for Buddhist scriptures" },
    { word: "bhagavad gita", hint: "A 700-verse Hindu scripture that is part of the Indian epic Mahabharata" },
    { word: "ramayana", hint: "An ancient Indian epic poem" },
    { word: "mahabharata", hint: "One of the two major Sanskrit epics of ancient India" },
    { word: "tao te ching", hint: "A fundamental text for both philosophical and religious Taoism" },
    { word: "kabbalah", hint: "A form of Jewish mysticism" },
    { word: "gospel", hint: "The teachings or revelation of Jesus Christ" },
    { word: "dead sea scrolls", hint: "Ancient Jewish religious manuscripts found in the Qumran Caves near the Dead Sea" },
    { word: "sutra", hint: "A sacred text of Buddhism" },
    { word: "confucianism", hint: "A system of philosophical and ethical teachings founded by Confucius" },
    { word: "shinto", hint: "The traditional religion of Japan" },
    { word: "vedanta", hint: "A school of Hindu philosophy based on the Vedas" },
    { word: "buddhism", hint: "A religion and dharma that encompasses a variety of traditions, beliefs, and spiritual practices" },
    { word: "hinduism", hint: "The world's third-largest religion, characterized by a belief in reincarnation" },
    { word: "judaism", hint: "The monotheistic religion of the Jews, based on the Hebrew Bible" },
    { word: "islam", hint: "The second-largest religion in the world, based on the teachings of Muhammad" },
    { word: "christianity", hint: "The religion based on the person and teachings of Jesus Christ" },
    { word: "agnostic", hint: "A person who believes that nothing is known or can be known of the existence or nature of God" },
    { word: "atheist", hint: "A person who disbelieves or lacks belief in the existence of God or gods" },
    { word: "deist", hint: "A person who believes in the existence of a supreme being, specifically of a creator who does not intervene in the universe" },
    { word: "theist", hint: "A person who believes in the existence of a god or gods" },
    { word: "pantheist", hint: "A person who believes that God and the universe are identical" },
    { word: "humanist", hint: "A person who believes in the philosophy or practice of humanism" },
    { word: "monotheism", hint: "The belief in the existence of only one God" },
    { word: "polytheism", hint: "The belief in or worship of more than one god" },
    { word: "animism", hint: "The attribution of a soul to plants, inanimate objects, and natural phenomena" },
    { word: "spiritualism", hint: "A belief that spirits of the dead have both the ability and the inclination to communicate with the living" },
    { word: "yin and yang", hint: "In Chinese philosophy, the two complementary principles that together create a dynamic system" },
    { word: "tao", hint: "The absolute principle underlying the universe, combining within itself the principles of yin and yang" },
    { word: "zen", hint: "A Japanese school of Mahayana Buddhism emphasizing the value of meditation" },
    { word: "samsara", hint: "The cycle of death and rebirth to which life in the material world is bound" },
    { word: "enlightenment", hint: "A state of perfect knowledge or wisdom" },
    { word: "asceticism", hint: "The practice of severe self-discipline and abstention from all forms of indulgence" },
    { word: "buddha", hint: "The founder of Buddhism, also known as Siddhartha Gautama" },
    { word: "guru", hint: "A spiritual teacher or guide" },
    { word: "mantra", hint: "A word or sound repeated to aid concentration in meditation" },
    { word: "mandala", hint: "A geometric figure representing the universe" },
    { word: "om", hint: "A mystic syllable, considered the most sacred mantra in Hinduism and Tibetan Buddhism" },
    { word: "dharma", hint: "The principle of cosmic order" },
    { word: "karma", hint: "The sum of a person's actions in this and previous states of existence, viewed as deciding their fate in future existences" },
    { word: "bodhisattva", hint: "In Buddhism, a person who is able to reach nirvana but delays doing so out of compassion in order to save suffering beings" },
    { word: "tantra", hint: "A Hindu or Buddhist mystical or ritual text, typically written in Sanskrit" },
    { word: "qigong", hint: "A Chinese system of physical exercises and breathing control related to tai chi" },
    { word: "pranayama", hint: "Control of the breath" },
    { word: "acupuncture", hint: "A system of complementary medicine that involves pricking the skin or tissues with needles" },
    { word: "ayurveda", hint: "A system of traditional medicine native to the Indian subcontinent" },
    { word: "qi", hint: "The circulating life force whose existence and properties are the basis of much Chinese philosophy and medicine" },
    { word: "yoga", hint: "A Hindu spiritual and ascetic discipline, a part of which, including breath control, simple meditation, and the adoption of specific bodily postures, is widely practiced for health and relaxation" },
    { word: "reiki", hint: "A healing technique based on the principle that the therapist can channel energy into the patient by means of touch, to activate the natural healing processes of the patient's body and restore physical and emotional well-being" },
    { word: "herbalism", hint: "The study or practice of the medicinal and therapeutic use of plants" },
    { word: "holistic", hint: "Characterized by the treatment of the whole person, taking into account mental and social factors, rather than just the symptoms of a disease" },
    { word: "homeopathy", hint: "A system of alternative medicine based on the principle that 'like cures like'" },
    { word: "meditation", hint: "The practice of focusing the mind to achieve a mentally clear and emotionally calm state" },
    { word: "mindfulness", hint: "The quality or state of being conscious or aware of something" },
    { word: "chiropractic", hint: "A system of complementary medicine based on the diagnosis and manipulative treatment of misalignments of the joints, especially those of the spinal column" },
    { word: "aromatherapy", hint: "The use of aromatic plant extracts and essential oils in massage or baths" },
    { word: "hypnosis", hint: "The induction of a state of consciousness in which a person apparently loses the power of voluntary action and is highly responsive to suggestion or direction" },
    { word: "biofeedback", hint: "The technique of making unconscious or involuntary bodily processes perceptible to the senses in order to manipulate them by conscious mental control" },
    { word: "naturopathy", hint: "A system of alternative medicine based on the theory that diseases can be successfully treated or prevented without the use of drugs" },
    { word: "reflexology", hint: "A system of massage used to relieve tension and treat illness, based on the theory that there are reflex points on the feet, hands, and head linked to every part of the body" },
    { word: "shiatsu", hint: "A form of Japanese bodywork in which localized finger pressure is applied to specific points on the body" },
    { word: "tarot", hint: "A set of cards used in fortune-telling" },
    { word: "astrology", hint: "The study of the movements and relative positions of celestial bodies interpreted as having an influence on human affairs and the natural world" },
    { word: "numerology", hint: "The branch of knowledge that deals with the occult significance of numbers" },
    { word: "palmistry", hint: "The practice of reading palms to assess character or to foretell the future" },
    { word: "crystal healing", hint: "A holistic and non-invasive energy-based system of healing that taps into the energetic power of crystals and gemstones" },
    { word: "pendulum", hint: "A weight hung from a fixed point so that it can swing freely, used to regulate the movement of a clock" },
    { word: "dowsing", hint: "The practice of using a rod, pendulum, or other instrument to locate underground water, minerals, or other hidden or lost substances" },
    { word: "aura", hint: "A supposed emanation surrounding the body of a living creature and regarded as an essential part of the individual" },
    { word: "chi", hint: "The circulating life force whose existence and properties are the basis of much Chinese philosophy and medicine" },
    { word: "chakra", hint: "Each of the centers of spiritual power in the human body" },
    { word: "feng shui", hint: "The Chinese art or practice of positioning objects, buildings, and landscapes in order to achieve harmony with nature" },
    { word: "chi", hint: "The circulating life force whose existence and properties are the basis of much Chinese philosophy and medicine" },
    { word: "synchronicity", hint: "The simultaneous occurrence of events that appear significantly related but have no discernible causal connection" },
    { word: "clairvoyance", hint: "The supposed faculty of perceiving things or events in the future or beyond normal sensory contact" },
    { word: "telepathy", hint: "The supposed communication of thoughts or ideas by means other than the known senses" },
    { word: "precognition", hint: "Knowledge of a future event or situation, especially through extrasensory means" },
    { word: "psychokinesis", hint: "The supposed ability to move objects by mental effort alone" },
    { word: "remote viewing", hint: "The supposed ability to gather information about a distant or unseen target without the use of the normal five senses" },
    { word: "medium", hint: "A person claiming to be in contact with the spirits of the dead and to communicate between the dead and the living" },
    { word: "channeling", hint: "The practice of purportedly entering a meditative or trancelike state in order to convey messages from a spiritual guide" },
    { word: "poltergeist", hint: "A ghost or other supernatural being supposedly responsible for physical disturbances" },
    { word: "reincarnation", hint: "The rebirth of a soul in a new body" },
    { word: "past life regression", hint: "A technique that uses hypnosis to recover memories of past lives" },
    { word: "haunted", hint: "Inhabited by or as if by apparitions" },
    { word: "ectoplasm", hint: "A supposed spiritual substance that exudes from the body of a medium during a trance and forms the material for the manifestation of spirits" },
    { word: "parapsychology", hint: "The study of mental phenomena that are excluded from or inexplicable by orthodox scientific psychology" },
    { word: "ghost hunting", hint: "The investigation of locations reported to be haunted by ghosts" },
    { word: "seance", hint: "A meeting at which people attempt to make contact with the dead, especially through the agency of a medium" },
    { word: "haunted house", hint: "A building believed to be a center for supernatural occurrences" },
    { word: "spirits", hint: "A supernatural, incorporeal being, especially one inhabiting a place or object" },
    { word: "exorcism", hint: "The expulsion or attempted expulsion of an evil spirit from a person or place" }    
];

// Function to select a random word and its hint
function selectRandomWordAndHint() {
    const randomIndex = Math.floor(Math.random() * wordsAndHints.length);
    return wordsAndHints[randomIndex];
}

// Function to start a new game
function newGame() {
    // Reset variables
    const selectedWordAndHint = selectRandomWordAndHint();
    word = selectedWordAndHint.word.toUpperCase();
    guessedWord = Array(word.length).fill("_");
    guessedLetters = [];
    guessesLeft = 6;
    gameInProgress = true;

    // Output word to console
    console.log("Selected word:", word);

    // Display underscores
    document.getElementById("wordContainer").textContent = guessedWord.join(" ");

    // Display hint
    document.getElementById("hintContainer").textContent = "Hint: " + selectedWordAndHint.hint;

    // Reset hangman view
    document.getElementById("hangmanView").textContent = "";

    // Reset guesses left
    document.getElementById("guesses").textContent = guessesLeft;

    // Clear lettersContainer
    document.getElementById("lettersContainer").innerHTML = "";

    // Add event listeners to letters
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i);
        let button = document.createElement("button");
        button.textContent = letter;
        button.addEventListener("click", function() {
            checkLetter(letter); // Convert to uppercase inside checkLetter
            this.disabled = true;
        });
        document.getElementById("lettersContainer").appendChild(button);
    }
}

// Function to check if guessed letter is in the word
function checkLetter(letter) {
    if (!gameInProgress || guessedLetters.includes(letter)) {
        return; // No guesses allowed if game is not in progress or letter has already been guessed
    }

    guessedLetters.push(letter);

    let found = false;
    for (let i = 0; i < word.length; i++) {
        // Check if the current character is a letter or a space
        if (word[i] === letter || word[i] === ' ') {
            guessedWord[i] = word[i]; // Reveal the letter or space
            found = true;
        }
    }

    if (!found) {
        guessesLeft--;
        document.getElementById("guesses").textContent = guessesLeft;
        // Update hangman view
        document.getElementById("hangmanView").textContent = hangmanStages[7 - guessesLeft];
    }

    document.getElementById("wordContainer").textContent = guessedWord.join(" ");

    if (guessedWord.join("") === word) {
        endGame("Congratulations! You've won!");
    } else if (guessesLeft === 0) {
        endGame("Game over! The word was: " + word);
    }
}

// Function to disable all buttons
function disableButtons() {
    let buttons = document.querySelectorAll("#lettersContainer button");
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Function to handle keyboard input
function handleKeyDown(event) {
    const key = event.key.toUpperCase();
    if (/[A-Z]/.test(key)) {
        const button = document.querySelector(`#lettersContainer button:nth-child(${key.charCodeAt(0) - 64})`);
        if (button) {
            button.click();
        }
    }
}

// Function to display a message with animation
function showAlertWithAnimation(message) {
    const alertMessage = document.createElement("div");
    alertMessage.textContent = message;
    alertMessage.classList.add("fade-in");
    alertMessage.style.fontSize = "24px"; // Adjust font size as needed
    document.body.appendChild(alertMessage);
    setTimeout(() => {
        alertMessage.remove();
    }, 3000);
}

// Function to handle the end of the game
function endGame(message) {
    gameInProgress = false;
    disableButtons();
    showAlertWithAnimation(message);
}

// Start new game
newGame();

// Event listener for the "New Game" button
document.getElementById("newGameButton").addEventListener("click", newGame);

// Event listener for keyboard input
document.body.addEventListener("keydown", handleKeyDown);
