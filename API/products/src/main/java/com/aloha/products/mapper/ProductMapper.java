package com.aloha.products.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.products.domain.Products;

@Mapper
public interface ProductMapper extends BaseMapper<Products> {
    
    
}
