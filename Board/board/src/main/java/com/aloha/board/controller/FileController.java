package com.aloha.board.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.board.domain.Files;
import com.aloha.board.service.FileService;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/files")
public class FileController {

    @Autowired private FileService fileService;

    @Autowired ResourceLoader resourceLoader;

    
    @GetMapping()
    public ResponseEntity<?> getAllFile() {
        try {
            List<Files> list = fileService.list();
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getOneFile(@PathVariable String id) {
        try {
            Files file = fileService.selectById(id);
            return new ResponseEntity<>(file, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> createFile(@RequestBody Files file) {
        try {
            boolean result = fileService.insert(file);
            if( result ) {
                return new ResponseEntity<>("SUCCESS", HttpStatus.CREATED);
            }
            else {
                return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> updateFile(@RequestBody Files file) {
        try {
            boolean result = fileService.updateById(file);
            if( result ) {
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroyFile(@PathVariable("id") String id) {
        try {
            boolean result = fileService.deleteById(id);
            if( result ) {
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 파일 선택 삭제
     * @param noList : { "noList" : [1,2,3] }
     * @param noList : ?noList=1,2,3
     * @param idList : { "idList" : ['id1','id2','id3'] }
     * @param idList : ?idList=id1,id2,id3 
     * @return
     */
    @DeleteMapping("")
    public ResponseEntity<?> deleteFiles(
        @RequestParam(value = "noList", required = false) List<Long> noList,
        @RequestParam(value = "idList", required = false) List<String> idList
    ) {
        log.info("noList[] : " + noList);
        log.info("idList[] : " + idList);
        boolean result = false;
        if( noList != null ) {
            result = fileService.deleteFiles(noList);
        }
        if( idList != null ) {
            result = fileService.deleteFilesById(idList);
        }
        if( result )
            return new ResponseEntity<>(HttpStatus.OK);

        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }



    /**
     * 파일 다운로드
     * @param id
     * @param response
     * @throws Exception
     */
    @GetMapping("/download/{id}")
    public void fileDownload(
        @PathVariable("id") String id,
        HttpServletResponse response
    ) throws Exception {
        fileService.download(id, response);
    }

    /**
     * 썸네일 이미지
     * @param id
     * @throws IOException 
     */
    @GetMapping("/img/{id}")
    public void thumbnailImg(
        @PathVariable("id") String id,
        HttpServletResponse response
    ) throws IOException {
        Files file = fileService.selectById(id);
        String filePath = file != null ? file.getFilePath() : null;

        File imgFile;
        // 파일 경로가 null 또는 파일이 존재하지 않는 경우
        Resource resource = resourceLoader.getResource("classpath:static/img/no-image.png");
        if( filePath == null || !(imgFile = new File(filePath)).exists() ) {
            // no-image.png 적용
            imgFile = resource.getFile();
            filePath = imgFile.getPath();
        }

        // 확장자
        String ext = filePath.substring(filePath.lastIndexOf(".") + 1);
        String mimeType = MimeTypeUtils.parseMimeType("image/" + ext).toString();
        MediaType mType = MediaType.valueOf(mimeType);

        if( mType == null ) {
            // 이미지 타입이 아닌 경우
            response.setContentType(MediaType.IMAGE_PNG_VALUE);
            imgFile = resource.getFile();
        } else {
            // 이미지 타입인 경우
            response.setContentType(mType.toString());
        }
        FileInputStream fis = new FileInputStream(imgFile);
        ServletOutputStream sos = response.getOutputStream();
        FileCopyUtils.copy(fis, sos);
    }
    
    
    
}
