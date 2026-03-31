package com.minegame.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ContactController {

    @GetMapping("/contact")
    public String contact(Model model) {
        model.addAttribute("title", "联系我们");
        model.addAttribute("gameName", "MineGame"); // 添加gameName属性
        return "contact";
    }

}