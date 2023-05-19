package com.PMS.PharmacyManagementSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

@SpringBootApplication
@EnableSwagger2
public class PharmacyManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(PharmacyManagementSystemApplication.class, args);
	}

}
