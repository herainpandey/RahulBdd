package com.rahulshettyacademy.runner;
import com.vimalselvam.cucumber.listener.ExtentProperties;
import com.vimalselvam.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "FeatureFile", monochrome = true, dryRun = true, glue="com.rahulshettyacademy.stepdefinition",strict = true,
        tags = {"@smoke1"},
        plugin = {"pretty:target/cucumber-pretty.txt",
                   "html:target/cucumber-report/",
                   "junit:target/cucumber-results.xml",
                   "json:target/cucumber.json",
                   "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:"}
                   )
public class TestRunner {

    @BeforeClass
public static void setReportConfiguration(){
        ExtentProperties properties = ExtentProperties.INSTANCE;
        properties.setReportPath("./Reports/Reports.html");
}
    @AfterClass
    public static void setConfiguration(){
        Reporter.loadXMLConfig("./Config/extent-config.xml");
    }

}


