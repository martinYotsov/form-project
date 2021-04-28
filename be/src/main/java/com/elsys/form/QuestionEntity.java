package com.elsys.form;

import javax.persistence.*;
import java.util.Set;

@Entity
public class QuestionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String question;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<OptionEntity> options;

    public QuestionEntity() {
    }

    public Long getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Set<OptionEntity> getOptions() {
        return options;
    }

    public void setOptions(Set<OptionEntity> options) {
        this.options = options;
    }
}
