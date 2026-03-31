package com.minegame.test;

public class test {

    // 匿名内部类
    Runnable runnable1 = new Runnable() {
        @Override
        public void run() {
                System.out.println("匿名内部类");
        }
    };

    // lambda表达式
    Runnable runnable2 = () -> {
        System.out.println("lambda表达式");
    };
}
