package com.aloha.products.domain;

import java.util.Date;
import java.util.UUID;

import lombok.Data;

@Data
public class Products {

    private Long no;
    private String id;
    private String title;
    private String content;
    private String img;
    private Long likes;
    private Date createdAt;
    private Date updatedAt;

    public Products() {
        this.id = UUID.randomUUID().toString();
    }
    
}
