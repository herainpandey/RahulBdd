package com.rahulshettyacademy.pages;

import com.rahulshettyacademy.utility.PropertyUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import static org.openqa.selenium.support.locators.RelativeLocator.*;


import java.io.IOException;
import java.util.List;

public class PracticePage {
    WebDriver driver;

    public PracticePage(WebDriver driver) throws IOException {
        this.driver=driver;
    }

    //Locators
    By radio = By.xpath(PropertyUtils.getLocator("radioButton"));
    By countries = By.xpath(PropertyUtils.getLocator("countryBox"));
    By countrySearchBox = By.xpath(PropertyUtils.getLocator("countrySearchBox"));
    By tablehead = By.xpath(PropertyUtils.getLocator("tablehead"));
    By tablebody = By.xpath(PropertyUtils.getLocator("tableBody"));

    public void selectRadio(int index){
       List<WebElement> radios=  driver.findElements(radio);
       for(int i=0;i<radios.size();i++){
           if(i==index){
               radios.get(i).click();
               System.out.println(i +"th radio button Clicked..");
               break;
           }
       }
    }

    public void setCountry(String country){

        driver.findElement(countrySearchBox).sendKeys(country);
    }

    public List<WebElement> countryList(){
       return  driver.findElements(countries);
    }

    public void selectCountry(String country){
        List<WebElement> countryList=  driver.findElements(countries);
        boolean flag= false;
        for(int i=0;i<countryList.size();i++){
            if(countryList.get(i).getText().equalsIgnoreCase(country)){
                countryList.get(i).click();
                flag=true;
                break;
            }
        }
        if(flag){
            System.out.println(country + " is selected!!");
        }
        else{
            Assert.fail("Country not found in list");

        }
    }

    public void printCountriesAndAmount(String city){

        List<WebElement> listhead= driver.findElements(tablehead);

        int indexAt=0;
        for(int i=0;i<listhead.size();i++){
            if(listhead.get(i).getText().equalsIgnoreCase("City")){
                indexAt=i;
                break;
            }
        }
        WebElement table= driver.findElement(tablebody);
        List<WebElement> cities =  table.findElements(By.xpath("//legend[contains(text(),'Table Fixed')]//parent::fieldset//table//tbody/tr/td["+(indexAt+1)+"]"));
        List<WebElement> prices = table.findElements(By.xpath("//legend[contains(text(),'Table Fixed')]//parent::fieldset//table//tbody/tr/td/following-sibling::td[3]"));

        System.out.println("***** Going to print price *****");
        for(int i=0;i<cities.size();i++){
            if(cities.get(i).getText().equalsIgnoreCase(city)){
                System.out.println("For "+city+" , price is "+  prices.get(i).getText());
            }
        }

    }



}
