const dictionary = {

    "business": {
        definition: "An organization that produces or sells goods or services to satisfy the needs and wants of consumers.",
        example: "A grocery store, restaurant, or clothing store."
    },

    "profit business": {
        definition: "A business that produces or sells goods or services with the goal of making a profit.",
        example: "Walmart or McDonald's."
    },

    "not-for-profit organization": {
        definition: "An organization that is organized to help people in the community rather than make a profit.",
        example: "A charity."
    },

    "goods": {
        definition: "Physical products.",
        example: "Food, clothing, and electronics."
    },

    "services": {
        definition: "Activities provided to meet a need or want.",
        example: "Haircuts, banking, and transportation."
    },

    "tangible": {
        definition: "Physical things that can be touched.",
        example: "A phone, chair, or car."
    },

    "intangible": {
        definition: "Things that cannot be physically touched, such as services or experiences.",
        example: "A haircut or a concert."
    },

    "producers": {
        definition: "The providers of goods and services.",
        example: "A company that makes and sells phones."
    },

    "consumers": {
        definition: "People who buy goods and services.",
        example: "A person buying a phone."
    },

    "competition": {
        definition: "When companies compete with each other to sell goods or services to consumers.",
        example: "Coca-Cola and Pepsi."
    },

    "entrepreneur": {
        definition: "A person who starts and operates a business.",
        example: "Someone who starts their own clothing company."
    },

    "needs": {
        definition: "Things that are necessary for people to live and function.",
        example: "Food, water, and shelter."
    },

    "wants": {
        definition: "Things that people desire but do not necessarily need.",
        example: "Video games or expensive clothing."
    },

    "profit": {
        definition: "The income left over after all costs and expenses have been paid.",
        example: "If a business earns $1,000 and spends $700, its profit is $300."
    },

    "expenses": {
        definition: "The costs involved in running a business.",
        example: "Rent, wages, and electricity."
    },

    "costs": {
        definition: "The amount of money required to produce or provide a good or service.",
        example: "The cost of raw materials."
    },

    "market economy": {
        definition: "An economy where consumers and producers make most economic decisions.",
        example: "Businesses decide what to produce based on what consumers want."
    },

    "command economy": {
        definition: "An economy where the government makes most economic decisions.",
        example: "The government decides what goods should be produced."
    },

    "mixed economy": {
        definition: "An economy that combines features of a market economy and a command economy.",
        example: "Canada."
    },

    "factors of production": {
        definition: "The resources needed to produce goods and services.",
        example: "Natural resources, human resources, capital resources, and entrepreneurship."
    },

    "natural resources": {
        definition: "Resources provided by nature that are used to produce goods and services.",
        example: "Water, trees, minerals, and oil."
    },

    "human resources": {
        definition: "The people and labour used to produce goods and services.",
        example: "Teachers, construction workers, and doctors."
    },

    "capital resources": {
        definition: "Physical resources used to produce goods and services.",
        example: "Machines, computers, factories, and tools."
    },

    "entrepreneurship": {
        definition: "The process of organizing resources and taking risks to start and operate a business.",
        example: "Starting and managing a new restaurant."
    },

    "sole proprietorship": {
        definition: "A business owned and operated by one person who has unlimited liability.",
        example: "A person who owns their own hair salon."
    },

    "partnership": {
        definition: "A business owned by two or more people who share responsibilities, profits, and losses.",
        example: "Two people opening a restaurant together."
    },

    "corporation": {
        definition: "A business that is legally separate from its owners.",
        example: "Apple."
    },

    "shareholder": {
        definition: "An individual who owns shares of a corporation.",
        example: "A person who owns shares in a company."
    },

    "board of directors": {
        definition: "A group of people elected by shareholders to oversee a corporation.",
        example: "The board makes major decisions for a corporation."
    },

    "types of corporations": {
        definition: "Corporations can be private, public, crown, or municipal.",
        example: "A public corporation has shares available for the public to buy."
    },

    "economies of scale": {
        definition: "When the cost per unit decreases as production increases.",
        example: "A large factory can produce products at a lower cost per item."
    },

    "franchisor": {
        definition: "The company that gives another person the right to operate a franchise.",
        example: "McDonald's is a franchisor."
    },

    "franchisee": {
        definition: "The person who purchases the right to operate a franchise.",
        example: "A person who owns and operates a McDonald's location."
    },

    "franchise": {
        definition: "A business arrangement where a person operates a business using another company's name, products, and system.",
        example: "A McDonald's restaurant operated by a franchisee."
    },

    "equity": {
        definition: "Ownership in a business.",
        example: "A shareholder's ownership in a corporation represents equity."
    },

    "primary industries": {
        definition: "Industries that extract or collect natural resources.",
        example: "Farming, fishing, mining, and forestry."
    },

    "manufacturing industries": {
        definition: "Industries that turn raw materials into finished products.",
        example: "A factory that makes cars."
    },

    "service industries": {
        definition: "Industries that provide services to consumers or other businesses.",
        example: "Banking, education, and healthcare."
    },

    "globalization": {
        definition: "The increasing connection between countries and their economies.",
        example: "A Canadian company selling products in other countries."
    },

    "protectionism": {
        definition: "Government actions that protect domestic businesses from foreign competition.",
        example: "Putting a tariff on imported goods."
    },

    "unlimited liability": {
        definition: "The owner is personally responsible for all business debts.",
        example: "A sole proprietor may have to use personal assets to pay business debts."
    },

    "limited liability": {
        definition: "The owner's personal responsibility for business debts is limited.",
        example: "Shareholders of a corporation generally have limited liability."
    }

};


