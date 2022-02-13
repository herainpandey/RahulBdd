package com.rahulshettyacademy.utility;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class PropertyUtils {

    static Properties properties;
    public static String getLocator(String key) throws IOException {
        if(properties==null) {
            properties = new Properties();
        }
        FileInputStream fis = new FileInputStream(System.getProperty("user.dir")+"//propertiesfile/locator.properties");
        properties.load(fis);
        return properties.getProperty(key);
    }

    public static String getTestData(String key) throws IOException {
        if(properties==null) {
            properties = new Properties();
        }
        FileInputStream fis = new FileInputStream(System.getProperty("user.dir")+"//propertiesfile/testdata.properties");
        properties.load(fis);
        return properties.get(key).toString();
    }

}
