/* =========================================
   DATA SOAL
========================================= */

const questions = [

    {
        question: "Apa kepanjangan dari HTML?",

        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],

        correct: 0
    },


    {
        question: "Bahasa yang digunakan untuk mengatur tampilan halaman web adalah?",

        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        correct: 1
    },


    {
        question: "Bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif adalah?",

        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],

        correct: 2
    },


    {
        question: "Manakah yang merupakan tipe data untuk menyimpan teks dalam JavaScript?",

        answers: [
            "Boolean",
            "String",
            "Integer",
            "Float"
        ],

        correct: 1
    },


    {
        question: "Apa fungsi statement if dalam pemrograman?",

        answers: [
            "Mengulang program",
            "Menyimpan data",
            "Membuat percabangan berdasarkan kondisi",
            "Menghapus data"
        ],

        correct: 2
    },


    {
        question: "Manakah simbol yang digunakan untuk membuat komentar satu baris dalam JavaScript?",

        answers: [
            "//",
            "<!-- -->",
            "/* */",
            "#"
        ],

        correct: 0
    },


    {
        question: "Apa fungsi document.getElementById() pada JavaScript?",

        answers: [
            "Menghapus halaman web",
            "Mengambil elemen berdasarkan ID",
            "Membuat database",
            "Mengubah alamat website"
        ],

        correct: 1
    },


    {
        question: "Manakah yang digunakan untuk mendeklarasikan variabel yang nilainya dapat berubah dalam JavaScript?",

        answers: [
            "let",
            "style",
            "class",
            "html"
        ],

        correct: 0
    },


    {
        question: "Apa fungsi perulangan for dalam pemrograman?",

        answers: [
            "Membuat kondisi",
            "Menampilkan gambar",
            "Menjalankan kode secara berulang",
            "Menghapus variabel"
        ],

        correct: 2
    },


    {
        question: "Apa fungsi LocalStorage pada browser?",

        answers: [
            "Menyimpan data secara lokal pada browser",
            "Menghubungkan komputer ke internet",
            "Menghapus browser",
            "Membuat sistem operasi"
        ],

        correct: 0
    }

];



/* =========================================
   PENGATURAN QUIZ
========================================= */

const TIME_PER_QUESTION = 15;

let currentQuestion = 0;

let score = 0;

let answered = false;

let timeLeft = TIME_PER_QUESTION;

let timerInterval;



/* =========================================
   ELEMENT HTML
========================================= */

const introPage =
    document.getElementById("introPage");

const quizPage =
    document.getElementById("quizPage");

const resultPage =
    document.getElementById("resultPage");

const startBtn =
    document.getElementById("startBtn");

const restartBtn =
    document.getElementById("restartBtn");

const questionText =
    document.getElementById("questionText");

const answerContainer =
    document.getElementById("answerContainer");

const questionNumber =
    document.getElementById("questionNumber");

const totalQuestion =
    document.getElementById("totalQuestion");

const progressFill =
    document.getElementById("progressFill");

const progressPercent =
    document.getElementById("progressPercent");

const currentScore =
    document.getElementById("currentScore");

const feedback =
    document.getElementById("feedback");

const nextBtn =
    document.getElementById("nextBtn");

const finalScore =
    document.getElementById("finalScore");

const highScore =
    document.getElementById("highScore");

const timer =
    document.getElementById("timer");

const timerBox =
    document.querySelector(".timer-box");



/* =========================================
   TOTAL SOAL
========================================= */

totalQuestion.textContent =
    questions.length;



/* =========================================
   PINDAH HALAMAN
========================================= */

function showPage(page) {

    introPage.classList.remove("active");

    quizPage.classList.remove("active");

    resultPage.classList.remove("active");

    page.classList.add("active");

}



/* =========================================
   MULAI QUIZ
========================================= */

startBtn.addEventListener(
    "click",
    function () {

        currentQuestion = 0;

        score = 0;

        currentScore.textContent = 0;

        showPage(quizPage);

        renderQuestion();

    }
);



/* =========================================
   RENDER SOAL
========================================= */

function renderQuestion() {

    answered = false;

    nextBtn.disabled = true;

    feedback.textContent = "";

    feedback.className = "feedback";


    const question =
        questions[currentQuestion];


    questionText.textContent =
        question.question;


    questionNumber.textContent =
        currentQuestion + 1;


    /* PROGRESS */

    const percent =
        ((currentQuestion + 1) /
        questions.length) * 100;


    progressFill.style.width =
        percent + "%";


    progressPercent.textContent =
        Math.round(percent) + "%";


    /* HAPUS JAWABAN LAMA */

    answerContainer.innerHTML = "";


    /* BUAT PILIHAN JAWABAN */

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.classList.add("answer");


            button.dataset.index =
                index;


            button.textContent =
                `${String.fromCharCode(65 + index)}. ${answer}`;


            answerContainer.appendChild(
                button
            );

        }
    );


    /* MULAI TIMER */

    startTimer();

}



