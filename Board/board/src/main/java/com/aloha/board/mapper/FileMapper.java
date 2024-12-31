package com.aloha.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.board.domain.Files;

@Mapper
public interface FileMapper extends BaseMapper<Files> {
    
    // 부모 기준 목록
    public List<Files> listByParent(Files file);
    
    // 부모 기준 삭제
    public int deleteByParent(Files file);
    
}
