import {BrowserWindow } from 'electron';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
export let mainWindow: Electron.BrowserWindow;

export const createWindow = () =>{
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();


    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
};

