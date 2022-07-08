const panels = document.querySelectorAll('.panel')


/** 
* @description 添加监听事件，每一张图片点击是触发active样式并取消其他图片的active 样式  
* @author hu_ty
* @since 
* @param {*} 
* 
*/
panels.forEach( panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

/** 
* @description  移除活跃样式动画
* @author hu_ty
* @since 
* @param {*} 
* 
*/
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}