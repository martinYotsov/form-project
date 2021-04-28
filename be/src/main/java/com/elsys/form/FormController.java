package com.elsys.form;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class FormController {
    @Autowired
    private FormRepository formRepository;
    @Autowired
    private OptionRepository optionRepository;


    @PostMapping("createform")
    public FormEntity CreateForm(@RequestBody FormEntity form) throws Exception {
        try {
            return formRepository.save(form);
        } catch (Exception e){
            throw new Exception(e);
        }
    }

    @PostMapping("votequestion")
    public void VoteQuestion(@RequestParam("id") Long id) {
        OptionEntity option = optionRepository.findById(id).orElse(null);
        assert option != null;
        option.setVotes(option.getVotes() + 1);
        optionRepository.save(option);
    }

    @GetMapping("viewform")
    public FormEntity ViewForm(@RequestParam("id") Long id) {
        return formRepository.findById(id).orElse(null);
    }

}
