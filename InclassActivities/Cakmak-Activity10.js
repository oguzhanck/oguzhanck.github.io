var languages = [
    "JavaScript",
    "Python",
    "Java",
    "PHP",
    "C#",
    "C++",
    "CSS",
    "TypeScript",
    "Ruby",
    "C",
    "Swift",
    "R",
    "Objective-C",
    "Shell",
	"Scala",
    "Go", 
    "PowerShell",
    "Kotlin",
    "Rust",
    "Perl"
];

$("#programming_language").autocomplete({
    source: languages 
});

$(function(){
    $("#date").datepicker();
});

