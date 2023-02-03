basic.forever(function () {
    if (input.temperature() < 20) {
        basic.setLedColor(0x0000ff)
    } else if (input.temperature() > 25) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0xffff00)
    }
})
