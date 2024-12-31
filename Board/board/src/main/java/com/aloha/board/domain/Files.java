package com.aloha.board.domain;

import java.util.Date;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class Files {
    
    private Long no;            // PK
    private String id;          // UK
    private String pTable;      // 부모 테이블
    private Long pNo;           // 부모PK
    private String type;        // 파일종류('MAIN','SUB')
    private String fileName;    // 파일명
    private String originName;  // 원본파일명
    private String filePath;    // 파일경로
    private Long fileSize;      // 용량
    private Long seq;           // 순서
    private Date createdAt;     // 등록일자
    private Date updatedAt;     // 수정일자

    // 파일 데이터
    MultipartFile data;

    public Files() {
        this.id = UUID.randomUUID().toString();
    }
    
}
