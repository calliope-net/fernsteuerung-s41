function modell_Callibot () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.sendM0(radio.radio_sendBuffer19())
        radio.setAbstand(radio.radio_sendBuffer19(), radio.e3Abstand.u3)
        radio.setSensor(radio.radio_sendBuffer19(), radio.eBufferPointer.m0, radio.eSensor.b6, true)
    } else if (sender.isFunktion(sender.eFunktion.mc_md_callibot_beispiele)) {
        radio.setBetriebsart(radio.radio_sendBuffer19(), radio.e0Betriebsart.p0)
        radio.setaktiviert(radio.radio_sendBuffer19(), radio.e3aktiviert.md, true)
        radio.setByte(radio.radio_sendBuffer19(), radio.eBufferPointer.md, radio.eBufferOffset.b1_Servo, sender.getButtonAB_Counter())
        if (sender.getButtonAB_Counter() == 2) {
            radio.setAbstand(radio.radio_sendBuffer19(), radio.e3Abstand.u1)
            radio.setSensor(radio.radio_sendBuffer19(), radio.eBufferPointer.mc, radio.eSensor.b6, true)
            radio.setByte(radio.radio_sendBuffer19(), radio.eBufferPointer.mc, radio.eBufferOffset.b0_Motor, radio.speedPicker(100))
            radio.setByte(radio.radio_sendBuffer19(), radio.eBufferPointer.md, radio.eBufferOffset.b0_Motor, radio.speedPicker(50))
        }
        radio.setaktiviert(radio.radio_sendBuffer19(), radio.e3aktiviert.mc, sender.getButtonAB_Switch(sender.eButtonAB_Switch.B))
    }
    radio.setSchalter(radio.radio_sendBuffer19(), radio.e0Schalter.b0, sender.joystickButtonPosition())
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (sender.buttonA()) {
        storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    sender.buttonAB()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (sender.buttonB()) {
        storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
    }
})
function modell_MKC () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.sendM0(radio.radio_sendBuffer19())
    } else if (sender.isFunktion(sender.eFunktion.m0_m1_s0)) {
        sender.sendM01(radio.radio_sendBuffer19())
    } else if (sender.isFunktion(sender.eFunktion.ma_mb)) {
        sender.sendMAB(radio.radio_sendBuffer19())
    } else if (sender.isFunktion(sender.eFunktion.mc_mb)) {
        sender.sendMCB(radio.radio_sendBuffer19())
    }
    radio.setSchalter(radio.radio_sendBuffer19(), radio.e0Schalter.b0, sender.joystickButtonPosition())
    radio.setSchalter(radio.radio_sendBuffer19(), radio.e0Schalter.b1, sender.getButtonAB_Switch(sender.eButtonAB_Switch.A))
    radio.setSchalter(radio.radio_sendBuffer19(), radio.e0Schalter.b2, sender.getButtonAB_Switch(sender.eButtonAB_Switch.B))
    radio.setSchalter(radio.radio_sendBuffer19(), radio.e0Schalter.b3, sender.getButtonAB_Switch(sender.eButtonAB_Switch.AB))
}
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    radio.setFunkgruppeButton(radio.eFunkgruppeButton.minus)
    storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
})
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    radio.setFunkgruppeButton(radio.eFunkgruppeButton.plus)
    storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
})
input.onButtonEvent(Button.AB, ButtonEvent.Hold, function () {
    sender.setSendReset(true)
})
sender.beimStart(
true,
storage.getNumber(StorageSlots.s1)
)
storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
loops.everyInterval(400, function () {
    if (sender.isFunktion(sender.eFunktion.ng) && sender.joystickQwiic()) {
        basic.setLedColor(0x007fff)
        radio.comment(sender.multiswitchGrove())
        radio.fill_sendBuffer19()
        if (sender.isModell(sender.eModell.cb2e)) {
            modell_Callibot()
        } else if (sender.isModell(sender.eModell.mkcg) || sender.isModell(sender.eModell.mkck)) {
            modell_MKC()
        }
        radio.sendData(radio.radio_sendBuffer19())
        radio.zeige5x5Buffer(radio.radio_sendBuffer19())
        radio.zeige5x5Joystick(radio.radio_sendBuffer19())
        basic.turnRgbLedOff()
    }
})
