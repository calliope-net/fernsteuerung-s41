input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sender.buttonA()
    storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    sender.buttonAB()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sender.buttonB()
    storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
})
radio.comment(input.temperature())
sender.beimStart(storage.getNumber(StorageSlots.s1))
storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
loops.everyInterval(400, function () {
    if (sender.isFunktion(sender.eFunktion.ng) && sender.joystickQwiic()) {
        basic.setLedColor(0x00ff00)
        radio.fill_sendBuffer19()
        if (sender.isFunktion(sender.eFunktion.m0_s0)) {
            sender.sendM0(radio.radio_sendBuffer19())
        } else if (sender.isFunktion(sender.eFunktion.m0_m1_s0)) {
            sender.sendM01(radio.radio_sendBuffer19())
        } else if (sender.isFunktion(sender.eFunktion.ma_mb)) {
            sender.sendMAB(radio.radio_sendBuffer19())
        } else if (sender.isFunktion(sender.eFunktion.mc_mb)) {
            sender.sendMCB(radio.radio_sendBuffer19())
        }
        radio.sendData(radio.radio_sendBuffer19())
        radio.zeige5x5Buffer(radio.radio_sendBuffer19())
        radio.zeige5x5Joystick(radio.radio_sendBuffer19())
        basic.turnRgbLedOff()
    }
})
