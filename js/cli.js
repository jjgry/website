var $editor;
var state = 0;
var currentPage = "home";
var homeMessage =
  ["&#160;&#160;&#160;&#160;&#160;&#160;&#160;__&#160;&#160;&#160;&#160;__&#160;&#160;&#160;______&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;",
    "&#160;&#160;&#160;&#160;&#160;&#160;/&#160;/&#160;&#160;&#160;/&#160;/&#160;&#160;/&#160;____/________&#160;___&#160;&#160;__",
    "&#160;__&#160;&#160;/&#160;/_&#160;&#160;/&#160;/&#160;&#160;/&#160;/&#160;__/&#160;___/&#160;__&#160;`/&#160;/&#160;/&#160;/",
    "/&#160;/_/&#160;/&#160;/_/&#160;/&#160;&#160;/&#160;/_/&#160;/&#160;/&#160;&#160;/&#160;/_/&#160;/&#160;/_/&#160;/&#160;",
    "\\____/\\____/&#160;&#160;&#160;\\____/_/&#160;&#160;&#160;\\__,_/\\__,&#160;/&#160;&#160;",
    "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;/____/&#160;&#160;&#160;",
    "",
    "JJ Gray is a CS undergraduate at the University of Cambridge.",
    "",
    "Use this command line interface to learn more about me, or view a more conventional website at <a href='https://static.jjgry.com'>https://static.jjgry.com</a>.",
    "",
    "Type ‘help’ for assistance.",
    ""
  ];
var helpMessage = [
  "help&#160;&#160;&#160;&#160;&#160;&#160;&#160;: Show available commands",
  "clear&#160;&#160;&#160;&#160;&#160;&#160;: Clear console",
  "list&#160;&#160;&#160;&#160;&#160;&#160;&#160;: List all the pages of the site",
  "nav &lt;page&gt; : Navigate to a page",
];
var listMessage = [
  "home",
  "about",
  "projects",
  "contact",
];
var aboutMessage = [
  "&#160;&#160;&#160;&#160;___&#160;&#160;&#160;&#160;__&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;__&#160;",
  "&#160;&#160;&#160;/&#160;&#160;&#160;|&#160;&#160;/&#160;/_&#160;&#160;____&#160;&#160;__&#160;&#160;__/&#160;/_",
  "&#160;&#160;/&#160;/|&#160;|&#160;/&#160;__&#160;\\/&#160;__&#160;\\/&#160;/&#160;/&#160;/&#160;__/",
  "&#160;/&#160;___&#160;|/&#160;/_/&#160;/&#160;/_/&#160;/&#160;/_/&#160;/&#160;/_&#160;&#160;",
  "/_/&#160;&#160;|_/_.___/\\____/\\__,_/\\__/&#160;&#160;",
  "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;",
  "",
  "I am a second-year CS student at the University of Cambridge.",
  "",
  "This command line interface is my first project coded in JavaScript and has been somewhat successful.",
  "",
  "I hope to expand the functionality of this page into a more comprehensive system in the future.",
  ""
];
var projectsMessage = [
  "&#160;&#160;&#160;&#160;____&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;_&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;__&#160;&#160;&#160;&#160;&#160;&#160;",
  "&#160;&#160;&#160;/&#160;__&#160;\\_________&#160;&#160;&#160;&#160;(_)__&#160;&#160;_____/&#160;/______",
  "&#160;&#160;/&#160;/_/&#160;/&#160;___/&#160;__&#160;\\&#160;&#160;/&#160;/&#160;_&#160;\\/&#160;___/&#160;__/&#160;___/",
  "&#160;/&#160;____/&#160;/&#160;&#160;/&#160;/_/&#160;/&#160;/&#160;/&#160;&#160;__/&#160;/__/&#160;/_(__&#160;&#160;)&#160;",
  "/_/&#160;&#160;&#160;/_/&#160;&#160;&#160;\\____/_/&#160;/\\___/\\___/\\__/____/&#160;&#160;",
  "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;/___/&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;",
  "",
  "Many of my projects, including the source code for this website, can be found on <a href='https://github.com/jjgry'>GitHub</a>.",
  "",
  "- My second year group project, <a href='https://github.com/jjgry/oscar'>Oscar</a>, is an email assistant designed to increase attendance to GP appointments.",
  "",
  "- My friends and I competed in a blockhain hackathon where we <a href='https://devpost.com/software/cbhack'>developed a prototype system</a> for people in the developing world to verify the authenticity their prescriptions.",
  ""
];
var contactMessage = [
  "&#160;&#160;&#160;______&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;__&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;__&#160;",
  "&#160;&#160;/&#160;____/___&#160;&#160;____&#160;&#160;/&#160;/_____&#160;______/&#160;/_",
  "&#160;/&#160;/&#160;&#160;&#160;/&#160;__&#160;\\/&#160;__&#160;\\/&#160;__/&#160;__&#160;`/&#160;___/&#160;__/",
  "/&#160;/___/&#160;/_/&#160;/&#160;/&#160;/&#160;/&#160;/_/&#160;/_/&#160;/&#160;/__/&#160;/_&#160;&#160;",
  "\\____/\\____/_/&#160;/_/\\__/\\__,_/\\___/\\__/&#160;&#160;",
  "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;",
  "",
  "I can be found on <a href='https://www.linkedin.com/in/jjgry/'>LinkedIn</a> and <a href='https://m.me/gray.johnjoseph'>Messenger</a>.",
  "",
  "For those within the University of Cambridge, my contact details can be found <a href='https://www.lookup.cam.ac.uk/person/crsid/jjag3'>here</a>.",
  "",
  "In addition, I have personal social media accounts on <a href='https://www.facebook.com/gray.johnjoseph'>Facebook</a>, <a href='https://twitter.com/jjofthegray'>Twitter</a>, and <a href='https://www.instagram.com/jjgry/'>Instagram</a>.",
  ""
];
var navTooManyArgumentsMessage = [
  "nav: Too many arguments",
  "Expected use: 'nav &lt;page&gt;'"
];
var navNoArgumentsMessage = [
  "nav: Argument expected",
  "Expected use: 'nav &lt;page&gt;'"
];


