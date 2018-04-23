$(document).ready(function () {

	$("#textGreen").on("click", function () {
		$("#funText").css("color", "green")
	})

	$("#boxGrow").on("click", function () {
		$("#box").animate({
			height: "+=35px",
			width: "+=35px"
		}, "fast");
	})

	$("#boxShrink").on("click", function () {
		$("#box").animate({ height: "-=35px", width: "-=35px" }, "fast");
	})

	document.getElementById("shrinkBtn").addEventListener("click", function () {
		document.getElementById("box").style.height = "25px";
	});

	document.getElementById("growBtn").addEventListener("click", function () {
		document.getElementById("box").style.height = "250px";
	});

	document.getElementById("resetBtn").addEventListener("click", function () {
		document.getElementById("box").style.height = "150px";
	});

});