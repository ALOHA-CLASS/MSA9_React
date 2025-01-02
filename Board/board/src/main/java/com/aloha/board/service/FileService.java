package com.aloha.board.service;

import java.util.List;

import com.aloha.board.domain.Files;

import jakarta.servlet.http.HttpServletResponse;

public interface FileService extends BaseService<Files> {

    // 부모 기준 목록
    public List<Files> listByParent(Files file);
    
    // 부모 기준 삭제
    public int deleteByParent(Files file);

    // ⬆파일 업로드
    public int upload(Files file) throws Exception;
    public int upload(List<Files> fileList) throws Exception;

    // ⬇파일 다운로드
    public int download(String id, HttpServletResponse response) throws Exception;

    // 선택 삭제 - no
    public boolean deleteFiles(List<Long> noList);
    
    // 선택 삭제 - id
    public boolean deleteFilesById(List<String> idList);

    
}
