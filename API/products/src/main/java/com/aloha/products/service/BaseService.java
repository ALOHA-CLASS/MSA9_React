package com.aloha.products.service;

import java.util.List;

public interface BaseService<E> {
    List<E> list();
    E select(Long no);
    E selectById(String id);
    boolean insert(E entity);
    boolean update(E entity);
    boolean updateById(E entity);
    boolean delete(Long no);
    boolean deleteById(String id);
}
