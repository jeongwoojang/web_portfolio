$(function () {
    // line - circle - semicircle
//    var bar1 = new ProgressBar.Line("#line", {
//        strokeWidth: 5, // 선의 굵기
//        easing: "easeInOut",
//        duration: 1400,
//        color: "#fab", //글자들어가는 색상 , 채워지는 면의 색상. 같이 적용된다 
//        trailWidth: 4, // 배경 선의 굵기
//        trailColor: "#ccc", //배경 선의 컬러
//        step: function (state, circle) {
//            circle.setText(Math.round(circle.value() * 100) + "%")
//        }
//    })

    var bar2 = new ProgressBar.Circle("#circle1", {
        strokeWidth: 8,
        easing: "easeInOut",
        duration: 1400,
        color: "#c33949",
        trailWidth: 2,
        trailColor: "#ccc",
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    var bar4 = new ProgressBar.Circle("#circle2", {
        strokeWidth: 8,
        easing: "easeInOut",
        duration: 1400,
        color: "#c33949",
        trailWidth: 2,
        trailColor: "#ccc",
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    var bar5 = new ProgressBar.Circle("#circle3", {
        strokeWidth: 8,
        easing: "easeInOut",
        duration: 1400,
        color: "#c33949",
        trailWidth: 2,
        trailColor: "#ccc",
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    var bar6 = new ProgressBar.Circle("#circle4", {
        strokeWidth: 8,
        easing: "easeInOut",
        duration: 1400,
        color: "#c33949",
        trailWidth: 2,
        trailColor: "#ccc",
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    var bar7 = new ProgressBar.Circle("#circle5", {
        strokeWidth: 8,
        easing: "easeInOut",
        duration: 1400,
        color: "#c33949",
        trailWidth: 2,
        trailColor: "#ccc",
        step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })

    $(window).scroll(function () {
        let skillTop = $('#skill').offset().top;
        if ($(window).scrollTop() > skillTop - 400) {
            bar2.animate(0.9)
            bar4.animate(0.8)
            bar5.animate(0.6)
            bar6.animate(0.6)
            bar7.animate(0.6)
        };
    })

})
