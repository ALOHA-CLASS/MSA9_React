## springdoc openapi (swagger)

## build.gradle
```
    // Springdoc openapi
	implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.7.0'
```

## SwaggerConfig.java
```
@Configuration
public class SwaggerConfig {
 
    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("aloha") // 그룹명 설정
                .pathsToMatch("/**") // 경로 설정
                .build();
    }

    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("상품 관리 Proejct API")
                        .description("상품 관리 프로젝트 API 입니다.")
                        .version("v0.0.1"));
    }

    
}
```

## 기본 경로
http://localhost:8080/swagger-ui/index.html 