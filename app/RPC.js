let RPC = {
    config:'config',
    console_log:"console_log",
    open_dev_tools:"open_dev_tools",
    close_dev_tools:"close_dev_tools",
    show_mtn:'show_mtn',
    mail:'mail',
    chrome_history:"chrome_history",
    focus:"focus",// 获得焦点
    is_debug:"is_debugs",
    ondragstart:'ondragstart',// 文件拖拽
    web:{
        // 查询谷歌浏览器历史
        chrome_history_list:'chrome_history_list'
    },
    model:{
        load:"load"
    },
    // 展示主窗口
    show_main_window:"show_main_window",
}
module.exports = {
    RPC
}