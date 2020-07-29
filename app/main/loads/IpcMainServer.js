// 在主进程中.
const { ipcMain } = require('electron')
const { Config } = require('../libs/Config.js')

ipcMain.on(RPC.console_log, (event, arg) => {
    console.log(arg) // prints "ping"
})
ipcMain.on(RPC.config, (event, arg) => {
    event.returnValue = Config
})
ipcMain.on(RPC.ondragstart, (event, filePath) => {
    console.log(filePath)
    event.sender.startDrag({
        file: filePath,
        icon: '/path/to/icon.png'
    })
})
ipcMain.on(RPC.open_dev_tools, (event, arg) => {
    main.webContents.openDevTools()
})
ipcMain.on(RPC.close_dev_tools, (event, arg) => {
    main.webContents.closeDevTools()
})
ipcMain.on(RPC.focus,(event, args) => {
    main.focus()
    event.returnValue = 0;
})

