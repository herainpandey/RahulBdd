$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RadioSuggestion.feature");
formatter.feature({
  "line": 3,
  "name": "Verifying radio button selection and autosuggestion selection",
  "description": "",
  "id": "verifying-radio-button-selection-and-autosuggestion-selection",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@EndtoEndTest"
    }
  ]
});
formatter.before({
  "duration": 2884600800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User launch website \"https://rahulshettyacademy.com/AutomationPractice/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://rahulshettyacademy.com/AutomationPractice/",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.user_launch_website(String)"
});
formatter.result({
  "duration": 3581107600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User selects 2nd radio button",
  "description": "",
  "id": "verifying-radio-button-selection-and-autosuggestion-selection;user-selects-2nd-radio-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    },
    {
      "line": 9,
      "name": "@smoke1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"2\"nd radio button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "radio button should be clicked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.user_clicks_on_nd_radio_button(int)"
});
formatter.result({
  "duration": 2243261100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.radio_button_should_be_clicked()"
});
formatter.result({
  "duration": 109000,
  "status": "passed"
});
formatter.after({
  "duration": 680453300,
  "status": "passed"
});
});