// 获取屏幕宽度计算字体大小
export default {
    fontSize(res) {
        let docEl = document.documentElement,
            clientWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
    }
}