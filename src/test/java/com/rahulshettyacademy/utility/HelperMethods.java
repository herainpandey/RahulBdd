package com.rahulshettyacademy.utility;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class HelperMethods {

     WebDriver driver;
    public HelperMethods(WebDriver driver){
        this.driver=driver;
    }

    public void scrollToElement(String element){
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].scrollIntoView(true);",element);
    }
}
