package com.aloha.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.board.domain.Boards;
import com.aloha.board.mapper.BoardMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired BoardMapper boardMapper;

    @Override
    public List<Boards> list() {
        return boardMapper.list();
    }

    @Override
    public Boards select(Long no) {
        return boardMapper.select(no);
    }

    @Override
    public Boards selectById(String id) {
        return boardMapper.selectById(id);
    }

    @Override
    public boolean insert(Boards entity) {
        return boardMapper.insert(entity) > 0;
    }

    @Override
    public boolean update(Boards entity) {
        return boardMapper.update(entity) > 0;
    }

    @Override
    public boolean updateById(Boards entity) {
        return boardMapper.updateById(entity) > 0;
    }

    @Override
    public boolean delete(Long no) {
        return boardMapper.delete(no) > 0;
    }

    @Override
    public boolean deleteById(String id) {
        return boardMapper.deleteById(id) > 0;
    }

    @Override
    public PageInfo<Boards> list(int page, int size) {
        PageHelper.startPage(page, size);
        List<Boards> list = boardMapper.list();
        PageInfo<Boards> pageInfo = new PageInfo<>(list);
        return pageInfo;
    }


    
}
