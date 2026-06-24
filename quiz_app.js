const questionBank = [
    { id: 1, text: "Which HTML5 structural layout token wraps standalone, self-contained composition fragments?", options: ["<section>", "<article>", "<aside>", "<div>"], correct: 1, category: "Frontend", difficulty: "Easy" },
    { id: 2, text: "What is the primary function of the CSS property 'flex-shrink' when assigned a value of 0?", options: ["It forces items to expand equally", "It prevents item compression when row constraints overflow", "It hides elements automatically", "It sets structural basis widths"], correct: 1, category: "Frontend", difficulty: "Medium" },
    { id: 3, text: "Which keyword prevents mutation of an array primitive reference block while allowing inner index modifications?", options: ["let", "const", "freeze", "static"], correct: 1, category: "Frontend", difficulty: "Easy" },
    { id: 4, text: "What unique data structure value type does the JavaScript 'Set' object store natively?", options: ["Key-value paired maps exclusively", "Ordered iterative numeric references", "Unique primitive or reference values without duplication", "Cryptographic encrypted byte elements"], correct: 2, category: "Frontend", difficulty: "Medium" },
    { id: 5, text: "What behavioral pattern occurs due to 'Variable Hoisting' when initializing variables using 'var'?", options: ["Throws immediate compilation reference errors", "Initializes declarations to 'undefined' at top of scope bounds", "Locks values directly into local storage profiles", "Restricts functional execution context lookups"], correct: 1, category: "Frontend", difficulty: "Medium" },
    { id: 6, text: "Which mechanism allows deep structural object cloning securely in modern native browser JavaScript context?", options: ["Object.assign()", "JSON.parse(JSON.stringify())", "structuredClone()", "The spread operator (...)"], correct: 2, category: "Frontend", difficulty: "Hard" },
    { id: 7, text: "What happens when executing a function callback argument target enclosed inside a 'setTimeout' delay of 0ms?", options: ["Executes immediately synchronously", "Queues behind active microtasks into the macro-event queue loops", "Bypasses engine thread allocations completely", "Fails resolution criteria parameters"], correct: 1, category: "Frontend", difficulty: "Hard" },
    { id: 8, text: "Which pseudo-class structural selector hits every odd numerical child variant row pattern within parent sets?", options: [":nth-child(even)", ":nth-child(odd)", ":nth-of-type(3n)", ":first-child"], correct: 1, category: "Frontend", difficulty: "Easy" },
    { id: 9, text: "What does the 'defer' attribute handle when compiling script tags within document structural pipelines?", options: ["Blocks parser pipelines completely while loading scripts", "Downloads assets asynchronously but halts text rendering to execute", "Downloads script in background and executes only after structural document parsing completes", "Delays server request cycles indefinitely"], correct: 2, category: "Frontend", difficulty: "Medium" },
    { id: 10, text: "How do you break standard layout flow constraints to center absolute positioned boxes via margins?", options: ["margin: auto", "top: 50%; left: 50%; transform: translate(-50%, -50%);", "display: block-inline", "float: center;"], correct: 1, category: "Frontend", difficulty: "Hard" },

    { id: 11, text: "Which HTTP transmission verb safely guarantees idempotent properties over repeated duplicate updates?", options: ["POST", "PUT", "PATCH", "DELETE"], correct: 1, category: "Backend", difficulty: "Medium" },
    { id: 12, text: "What architectural tier normalization structure aims to completely remove partial functional dependencies?", options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"], correct: 1, category: "Backend", difficulty: "Hard" },
    { id: 13, text: "What is the main advantage of creating an Index layer inside relational database schema tables?", options: ["Minimizes disk space storage consumption footprints", "Accelerates matching data retrieval query lookups via structural lookups", "Ensures cross-row encryption processing parameters", "Enforces transactional rolling validations automatically"], correct: 1, category: "Backend", difficulty: "Easy" },
    { id: 14, text: "Which database system isolation type guards securely against non-repeatable row read conditions?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correct: 2, category: "Backend", difficulty: "Hard" },
    { id: 15, text: "What structural strategy organizes horizontal table splits across independent physical instance nodes?", options: ["Replication Clustering", "Database Sharding", "Vertical Index Mirroring", "View Materialization"], correct: 1, category: "Backend", difficulty: "Hard" },
    { id: 16, text: "What does a '403 Forbidden' status response imply to the consuming client app wrapper?", options: ["Server cannot locate resource endpoints", "Client context lacks valid authentication parameters", "Client is authenticated but lacks structural permission clearances", "The server route encountered processing crashes"], correct: 2, category: "Backend", difficulty: "Easy" },
    { id: 17, text: "Which relational command returns matching records from the left table and matching records from the right table?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], correct: 1, category: "Backend", difficulty: "Easy" },
    { id: 18, text: "What design paradigm provides high reliability via middleware channels separating publishers from consumers?", options: ["Monolithic Sync Binding", "Message Queuing (AMQP/MQTT)", "Direct Thread Injection", "REST Protocol Pipes"], correct: 1, category: "Backend", difficulty: "Medium" },
    { id: 19, text: "In Node.js systems, what thread configuration handles execution models natively?", options: ["Multi-Threaded Pool Model", "Single-Threaded Event Loop with Non-blocking I/O", "Asynchronous Kernel Isolation Threads", "Dual Core Symmetric Processing System"], correct: 1, category: "Backend", difficulty: "Medium" },
    { id: 20, text: "What is the purpose of using hashing functions like bcrypt for database user credentials storage?", options: ["Compresses lengthy text entries efficiently", "Encrypts strings into reversible structural keys", "Generates safe, irreversible cryptographic digest maps with unique salts", "Obfuscates relational index linkages"], correct: 2, category: "Backend", difficulty: "Medium" },

    { id: 21, text: "What operating system event switches thread states across independent processing contexts?", options: ["Deadlock Escalation", "Context Switching", "Paging Segmentation", "Interrupt Vectoring"], correct: 1, category: "Software Systems", difficulty: "Medium" },
    { id: 22, text: "Which state describes a set of threads waiting indefinitely for resources held by each other?", options: ["Race Condition", "Starvation Limit", "Deadlock", "Thrashed Page Constraints"], correct: 2, category: "Software Systems", difficulty: "Easy" },
    { id: 23, text: "What design pattern decouples an abstraction from its structural implementation so both can vary independently?", options: ["Strategy Pattern", "Bridge Pattern", "Adapter Pattern", "Observer Pattern"], correct: 1, category: "Software Systems", difficulty: "Hard" },
    { id: 24, text: "What testing standard asserts separate codebase units function as a cohesive whole?", options: ["Unit Testing", "Integration Testing", "Smoke Testing", "Regression Checks"], correct: 1, category: "Software Systems", difficulty: "Easy" },
    { id: 25, text: "What memory anomaly happens when physical memory allocations aren't freed after execution routines end?", options: ["Buffer Overflow Error", "Memory Leak", "Stack Corruption Matrix", "Segment Faulting"], correct: 1, category: "Software Systems", difficulty: "Easy" },
    { id: 26, text: "Which agile principle ensures development layers stay adaptable to modern requirements shifts?", options: ["Continuous Integration Pipelines", "Strict Scope Documentation Locking", "Iterative Sprint Adjustments", "Monolithic Build Paradigms"], correct: 2, category: "Software Systems", difficulty: "Medium" },
    { id: 27, text: "What does 'Thrashing' describe inside Virtual Memory management frameworks?", options: ["Sudden computational hardware clock failures", "Excessive CPU time spent swapping pages instead of executing code instructions", "Forced deletion of orphaned data nodes", "Dynamic memory defragmentation cycles"], correct: 1, category: "Software Systems", difficulty: "Hard" },
    { id: 28, text: "What architectural pattern isolates structural data modifications from data read queries?", options: ["MVC Architecture", "CQRS (Command Query Responsibility Segregation)", "Microservices Architecture", "Event-Driven Sagas"], correct: 1, category: "Software Systems", difficulty: "Hard" },
    { id: 29, text: "What does the 'S' represent inside object-oriented SOLID design paradigms?", options: ["Sequential Thread Processors", "Single Responsibility Principle", "Structural Coupling Protocols", "Static Component Scopes"], correct: 1, category: "Software Systems", difficulty: "Easy" },
    { id: 30, text: "What mechanism allows an operating system to run programs larger than the physical RAM capacity?", options: ["Cache Associativity", "Virtual Memory & Paging", "DMA Controller Intercepts", "CPU Pipeline Overclocking"], correct: 1, category: "Software Systems", difficulty: "Medium" }
];

let filteredQuestions = [];
let activeIndex = 0;
let userAnswers = []; 
let timeLimitPerQuestion = 30; 
let timerInterval = null;
let secondsExpendedTotal = 0;
let currentQuestionTimePassed = 0;

function startQuiz() {
    const selectedCat = document.getElementById('quiz-category').value;
    const selectedDiff = document.getElementById('quiz-difficulty').value;

    filteredQuestions = questionBank.filter(q => {
        const catMatch = selectedCat === 'all' || q.category === selectedCat;
        const diffMatch = selectedDiff === 'all' || q.difficulty === selectedDiff;
        return catMatch && diffMatch;
    });

    if (filteredQuestions.length === 0) {
        alert("No questions found matching that exact configuration! Defaulting to all track assets.");
        filteredQuestions = [...questionBank];
    }

    filteredQuestions.sort(() => Math.random() - 0.5);

    if (filteredQuestions.length > 10) {
        filteredQuestions = filteredQuestions.slice(0, 10);
    }

    activeIndex = 0;
    userAnswers = [];
    secondsExpendedTotal = 0;

    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    loadQuestionContext();
}

function loadQuestionContext() {
    clearInterval(timerInterval);
    currentQuestionTimePassed = 0;
    
    const question = filteredQuestions[activeIndex];
    
    document.getElementById('info-meta').innerText = `Track: ${question.category} (${question.difficulty})`;
    document.getElementById('question-number-tracker').innerText = `QUESTION ${activeIndex + 1} OF ${filteredQuestions.length}`;
    document.getElementById('question-text').innerText = question.text;
    
    const progressPercent = (activeIndex / filteredQuestions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;

    const optionsBox = document.getElementById('options-container');
    optionsBox.innerHTML = '';
    
    question.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = "card option-card p-3 border-2 mb-1 bg-body-tertiary";
        div.setAttribute('data-idx', idx);
        div.innerHTML = `<div class="form-check"><input class="form-check-input" type="radio" name="quiz-opts" id="opt-${idx}" value="${idx}"><label class="form-check-label fw-medium w-100" for="opt-${idx}">${opt}</label></div>`;
        
        div.addEventListener('click', () => {
            document.querySelectorAll('.option-card').forEach(c => c.classList.remove('border-primary', 'bg-primary-subtle'));
            div.classList.add('border-primary', 'bg-primary-subtle');
            document.getElementById(`opt-${idx}`).checked = true;
            document.getElementById('next-btn').removeAttribute('disabled');
        });
        
        optionsBox.appendChild(div);
    });

    document.getElementById('next-btn').setAttribute('disabled', 'true');
    
    document.getElementById('quiz-timer').innerText = `00:${timeLimitPerQuestion}`;
    document.getElementById('quiz-timer').className = "badge bg-danger fs-6 px-3 py-2";

    timerInterval = setInterval(() => {
        currentQuestionTimePassed++;
        secondsExpendedTotal++;
        const remaining = timeLimitPerQuestion - currentQuestionTimePassed;
        
        document.getElementById('quiz-timer').innerText = `00:${remaining < 10 ? '0' + remaining : remaining}`;
        
        if (remaining <= 0) {
            clearInterval(timerInterval);
            saveActiveUserChoice(-1); 
            handleNextQuestion();
        }
    }, 1000);
}

function saveActiveUserChoice(forcedIdx = null) {
    const question = filteredQuestions[activeIndex];
    let selected = forcedIdx;

    if (forcedIdx === null) {
        const radios = document.getElementsByName('quiz-opts');
        for (let r of radios) {
            if (r.checked) selected = parseInt(r.value);
        }
    }

    userAnswers.push({
        questionText: question.text,
        options: question.options,
        correctIdx: question.correct,
        selectedIdx: selected
    });
}

function handleNextQuestion() {
    if (userAnswers.length === activeIndex) {
        saveActiveUserChoice();
    }

    activeIndex++;
    if (activeIndex < filteredQuestions.length) {
        loadQuestionContext();
    } else {
        clearInterval(timerInterval);
        compileQuizSummaryResults();
    }
}

function compileQuizSummaryResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    const totalQuestions = userAnswers.length;
    const correctCount = userAnswers.filter(a => a.selectedIdx === a.correctIdx).length;
    const scoreString = `${correctCount}/${totalQuestions}`;
    const accuracyVal = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    document.getElementById('res-score').innerText = scoreString;
    document.getElementById('res-accuracy').innerText = `${accuracyVal}%`;
    document.getElementById('res-time').innerText = `${secondsExpendedTotal}s`;
    
    let verdict = "Needs Improvement";
    if (accuracyVal >= 80) verdict = "Excellent! 🔥";
    else if (accuracyVal >= 50) verdict = "Competent 📈";
    document.getElementById('res-verdict').innerText = verdict;

    const analysisBox = document.getElementById('analysis-container');
    analysisBox.innerHTML = '';

    userAnswers.forEach((ans, i) => {
        const isCorrect = ans.selectedIdx === ans.correctIdx;
        const div = document.createElement('div');
        div.className = `card border-0 p-3 shadow-sm ${isCorrect ? 'border-start border-4 border-success bg-success-subtle' : 'border-start border-4 border-danger bg-danger-subtle'}`;
        
        let userChoiceText = ans.selectedIdx === -1 ? "Timeout Penalty (No Choice Made)" : ans.options[ans.selectedIdx];
        let correctChoiceText = ans.options[ans.correctIdx];

        div.innerHTML = `
            <h6 class="fw-bold mb-1">${i + 1}. ${ans.questionText}</h6>
            <small class="d-block text-dark"><strong>Your Choice:</strong> ${userChoiceText} ${isCorrect ? '✅' : '❌'}</small>
            ${!isCorrect ? `<small class="d-block text-success"><strong>Correct Answer:</strong> ${correctChoiceText}</small>` : ''}
        `;
        analysisBox.appendChild(div);
    });

    document.getElementById('leaderboard-save-form').classList.remove('hidden');
    renderLeaderboardView();
}

function saveLeaderboardScore() {
    const inputEl = document.getElementById('player-name');
    const name = inputEl.value.trim();
    if (!name) {
        alert("Please provide a valid moniker name string.");
        return;
    }

    const selectedCat = document.getElementById('quiz-category').value;
    const correctCount = userAnswers.filter(a => a.selectedIdx === a.correctIdx).length;
    
    const records = JSON.parse(localStorage.getItem('quiz_leaderboard_cache')) || [];
    records.push({
        name: name,
        track: selectedCat === 'all' ? 'Combined Tracks' : selectedCat,
        score: `${correctCount}/${userAnswers.length}`,
        rawScore: correctCount,
        date: new Date().toLocaleDateString()
    });

    records.sort((a, b) => b.rawScore - a.rawScore);
    localStorage.setItem('quiz_leaderboard_cache', JSON.stringify(records.slice(0, 5))); 
    
    inputEl.value = '';
    document.getElementById('leaderboard-save-form').classList.add('hidden');
    renderLeaderboardView();
}

function renderLeaderboardView() {
    const tbody = document.getElementById('leaderboard-tbody');
    tbody.innerHTML = '';
    
    const records = JSON.parse(localStorage.getItem('quiz_leaderboard_cache')) || [];
    
    if (records.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-muted p-3">No ranked data records yet.</td></tr>`;
        return;
    }

    records.forEach((rec, rankIndex) => {
        const medal = rankIndex === 0 ? "🥇" : rankIndex === 1 ? "🥈" : rankIndex === 2 ? "🥉" : `${rankIndex + 1}`;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="fw-bold">${medal}</td>
            <td class="fw-semibold">${rec.name}</td>
            <td><span class="badge bg-dark">${rec.track}</span></td>
            <td class="text-primary fw-bold">${rec.score}</td>
            <td class="small text-muted">${rec.date}</td>
        `;
        tbody.appendChild(tr);
    });
}

function restartQuizSetup() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.remove('hidden');
}

document.getElementById('theme-toggle').addEventListener('click', () => {
    const root = document.getElementById('quiz-html');
    const btn = document.getElementById('theme-toggle');
    const isLight = root.getAttribute('data-bs-theme') === 'light';
    
    root.setAttribute('data-bs-theme', isLight ? 'dark' : 'light');
    btn.innerText = isLight ? "☀️ Light Mode" : "🌙 Dark Mode";
    btn.className = isLight ? "btn btn-outline-info btn-sm" : "btn btn-outline-light btn-sm";
});