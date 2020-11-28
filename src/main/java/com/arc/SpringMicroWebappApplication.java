package com.arc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SpringMicroWebappApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringMicroWebappApplication.class, args);
	}

}
