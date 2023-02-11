package Selenium_Package;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class phptravels {

	public static void main(String[] args) 
	{
		
		System.setProperty("webdriver.chrome.driver","F:\\Preksha\\SoftwareTesting\\old projects\\APPLICATIONS\\Browser\\chromedriver_win32\\chromedriver.exe");

		WebDriver driver=new ChromeDriver();

		System.out.println("Sucess...");
		
		driver.manage().window().maximize();
		System.out.println("maximize");	
		driver.get("https://phptravels.com/demo/");
		
		//******************************************************sign_up**********************************************************************
		
		driver.findElement(By.xpath(("//a[@class='jfHeader-menuListLink jfHeader-dynamicLink jfHeader-signup-action signup']"))).click();
		
			
		/*driver.findElement(By.xpath(("(//*[text()='Enter city or airport'] [1])"))).click();
		
		driver.findElement(By.xpath(("//input[@type='text']"))).sendKeys("Pune");

		driver.findElement(By.xpath(("(//*[text()='Pune Airport'])"))).click();
		
		//driver.findElement(By.xpath(("(//*[text()='Enter city or port'])"))).click();
		
		driver.findElement(By.xpath(("//input[@type='text']"))).sendKeys("Bengaluru");
		
		driver.findElement(By.xpath(("(//*[text()='Bengaluru International Airport'])"))).click();
				
				driver.findElement(By.xpath(("//span[@class='DayPicker-NavButton DayPicker-NavButton--next']"))).click();
				driver.findElement(By.xpath(("//span[@class='DayPicker-NavButton DayPicker-NavButton--next']"))).click();
				//	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
				driver.findElement(By.xpath(("//div[@aria-label='Wed Dec 07 2022']"))).click();
		//		driver.manage().timeouts().implicitlyWait(70, TimeUnit.SECONDS);
				driver.findElement(By.xpath(("//span[@class='fswTrvl__done']"))).click();
				
				driver.findElement(By.xpath(("//*[text()='business'] "))).click();
				driver.findElement(By.xpath(("//a[@class='sc-dtMgUX daltrV']"))).click();
		//		driver.manage().timeouts().implicitlyWait(70, TimeUnit.SECONDS);
				//Thread.sleep(9000);
				WebDriverWait wait = new WebDriverWait(driver, 90);
				wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[text()='SEARCH FLIGHTS'] ")));
				driver.findElement(By.xpath(("//*[text()='SEARCH FLIGHTS'] "))).click();
				
				
				
				
				
		//		driver.manage().timeouts().implicitlyWait(800, TimeUnit.SECONDS);
				
				//driver.findElement(By.xpath(("//button[@class='srp-card-uistyles__BookButton-sc-3flq99-21 jwPCLd dF justifyCenter alignItemsCenter txtUpper']"))).click();
*/
		driver.close();
		}
	}

