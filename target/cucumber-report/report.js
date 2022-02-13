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
formatter.scenarioOutline({
  "line": 21,
  "name": "User checking amount as per city",
  "description": "",
  "id": "verifying-radio-button-selection-and-autosuggestion-selection;user-checking-amount-as-per-city",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 20,
      "name": "@smoke1"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Navigate to table \"Web Table Fixed header\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "fetch amount for \"\u003ccity\u003e\" and print",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "verifying-radio-button-selection-and-autosuggestion-selection;user-checking-amount-as-per-city;",
  "rows": [
    {
      "cells": [
        "city"
      ],
      "line": 26,
      "id": "verifying-radio-button-selection-and-autosuggestion-selection;user-checking-amount-as-per-city;;1"
    },
    {
      "cells": [
        "Kolkata"
      ],
      "line": 27,
      "id": "verifying-radio-button-selection-and-autosuggestion-selection;user-checking-amount-as-per-city;;2"
    },
    {
      "cells": [
        "Mumbai"
      ],
      "line": 28,
      "id": "verifying-radio-button-selection-and-autosuggestion-selection;user-checking-amount-as-per-city;;3"
    },
    {
      "cells": [
        "Delhi"
      ],
      "line": 29,
      "id": "verifying-radio-button-selection-and-autosuggestion-selection;user-checking-amount-as-per-city;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4323190900,
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
  "duration": 3428346600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User checking amount as per city",
  "description": "",
  "id": "verifying-radio-button-selection-and-autosuggestion-selection;user-checking-amount-as-per-city;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke1"
    },
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@EndtoEndTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Navigate to table \"Web Table Fixed header\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "fetch amount for \"Kolkata\" and print",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Web Table Fixed header",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.navigate_to_table(String)"
});
formatter.result({
  "duration": 108800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kolkata",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.fetch_amount_for_and_print(String)"
});
formatter.result({
  "duration": 467762600,
  "status": "passed"
});
formatter.after({
  "duration": 729296600,
  "status": "passed"
});
formatter.before({
  "duration": 1375588100,
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
  "duration": 3119050400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User checking amount as per city",
  "description": "",
  "id": "verifying-radio-button-selection-and-autosuggestion-selection;user-checking-amount-as-per-city;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke1"
    },
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@EndtoEndTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Navigate to table \"Web Table Fixed header\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "fetch amount for \"Mumbai\" and print",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Web Table Fixed header",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.navigate_to_table(String)"
});
formatter.result({
  "duration": 195300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.fetch_amount_for_and_print(String)"
});
formatter.result({
  "duration": 397123600,
  "status": "passed"
});
formatter.after({
  "duration": 689315500,
  "status": "passed"
});
formatter.before({
  "duration": 1634724500,
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
  "duration": 3120380000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User checking amount as per city",
  "description": "",
  "id": "verifying-radio-button-selection-and-autosuggestion-selection;user-checking-amount-as-per-city;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke1"
    },
    {
      "line": 20,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@EndtoEndTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Navigate to table \"Web Table Fixed header\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "fetch amount for \"Delhi\" and print",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Web Table Fixed header",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.navigate_to_table(String)"
});
formatter.result({
  "duration": 56500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.fetch_amount_for_and_print(String)"
});
formatter.result({
  "duration": 403462000,
  "status": "passed"
});
formatter.after({
  "duration": 677765800,
  "status": "passed"
});
});