// ==========================================
// SEARCH MODE
// ==========================================

function searchDictionary() {

    let searchTerm =
        document.getElementById("searchBox").value
        .toLowerCase()
        .trim();

    let result =
        document.getElementById("result");

    if (dictionary[searchTerm]) {

        result.innerHTML =
            "<h2>" + searchTerm + "</h2>" +
            "<p><strong>Definition:</strong> " +
            dictionary[searchTerm].definition +
            "</p>" +
            "<p><strong>Example:</strong> " +
            dictionary[searchTerm].example +
            "</p>";

    } else {

        result.innerHTML =
            "<p>Sorry, I couldn't find that term.</p>" +
            "<p>Try clicking <strong>View All Terms</strong> to see the available terms.</p>";

    }
}


// ==========================================
// VIEW ALL TERMS
// ==========================================

function viewAllTerms() {

    let result =
        document.getElementById("result");

    let output =
        "<h2>All Business Terms</h2>";

    let terms =
        Object.keys(dictionary);

    terms.sort();

    for (let i = 0; i < terms.length; i++) {

        output +=
            "<div class='term'>" +
            "<h3>" + terms[i] + "</h3>" +
            "<p><strong>Definition:</strong> " +
            dictionary[terms[i]].definition +
            "</p>" +
            "<p><strong>Example:</strong> " +
            dictionary[terms[i]].example +
            "</p>" +
            "</div>";

    }

    result.innerHTML = output;
}


// ==========================================
// SWITCH MODES
// ==========================================

function showSearch() {

    document.getElementById("searchMode").style.display = "block";

    document.getElementById("quizMode").style.display = "none";

}


function showQuiz() {

    document.getElementById("searchMode").style.display = "none";

    document.getElementById("quizMode").style.display = "block";

    startQuiz();

}


// ==========================================
// QUIZ MODE
// ==========================================

let quizTerms = Object.keys(dictionary);

let currentTerm;

let score = 0;

let questionNumber = 0;

let usedTerms = [];


// ==========================================
// START QUIZ
// ==========================================

function startQuiz() {

    score = 0;

    questionNumber = 0;

    usedTerms = [];

    document.getElementById("quizResult").innerHTML = "";

    document.getElementById("nextButton").innerHTML =
        "Next Question";

    nextQuestion();

}


// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {

    if (questionNumber >= 10) {

        showFinalScore();

        return;

    }


    document.getElementById("quizResult").innerHTML = "";


    questionNumber++;


    let availableTerms =
        quizTerms.filter(function(term) {

            return !usedTerms.includes(term);

        });


    let randomNumber =
        Math.floor(
            Math.random() * availableTerms.length
        );


    currentTerm =
        availableTerms[randomNumber];


    usedTerms.push(currentTerm);


    document.getElementById("question").innerHTML =

        "Question " +
        questionNumber +
        " of 10<br><br>" +

        "Which term matches this definition?<br><br>" +

        "<strong>" +
        dictionary[currentTerm].definition +
        "</strong>";


    createAnswers();


    document.getElementById("score").innerHTML =

        "Score: " +
        score +
        " / " +
        (questionNumber - 1);

}


// ==========================================
// CREATE ANSWERS
// ==========================================

function createAnswers() {

    let answers = [currentTerm];


    while (answers.length < 4) {

        let randomAnswer =
            quizTerms[
                Math.floor(
                    Math.random() * quizTerms.length
                )
            ];


        if (!answers.includes(randomAnswer)) {

            answers.push(randomAnswer);

        }

    }


    answers.sort(
        () => Math.random() - 0.5
    );


    let answerArea =
        document.getElementById("answers");


    answerArea.innerHTML = "";


    for (let i = 0; i < answers.length; i++) {

        let button =
            document.createElement("button");


        button.innerHTML =
            answers[i];


        button.className =
            "answerButton";


        button.onclick = function() {

            checkAnswer(answers[i]);

        };


        answerArea.appendChild(button);

    }

}


// ==========================================
// CHECK ANSWER
// ==========================================

function checkAnswer(answer) {

    if (answer === currentTerm) {

        score++;

        document.getElementById("quizResult").innerHTML =
            "Correct!";

    } else {

        document.getElementById("quizResult").innerHTML =
            "Not quite! The correct answer was: " +
            currentTerm;

    }


    document.getElementById("score").innerHTML =

        "Score: " +
        score +
        " / " +
        questionNumber;


    let buttons =
        document.getElementsByClassName("answerButton");


    for (let i = 0; i < buttons.length; i++) {

        buttons[i].disabled = true;

    }

}


// ==========================================
// FINAL SCORE
// ==========================================

function showFinalScore() {

    let percentage =
        (score / 10) * 100;


    document.getElementById("question").innerHTML =
        "Quiz Complete!";


    document.getElementById("answers").innerHTML =
        "";


    document.getElementById("quizResult").innerHTML =

        "You scored " +
        score +
        " / 10 (" +
        percentage +
        "%)";


    document.getElementById("score").innerHTML =
        "Try again to beat your score!";


    document.getElementById("nextButton").innerHTML =
        "Try Again";

}