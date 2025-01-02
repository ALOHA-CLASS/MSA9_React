

-- 서브쿼리
SELECT *
      ,(SELECT id FROM files WHERE p_no = b.no AND `type` = 'MAIN' ) main_file_id
FROM boards b
;

-- 조인
SELECT *
FROM boards b LEFT JOIN files f 
              ON f.p_no = b.no AND `type` = 'MAIN'
;