/* =========================================
   TIMER
========================================= */

function startTimer() {

    clearInterval(timerInterval);


    timeLeft =
        TIME_PER_QUESTION;


    timer.textContent =
        timeLeft;


    timerBox.classList.remove(
        "warning"
    );


    timerBox.classList.remove(
        "danger"
    );


    timerInterval =
        setInterval(
            function () {

                timeLeft--;


                timer.textContent =
                    timeLeft;


                /* 10 DETIK */

                if (timeLeft <= 10) {

                    timerBox.classList.add(
                        "warning"
                    );

                }


                /* 5 DETIK */

                if (timeLeft <= 5) {

                    timerBox.classList.remove(
                        "warning"
                    );

                    timerBox.classList.add(
                        "danger"
                    );

                }


                /* HABIS */

                if (timeLeft <= 0) {

                    clearInterval(
                        timerInterval
                    );

                    timeUp();

                }

            },
            1000
        );

}



/* =========================================
   WAKTU HABIS
========================================= */

function timeUp() {

    if (answered) {
        return;
    }


    answered = true;


    const allAnswers =
        document.querySelectorAll(
            ".answer"
        );


    const correctIndex =
        questions[currentQuestion].correct;


    /* MATIKAN SEMUA */

    allAnswers.forEach(
        button => {

            button.disabled = true;

        }
    );


    /* TANDAI JAWABAN BENAR */

    allAnswers[correctIndex]
        .classList.add("correct");


    feedback.textContent =
        "⏰ Waktu habis! Jawaban yang benar ditandai hijau.";


    feedback.classList.add(
        "wrong-text"
    );


    nextBtn.disabled = false;

}



/* =========================================
   EVENT DELEGATION
========================================= */

answerContainer.addEventListener(
    "click",
    function (event) {

        const selectedAnswer =
            event.target.closest(
                ".answer"
            );


        if (!selectedAnswer) {
            return;
        }


        if (answered) {
            return;
        }


        answered = true;


        clearInterval(
            timerInterval
        );


        const selectedIndex =
            Number(
                selectedAnswer.dataset.index
            );


        const correctIndex =
            questions[currentQuestion].correct;


        const allAnswers =
            document.querySelectorAll(
                ".answer"
            );


        /* MATIKAN SEMUA */

        allAnswers.forEach(
            button => {

                button.disabled = true;

            }
        );


        /* BENAR */

        if (
            selectedIndex ===
            correctIndex
        ) {

            selectedAnswer.classList.add(
                "correct"
            );


            feedback.textContent =
                "✓ Jawaban benar!";


            feedback.classList.add(
                "correct-text"
            );


            score += 10;


            currentScore.textContent =
                score;

        }


        /* SALAH */

        else {

            selectedAnswer.classList.add(
                "wrong"
            );


            allAnswers[correctIndex]
                .classList.add(
                    "correct"
                );


            feedback.textContent =
                "✗ Jawaban salah.";


            feedback.classList.add(
                "wrong-text"
            );

        }


        nextBtn.disabled = false;

    }
);



/* =========================================
   NEXT SOAL
========================================= */

nextBtn.addEventListener(
    "click",
    function () {

        clearInterval(
            timerInterval
        );


        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            renderQuestion();

        }

        else {

            showResult();

        }

    }
);



/* =========================================
   HASIL QUIZ
========================================= */

function showResult() {

    clearInterval(
        timerInterval
    );


    finalScore.textContent =
        score;


    /* AMBIL HIGH SCORE */

    const savedHighScore =
        Number(
            localStorage.getItem(
                "highScore"
            )
        ) || 0;


    /* SIMPAN HIGH SCORE */

    if (
        score > savedHighScore
    ) {

        localStorage.setItem(
            "highScore",
            score
        );

    }


    highScore.textContent =
        Math.max(
            score,
            savedHighScore
        );


    showPage(resultPage);

}



/* =========================================
   COBA LAGI
========================================= */

restartBtn.addEventListener(
    "click",
    function () {

        clearInterval(
            timerInterval
        );


        currentQuestion = 0;

        score = 0;

        currentScore.textContent =
            0;


        showPage(
            quizPage
        );


        renderQuestion();

    }
);