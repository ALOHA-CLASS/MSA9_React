package com.aloha.todo.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.todo.domain.Todos;

@Mapper
public interface TodoMapper extends BaseMapper<Todos> {
    
}
