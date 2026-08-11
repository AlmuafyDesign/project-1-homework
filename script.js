"use strict";


/* =====================================================
   ELEMENTS
===================================================== */

const printBtn = document.getElementById("printBtn");

const classInput = document.getElementById("classInput");

const dateInput = document.getElementById("dateInput");

const lessonInputs =
    document.querySelectorAll(".lesson-input");


/* =====================================================
   PRINT
===================================================== */

function printHomework() {

    /*
        Browser-এর native print system ব্যবহার করছি।

        এখানে PDF library নেই।
        html2canvas নেই।
        html2pdf নেই।

        ফলে আগের blank PDF সমস্যাও থাকবে না।
    */

    window.print();

}


/* =====================================================
   BUTTON EVENT
===================================================== */

printBtn.addEventListener(
    "click",
    printHomework
);


/* =====================================================
   ENTER KEY
===================================================== */

classInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            dateInput.focus();

            dateInput.select();

        }

    }
);


dateInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            if (lessonInputs.length > 0) {

                lessonInputs[0].focus();

                lessonInputs[0].select();

            }

        }

    }
);


/* =====================================================
   LESSON INPUT ENTER
===================================================== */

lessonInputs.forEach(
    function(input, index) {

        input.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    event.preventDefault();


                    const next =
                        lessonInputs[index + 1];


                    if (next) {

                        next.focus();

                        next.select();

                    }

                }

            }
        );

    }
);


/* =====================================================
   READY
===================================================== */

console.log(
    "Daily Homework Sheet ready."
);