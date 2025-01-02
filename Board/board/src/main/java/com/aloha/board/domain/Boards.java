package com.aloha.board.domain;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class Boards {

    private Long no;
    private String id;
    private String title;
    private String writer;
    private String content;
    private Date createdAt;
    private Date updatedAt;

    // 📄파일
    private MultipartFile mainFile;
    private List<MultipartFile> files;   

    // 파일정보
    Files file;
    

    public Boards() {
        this.id = UUID.randomUUID().toString();
    }
    
}
