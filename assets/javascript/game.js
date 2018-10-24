{/* <reference ></reference> */ }
$(document).ready(function () {
    var cpuRandom = Math.floor(Math.random() * 102) + 19;
    $("#randomNumber").html(cpuRandom);

    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var bl = false;
    // var cpuRandom_1 = Math.floor(Math.random() * 12) + 1;
    // var cpuRandom_2 = Math.floor(Math.random() * 12) + 1;
    // var cpuRandom_3 = Math.floor(Math.random() * 12) + 1;
    // var cpuRandom_4 = Math.floor(Math.random() * 12) + 1;

    // $("#img_1").attr("value", cpuRandom_1);
    // console.log($("#img_1").attr("value"));
    // $("#img_2").attr("value", cpuRandom_2);
    // $("#img_3").attr("value", cpuRandom_3);
    // $("#img_4").attr("value", cpuRandom_4);
resetFun();
    // $("#img_1").on("click", function () {
    //     totalScore += cpuRandom_1;
    //     // $("#totalScore").html(totalScore);
    //     isWinsFun();
    // });
    // $("#img_2").on("click", function () {
    //     totalScore += cpuRandom_2;
    //     // $("#totalScore").html(totalScore);
    //     isWinsFun();
    // });
    // $("#img_3").on("click", function () {
    //     totalScore += cpuRandom_3;
    //     // $("#totalScore").html(totalScore);
    //     isWinsFun();
    // });
    // $("#img_4").on("click", function () {
    //     totalScore += cpuRandom_4;
    //     // $("#totalScore").html(totalScore);
    //     isWinsFun();
    // });

    // function isWinsFun() {
    //     if (cpuRandom == totalScore) {
    //         wins++;
    //         $("#wins").html(wins);
    //         // $("#totalScore").html(totalScore);
    //         bl=true;
    //         resetFun();
    //     } else if (cpuRandom < totalScore) {
    //         losses++;
    //         $("#losses").html(losses);
    //         // $("#totalScore").html(totalScore);
    //         bl=true;
    //         resetFun();
    //     }
    // }
    $("img").on("click", function () {

        totalScore += parseInt($(this).attr("value"));
        $("#totalScore").html(totalScore);
        // isWinsFun();
        if (cpuRandom == totalScore) {
            wins++;
            $("#wins").html(wins);
            // $("#totalScore").html(totalScore);
            resetFun();
        } else if (cpuRandom < totalScore) {
            losses++;
            $("#losses").html(losses);
            // $("#totalScore").html(totalScore);
            resetFun();
        }


    });
    function resetFun() {
        cpuRandom = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").html(cpuRandom);

        totalScore = 0;
        $("#totalScore").html(totalScore);

        cpuRandom_1 = Math.floor(Math.random() * 12) + 1;
        cpuRandom_2 = Math.floor(Math.random() * 12) + 1;
        cpuRandom_3 = Math.floor(Math.random() * 12) + 1;
        cpuRandom_4 = Math.floor(Math.random() * 12) + 1;
        $("#img_1").attr("value", cpuRandom_1);
        console.log($("#img_1").attr("value"));
        $("#img_2").attr("value", cpuRandom_2);
        $("#img_3").attr("value", cpuRandom_3);
        $("#img_4").attr("value", cpuRandom_4);

        $("img").on("click", function () {

            // totalScore += parseInt($(this).attr("value"));
            // var newTotalScore = totalScore;
            // $("#totalScore").html(newTotalScore);
            // isWinsFun();
            if (cpuRandom == totalScore) {
                // wins++;
                // $("#wins").html(wins);
                // $("#totalScore").html(totalScore);
                resetFun();
            } else if (cpuRandom < totalScore) {
                // losses++;
                // $("#losses").html(losses);
                // $("#totalScore").html(totalScore);
                resetFun();
            }
        });
    }

});