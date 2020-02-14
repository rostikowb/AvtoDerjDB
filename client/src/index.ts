import {ipcMain, app} from 'electron';
import {createWindow, mainWindow} from './core/createWindow'
import sendFile from './modules/mainProc/send/sendFile'
import sendStartEvent from './modules/mainProc/send/sendEventStart'
import sendCheck from './modules/mainProc/send/sendCheck'
// declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);


// Function to start the process of uploading files and start adding them to the database
ipcMain.on('path', async (event: any, arg: any) => {

    if (Object.keys(arg).length !== 0) {
        event.reply('msg', 'Unloading started');

        let i = arg.length;
        const startSends = (args: string[]) => {
            i--;
            sendFile(args[i])
                .then(async (res:any) => {

                    event.reply('status', {id: i, status: res.result});

                    if (!res.result) {
                        if(res.msg){
                            event.reply('msg', res.msg)
                        }
                    }

                    if (i) {
                        startSends(arg);
                    } else {
                        console.log('startEventResp: ', await sendStartEvent());
                    }

                })
                .catch(err => {
                    event.reply('status', {id: i, status: false});
                    console.log(err);
                });
        };
        startSends(arg);
    } else {
        event.reply('msg', 'You have not selected any files')
    }

});


// Start Event of checking the status of adding files to the database
ipcMain.on('check', async (event: any, arg: any) => {
    sendCheck()
        .then(res => {
            event.reply('check', res)
        })
        .catch()
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