function unknownCommandMessage(command) {
  return [
    "'" + command + "' is not a recognised command",
    "Type 'help' for assistance"
  ]
}
function unknownPageMessage(page) {
  return [
    "'" + page + "' is not a recognised page",
    "Type 'list' to view the available pages"
  ]
}


function start() {
  $editor = $("#editor");
  $editor.focus();
  printMessage(homeMessage);
}

function printMessage(messageArray) {
  messageArray.forEach(messageLine => addToMachineHistory(messageLine));
}

function addToUserHistory(line) {
  $("#console-log tr").eq(-2).before(
    "<tr>" +
    "<td class='text-monospace text-primary' id='input-marker' style='width:1%; font-weight:400'>>&nbsp;</td>" +
    "<td class='text-monospace text-primary' id='user-record' style='font-weight:400'>" + line + "</td>" +
    "</tr>"
  );
}

function addToMachineHistory(line) {
  $("#console-log tr").eq(-2).before(
    "<tr>" +
    "<td class='text-monospace' id='input-marker style='width:1%'>&nbsp;&nbsp;</td>" +
    "<td class='text-monospace' id='machine-record'>" + line + "</td>" +
    "</tr>"
  );
}

function emptyHistory() {
  $("#console-log tr").not(":last").prev().remove()
}

// shows and hides the input prompt
(function ($) {
  $(document).on('change keydown keypress input', 'td[data-placeholder]', function () {
    if (this.textContent) {
      this.dataset.tdPlaceholderContent = 'true';
    } else {
      delete (this.dataset.tdPlaceholderContent);
    }
  });
})(jQuery);

function jumpToPageBottom() {
  $('html, body').scrollTop($(document).height() - $(window).height());
}

function inputEntered(ele) {
  if (event.key === 'Enter') {
    handleInput(ele.value);
  }
}

// remove all excess whitespace
function stripWhitespace(str) {
  return str.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
}

function handleInput(input) {
  addToUserHistory(input);
  var stripped_input = stripWhitespace(input).toLowerCase();
  var command = stripped_input;
  var arguments = [];
  if (stripped_input.indexOf(' ') >= 0) {
    command = stripped_input.substr(0, stripped_input.indexOf(' '));
    arguments = stripped_input.substr(stripped_input.indexOf(' ') + 1).split(' ');
  }
  switch (command) {
    case "":
      break; // no repsonde if empty command line
    case "help":
      printMessage(helpMessage);
      break;
    case "clear":
    case "cls":
      emptyHistory();
      switch (currentPage) {
        case "home":
          printMessage(homeMessage);
          break;
        case "about":
          printMessage(aboutMessage);
          break;
        case "projects":
          printMessage(projectsMessage);
          break;
        case "contact":
          printMessage(contactMessage);
          break;
      }
      break;
    case "list":
      printMessage(listMessage);
      break;
    case "nav":
    case "cd":
    case "cat":
      if (arguments.length > 1) {
        printMessage(navTooManyArgumentsMessage);
      } else if (arguments.length == 0) {
        printMessage(navNoArgumentsMessage);
      } else {
        switch (arguments[0]) {
          case "home":
            emptyHistory();
            printMessage(homeMessage);
            currentPage = "home";
            break;
          case "about":
            emptyHistory();
            printMessage(aboutMessage);
            currentPage = "about";
            break;
          case "projects":
          case "project":
            emptyHistory();
            printMessage(projectsMessage);
            currentPage = "projects";
            break;
          case "contact":
            emptyHistory();
            printMessage(contactMessage);
            currentPage = "contact";
            break;
          default:
            printMessage(unknownPageMessage(arguments));
            break;
        }
      }
      break;
    case "home":
      emptyHistory();
      printMessage(homeMessage);
      currentPage = "home";
      break;
    case "about":
      emptyHistory();
      printMessage(aboutMessage);
      currentPage = "about";
      break;
    case "projects":
    case "project":
      emptyHistory();
      printMessage(projectsMessage);
      currentPage = "projects";
      break;
    case "contact":
      emptyHistory();
      printMessage(contactMessage);
      currentPage = "contact";
      break;
    default:
      printMessage(unknownCommandMessage(command));
      break;
  }
}

document.onkeyup = function (e) {
  if (e.which == 13) { // perform action whenever user hits enter key
    handleInput($editor.text());
    $editor.empty();
    jumpToPageBottom()
    $editor.focus();
  }
};

window.onload = start;