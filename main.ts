let lightsig = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    lightsig = input.lightLevel()
    serial.writeLine("" + (lightsig))
})
