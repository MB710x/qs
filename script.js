const questions = [
    {
        question: "What are two of the main enrichment tasks performed in Bloomberg?",
        answers: [
            { text: "Classification and Entity Linking", correct: true },
            { text: "Question Answering (QA) and Time Series Forecasting (TSF)", correct: false },
            { text: "Information Extraction (IE) and Entity Linking", correct: false },
            { text: "Autocomplete and Question Answering (QA)", correct: false }
        ]
    },
    {
        question: "In this example, where an 18 chat is auto populates an inquiry ticket, what parts of EESS is being demonstrated here?",
        answers: [
            { text: "Extraction and Enrichment", correct: true },
            { text: "Extraction and Summarization", correct: false },
            { text: "Enrichment and Summarization", correct: false },
            { text: "Entity Linking and Enrichment", correct: false }
        ]
    },
    {
        question: "This Al task requires extensive domain expertise, testing and resources to achieve accuracy of a Knowledge Base which contains information about how well-known concepts connect to one another",
        answers: [
            { text: "Entity Linking", correct: true },
            { text: "Classification", correct: false },
            { text: "Information Retrieval", correct: false },
            { text: "Search", correct: false }
        ]
    },
    {
        question: "Which of these Bloomberg functions are examples of Search?",
        answers: [
            { text: "TREN", correct: false },
            { text: "DS", correct: true },
            { text: "ESGD", correct: false },
            { text: "SEAR/HL", correct: true }
        ]
    },
    {
        question: "Where is Time Series Forecasting applied at Bloomberg?",
        answers: [
            { text: "ECFC", correct: false },
            { text: "IBVAL", correct: false },
            { text: "FXFC", correct: false },
            { text: "GDSF 2.0", correct: false },
            { text: "BDVD", correct: true },
            { text: "BVAL", correct: false }
        ]
    },
    {
        question: "Your customer wants an explanation of how Al is used in DS[GO], where can you find a good explanation for this? Select all that apply:",
        answers: [
            { text: "AIBB >> How we use AI >> By the numbers", correct: false },
            { text: "AIBB >> Our approach to Building AI", correct: false },
            { text: "AIBB >> More on Al in Functions", correct: true },
            { text: "AIBB >> FAQ", correct: false }
        ]
    },
    {
        question: "Why is Al in Financial Markets more difficult to build than generic Al tools?",
        answers: [
            { text: "Financial Markets require high standards of accuracy", correct: true },
            { text: "Financial Markets are highly technical, nuanced and contextual", correct: true },
            { text: "To build reliable models, News, Data, Product and Engineering need to work extremely closely and not many firms have that scale, culture or resource", correct: false },
            { text: "There is insufficient data", correct: false }
        ]
    },
    {
        question: "How do machine learning systems differ from rules-based systems in terms of adaptability?",
        answers: [
            { text: "Machine learning systems rely on fixed rules, while rules-based systems adapt with experience.", correct: false },
            { text: "Machine learning systems can automatically adjust based on new data, whereas rules-based systems require manual updates to rules.", correct: true },
            { text: "Rules-based systems are more flexible and adaptive compared to machine learning systems. Both machine learning and rules-based systems adapt equally to new data without manual input.", correct: false }
        ]
    },
    {
        question: "Which of the following is a use case of Natural Language Processing {NLP) in financial markets?",
        answers: [
            { text: "Calculating the time it takes to execute a trade", correct: false },
            { text: "Analyzing sentiment from news articles to predict stock movements", correct: true },
            { text: "Creating visual charts from stock price data", correct: false },
            { text: "By ignoring potential outcomes and personal experience in decision making", correct: false }
        ]
    },
    {
        question: "What is Information Retrieval {IR) and why is it important in financial markets?",
        answers: [
            { text: "NLP is specifically used to analyze and interpret text data, such as news articles or financial reports, to predict how these might influence market behavior. The other options involve tasks that are more related to data analysis or market metrics, not NLP. IR involves managing and interpreting large sets of financial data for forecasting market trends, which is essential for making informed trading decisions.", correct: false },
            { text: "IR is the process of obtaining relevant information from large repositories of data and is crucial in financial markets for timely access to information, market analysis, risk management, algorithmic trading, and regulatory compliance.", correct: true },
            { text: "IR focuses on the storage and security of financial data, ensuring that financial institutions' data is protected from unauthorized access.", correct: false },
            { text: "IR is primarily used for customer relationship management (CRM) to enhance the interaction between financial institutions and their clients.", correct: false }
        ]
    },
    {
        question: "What are the principles of time series forecasting?",
        answers: [
            { text: "Understanding components like trend, seasonality, and patterns, and applying statistical techniques and machine learning algorithms to learn relationships within the data", correct: true },
            { text: "Utilizing blockchain technology to secure financial data and transactions.", correct: false },
            { text: "Focusing on optimizing customer service interactions through AI chatbots in financial institutions.", correct: false },
            { text: "Implementing agile project management methodologies for financial forecasting.", correct: false }
        ]
    },
    {
        question: "Which of the following is most likely to be unstructured data?",
        answers: [
            { text: "Flight schedules", correct: false },
            { text: "Ingredients for baking bread", correct: false },
            { text: "The breeds of entrants in a dog show", correct: false },
            { text: "Social media posts", correct: true },
            { text: "News", correct: true },
            { text: "Earnings reports", correct: true }
        ]
    },
    {
        question: "Which method of learning does an Al system use when it uses the process of trial and error?",
        answers: [
            { text: "Unsupervised learning", correct: false },
            { text: "Supervised learning", correct: false },
            { text: "Classical conditioning", correct: false },
            { text: "Reinforcement learning", correct: true }
        ]
    },
    {
        question: "Fill in the blank. All supervised learning algorithms need _____ data.",
        answers: [
            { text: "unstructured", correct: false },
            { text: "labelled", correct: true },
            { text: "raw", correct: false },
            { text: "unlabeled", correct: false }
        ]
    },
    {
        question: "Which of the following explains why an Al trained with machine learning can rapidly map the best route between two points on a map?",
        answers: [
            { text: "It performs millions of tiny calculations quickly, trying different routes through trial and error", correct: true },
            { text: "It relies on a complete database of all possible routes through the city", correct: false },
            { text: "It predicts traffic problems based on stored alternative routes for every possible situation", correct: false },
            { text: "It uses predefined programming instructions to navigate through traffic", correct: false }
        ]
    },
    {
        question: "What do the EESS stand for in Bloomberg's Al Pillars?",
        answers: [
            { text: "Extraction, Enrichment, Search, Summarization", correct: true },
            { text: "Enhancement, Extraction, Search, Speech", correct: false },
            { text: "Extraction, Enhancement, Sentiment Analysis, Summarization", correct: false },
            { text: "Enrichment, Entity Linking, Search, Speech", correct: false }
        ]
    },
    {
        question: "Which of the following functions are examples of Generative Al applied within the Terminal?",
        answers: [
            { text: "Transforming natural language queries into valid BQL queries in BQL", correct: true },
            { text: "Document Viewer (DOCV) Insights sidebar which contains a list of trending topics with excerpts surfacing the mentioned topic.", correct: true },
            { text: "Snapshot about any stock, equity or fixed income index, currency, exchange-traded fund etc on AID", correct: false },
            { text: "Company primer on BICO", correct: false }
        ]
    },
    {
        question: "Which statement best highlights the key difference between machine learning and rules-based systems?",
        answers: [
            { text: "Machine learning requires predefined rules for operation, whereas rules-based systems learn from data over time.", correct: false },
            { text: "Machine learning improves performance with more data, while rules-based systems rely on static, manually created rules.", correct: true },
            { text: "Both machine learning and rules-based systems adapt automatically to new data without manual intervention.", correct: false },
            { text: "Rules-based systems are typically more accurate than machine learning models because they follow explicit rules.", correct: false }
        ]
    },
    {
        question: "What is a fundamental difference between machine learning and rules-based systems in terms of operation?",
        answers: [
            { text: "Rules-based systems operate using learned patterns, while machine learning relies on static rules.", correct: false },
            { text: "Machine learning requires continuous input of new data to improve, while rules-based systems function on established rules.", correct: true },
            { text: "Machine learning is less capable of adapting to new data compared to rules-based systems.", correct: false },
            { text: "Both machine learning and rules-based systems depend on predefined manual rules for their operation.", correct: false }
        ]
    },
    {
        question: "Why is Information Retrieval (IR) relevant for banks?",
        answers: [
            { text: "IR helps banks in creating personalized marketing campaigns based on customer preferences.", correct: false },
            { text: "IR ensures the security of online transactions through advanced encryption techniques.", correct: false },
            { text: "IR allows banks to quickly access and analyze vast amounts of financial data, aiding in decision making, risk management, and regulatory compliance.", correct: true },
            { text: "IR is primarily used for managing employee performance and payroll information.", correct: false }
        ]
    },
    {
        question: "Which of the following best describes how machine learning's trial-and-error learning process works?",
        answers: [
            { text: "Machine learning adjusts itself by constantly testing new data against its corpus, making modifications based on established patterns", correct: true },
            { text: "Machine learning relies solely on preset algorithms to generate results without any adjustment or modification", correct: false },
            { text: "Machine learning learns by memorizing all possible outcomes and selecting the most common one as the correct", correct: false },
            { text: "Machine learning makes random adjustments to its algorithms without testing them against existing data", correct: false }
        ]
    },
    {
        question: "If names and email addresses are organized using a spreadsheet software, like Google Sheets or Microsoft Excel, which of type of data is this?",
        answers: [
            { text: "True data", correct: false },
            { text: "Semi-structured data", correct: false },
            { text: "Unstructured data", correct: false },
            { text: "Structured data", correct: true }
        ]
    }
];

