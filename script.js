// Logo 动画增强
const logo = document.querySelector('.animated-logo');

function updateLogoColors() {
    const colors = [
        '#ffffff',
        '#cccccc',
        '#999999',
        '#666666',
        '#333333'
    ];
    
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    
    logo.style.background = `linear-gradient(${Math.random() * 360}deg, ${color1}, ${color2})`;
}

// 每10秒更新一次颜色（与形状变化同步）
setInterval(updateLogoColors, 10000); 