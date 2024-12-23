package com.aloha.products.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.products.domain.Products;
import com.aloha.products.mapper.ProductMapper;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired private ProductMapper productMapper;

    @Override
    public List<Products> list() {
        return productMapper.list();
    }

    @Override
    public Products select(Long no) {
        return productMapper.select(no);
    }

    @Override
    public Products selectById(String id) {
        return productMapper.selectById(id);
    }

    @Override
    public boolean insert(Products entity) {
        return productMapper.insert(entity) > 0;
    }

    @Override
    public boolean update(Products entity) {
        return productMapper.update(entity) > 0;
    }

    @Override
    public boolean updateById(Products entity) {
        return productMapper.updateById(entity) > 0;
    }

    @Override
    public boolean delete(Long no) {
        return productMapper.delete(no) > 0;
    }

    @Override
    public boolean deleteById(String id) {
        return productMapper.deleteById(id) > 0;
    }
    
}
