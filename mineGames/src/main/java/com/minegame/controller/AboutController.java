package com.minegame.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AboutController {

    @GetMapping("/about")
    public String about(Model model) {
        model.addAttribute("title", "关于游戏");
        model.addAttribute("gameName", "MineGame"); // 添加gameName属性
        return "about";
    }

}