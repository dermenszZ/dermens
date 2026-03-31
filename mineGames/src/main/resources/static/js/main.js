/**
 * MineGame 官网主JavaScript文件
 * 提供基本的交互功能和用户体验增强
 */

// 等待DOM加载完成后执行
 document.addEventListener('DOMContentLoaded', function() {
    // 导航菜单响应式处理
    setupResponsiveNavigation();
    
    // 平滑滚动效果
    setupSmoothScroll();
    
    // 页面加载动画
    animateOnPageLoad();
    
    // 按钮悬停效果
    enhanceButtonInteractions();
});

/**
 * 设置响应式导航菜单
 */
function setupResponsiveNavigation() {
    // 在移动设备上可能需要的菜单切换功能
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    navToggle.style.display = 'none'; // 默认隐藏，可在CSS中根据屏幕大小显示
    
    const nav = document.querySelector('nav');
    if (nav) {
        nav.prepend(navToggle);
        
        navToggle.addEventListener('click', function() {
            const menu = nav.querySelector('ul');
            if (menu) {
                menu.classList.toggle('show');
            }
        });
    }
    
    // 窗口大小变化时的响应
    window.addEventListener('resize', function() {
        adjustNavigation();
    });
    
    adjustNavigation();
}

/**
 * 根据窗口大小调整导航菜单
 */
function adjustNavigation() {
    const menu = document.querySelector('nav ul');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (window.innerWidth < 768) {
        if (menu) menu.style.display = 'none';
        if (navToggle) navToggle.style.display = 'block';
    } else {
        if (menu) {
            menu.style.display = 'flex';
            menu.classList.remove('show');
        }
        if (navToggle) navToggle.style.display = 'none';
    }
}

/**
 * 设置平滑滚动效果
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 考虑导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 为内部页面链接也添加平滑滚动
    document.querySelectorAll('nav a').forEach(navLink => {
        navLink.addEventListener('click', function(e) {
            // 只有同一页面的锚点链接才阻止默认行为
            if (this.getAttribute('href').startsWith('#')) {
                return;
            }
            
            // 可以添加页面切换动画
            document.body.classList.add('page-transition');
        });
    });
}

/**
 * 页面加载动画
 */
function animateOnPageLoad() {
    // 添加渐入效果
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
    
    // 为主要内容部分添加动画
    const sections = document.querySelectorAll('main > section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });
}

/**
 * 增强按钮交互效果
 */
function enhanceButtonInteractions() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // 鼠标悬停时的效果
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        // 鼠标离开时的效果
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        // 点击时的效果
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        // 添加过渡效果
        button.style.transition = 'all 0.3s ease';
    });
}

/**
 * 功能扩展：可以添加游戏预告片视频播放功能
 */
function setupVideoPlayer() {
    const videoButtons = document.querySelectorAll('[data-video]');
    
    videoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            // 这里可以实现视频模态框或直接在页面中播放视频
            console.log('播放视频:', videoId);
            // 示例实现：alert('视频播放功能待实现: ' + videoId);
        });
    });
}

// 导出一些函数供其他脚本使用（如果需要）
window.MineGame = {
    setupResponsiveNavigation,
    setupSmoothScroll,
    animateOnPageLoad
};
