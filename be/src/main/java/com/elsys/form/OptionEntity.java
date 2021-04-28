package com.elsys.form;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OptionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String quest_option;
    private int votes = 0;

    public OptionEntity() {
    }

    public Long getId() {
        return id;
    }

    public String getQuest_option() {
        return quest_option;
    }

    public void setQuest_option(String quest_option) {
        this.quest_option = quest_option;
    }

    public int getVotes() {
        return votes;
    }

    public void setVotes(int votes) {
        this.votes = votes;
    }
}
