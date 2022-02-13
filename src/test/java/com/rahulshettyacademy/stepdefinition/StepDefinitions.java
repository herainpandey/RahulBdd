package com.rahulshettyacademy.stepdefinition;

import com.rahulshettyacademy.pages.PracticePage;
import com.rahulshettyacademy.utility.PropertyUtils;
import com.rahulshettyacademy.utility.HelperMethods;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;


public class StepDefinitions {
    WebDriver driver;
    PracticePage page;
    HelperMethods help;

    @Before
    public void initializeDriver() throws IOException {
        System.out.println("I'm initializing the browser");
        if(driver==null){
            if(PropertyUtils.getTestData("browser").equalsIgnoreCase("chrome"))
            {
                System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\Driver\\chromedriver.exe");
                driver = new ChromeDriver();
                driver.manage().window().maximize();
                driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
            }
            else
            {
                System.out.println("Chrome browser is not provided");
            }

        }
    }




    @Given("^User launch website \"([^\"]*)\"$")
    public void user_launch_website(String url) throws Throwable {
        driver.get(url);
    }

    @Then("^radio button should be clicked$")
    public void radio_button_should_be_clicked() throws Throwable {
        System.out.println("its clicked!");
    }

    @When("^User types \"([^\"]*)\" in Suggestion box$")
    public void user_types_in_Suggestion_box(String country) throws Throwable {
        page = new PracticePage(driver);
        page.setCountry(country);
    }

    @Then("^User will see list of countries in Suggestion related to Ind$")
    public void user_will_see_list_of_countries_in_Suggestion_related_to_Ind() throws Throwable {
        //page = new PracticePage(driver);
        List<WebElement> list = page.countryList();
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i).getText());
        }
    }

    @Then("^User clicks on \"([^\"]*)\"$")
    public void user_clicks_on(String country) throws Throwable {
       page.selectCountry(country);
    }

    @Given("^User clicks on \"([^\"]*)\"nd radio button$")
    public void user_clicks_on_nd_radio_button(int arg1) throws Throwable {
            page = new PracticePage(driver);
            page.selectRadio(arg1-1);
            Thread.sleep(2000);
        }

    @Given("^Navigate to table \"([^\"]*)\"$")
    public void navigate_to_table(String text) throws Throwable {
        /*help = new HelperMethods(driver);
        help.scrollToElement(text);*/
    }

    @Then("^fetch amount for \"([^\"]*)\" and print$")
    public void fetch_amount_for_and_print(String city) throws Throwable {
        page = new PracticePage(driver);
       page.printCountriesAndAmount(city);
    }

    @After
    public void quitBrowser(){
        System.out.println("I'm closing the browser");
        driver.close();
        driver.quit();
    }

}