function createQuestionList() {
    const questionList = document.getElementById("question-list");
    
    // Sort questions alphabetically (case-insensitive)
    const sortedQuestions = questions.sort((a, b) => 
        a.question.localeCompare(b.question, undefined, {sensitivity: 'base'})
    );
    
    // Create collapse all button
    const collapseAllButton = document.createElement("button");
    collapseAllButton.textContent = "Collapse All";
    collapseAllButton.id = "collapse-all";
    collapseAllButton.addEventListener("click", collapseAllAnswers);
    questionList.parentNode.insertBefore(collapseAllButton, questionList);

    sortedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<h3>${q.question}</h3>`;
        
        const answersDiv = document.createElement("div");
        answersDiv.classList.add("answers");
        answersDiv.style.display = "none"; // Hide answers by default
        
        // Sort answers to put correct ones first
        const sortedAnswers = q.answers.sort((a, b) => b.correct - a.correct);
        
        sortedAnswers.forEach((answer) => {
            const answerDiv = document.createElement("div");
            answerDiv.classList.add("answer");
            if (answer.correct) {
                answerDiv.classList.add("correct");
                answerDiv.innerHTML = `<span class="tick-mark">✓</span> ${answer.text}`;
            } else {
                answerDiv.textContent = answer.text;
            }
            answersDiv.appendChild(answerDiv);
        });
        
        questionDiv.appendChild(answersDiv);
        questionDiv.addEventListener("click", (event) => {
            if (event.target.tagName !== 'H3') return;
            answersDiv.style.display = answersDiv.style.display === "none" ? "block" : "none";
        });
        
        questionList.appendChild(questionDiv);
    });
}

function collapseAllAnswers() {
    const allAnswers = document.querySelectorAll('.answers');
    allAnswers.forEach(answers => {
        answers.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", createQuestionList);

console.log("Script loaded and executed");
