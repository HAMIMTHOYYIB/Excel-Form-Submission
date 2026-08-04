// $("#submit-form").submit(function (e) {
//     e.preventDefault();

//     $.ajax({
//         url: "",
//         type: "POST",
//         data: $("#submit-form").serialize(),

//         success: function (response) {
//             alert("Form submitted successfully!");
//             $("#submit-form")[0].reset();
//         },

//         error: function (xhr, status, error) {
//             console.log(xhr.responseText);
//             console.log(status);
//             console.log(error);
//             alert("Submission failed.");
//         }
//     });
// });



const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzwJ2yH-eWodGKp7Kzt1Huf95-QFw4X1yskvWoyP-DyuEWXkq40JkVZ3yjIABLXhThsBA/exec";

document.getElementById("submit-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            body: new FormData(e.target)
        });

        const result = await response.text();

        alert("Form submitted successfully!");

        e.target.reset();

        console.log(result);

    } catch (err) {
        console.error(err);
        alert("Submission failed.");
    }
});