package com.elsys.form;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<FormEntity, Long> {
}
