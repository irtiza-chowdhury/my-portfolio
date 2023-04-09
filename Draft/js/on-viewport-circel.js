$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on("resize scroll", function () {
    if ($("#our-skill-section").isInViewport()) {
      $(".single-skill-img-1")
      .circleProgress({
        value: 0.9,
        size: 150,
        startAngle: -Math.PI,
        reverse: !1,
        thickness: 10,
        lineCap: "butt",
        fill: { color: "#30bae7" },
      })
      // .on("circle-animation-progress", function (a, b) {
      //   $(this)
      //     .find("strong")
      //     .html(parseInt(90 * b) + "<i>%</i>");
      // }),
      $(".single-skill-img-2")
        .circleProgress({
          value: 0.75,
          size: 150,
          startAngle: -Math.PI,
          reverse: !1,
          thickness: 10,
          lineCap: "butt",
          fill: { color: "#d74680" },
        })
        // .on("circle-animation-progress", function (a, b) {
        //   $(this)
        //     .find("strong")
        //     .html(parseInt(75 * b) + "<i>%</i>");
        // }),
      $(".single-skill-img-3")
        .circleProgress({
          value: 0.7,
          size: 150,
          startAngle: -Math.PI,
          reverse: !1,
          thickness: 10,
          lineCap: "butt",
          fill: { color: "#15c7a8" },
        })
        // .on("circle-animation-progress", function (a, b) {
        //   $(this)
        //     .find("strong")
        //     .html(parseInt(70 * b) + "<i>%</i>");
        // }),
      $(".single-skill-img-4")
        .circleProgress({
          value: 0.85,
          size: 150,
          startAngle: -Math.PI,
          reverse: !1,
          thickness: 10,
          lineCap: "butt",
          fill: { color: "#eb7d4b" },
        })
      $(".single-skill-img-5")
        .circleProgress({
          value: 0.85,
          size: 150,
          startAngle: -Math.PI,
          reverse: !1,
          thickness: 10,
          lineCap: "butt",
          fill: { color: "#eb7d4b" },
        })
      $(".single-skill-img-6")
        .circleProgress({
          value: 0.85,
          size: 150,
          startAngle: -Math.PI,
          reverse: !1,
          thickness: 10,
          lineCap: "butt",
          fill: { color: "#eb7d4b" },
        })
      $(".single-skill-img-7")
        .circleProgress({
          value: 0.85,
          size: 150,
          startAngle: -Math.PI,
          reverse: !1,
          thickness: 10,
          lineCap: "butt",
          fill: { color: "#eb7d4b" },
        })
    }
  });