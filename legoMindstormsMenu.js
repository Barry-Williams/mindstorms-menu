let menuOpts: string[] = []
let menucommitted = 0
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    menu += 1
    if (menu >= menuOpts.length) {
        menu = 0
    }
})
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    brick.clearScreen()
    if (menucommitted == -1) {
        menucommitted = menu
    } else {
        menu = 0
        menucommitted = -1
    }
})
let menu = 0
menucommitted = -1
menuOpts = ["calibrate", "follow line", "show rli"]
forever(function () {
    if (menucommitted == -1) {
        for (let i = 0; i < menuOpts.length; i++) {
            brick.showString(menu == i ? "* " + menuOpts[i] : menuOpts[i], i + 1)
        }
        //brick.showString(menu == 0 ? "* " + menuOpts[0] : menuOpts[0], 1)
        //brick.showString(menu == 1 ? "* follow line" : "follow line", 2)
    }
    if (menucommitted == 0) {
        brick.showString("prog 1", 1)
    }
    if (menucommitted == 1) {
        brick.showString("prog 2", 1)
    }
    if (menucommitted == 2) {
        brick.showValue("rli", sensors.color3.reflectedLight(), 1)
    }
})
