package com.mspr.arosaje;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ARosaJeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ARosaJeApplication.class, args);
	}

}
