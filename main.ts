function modell_Callibot () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.sendM0(btf.btf_sendBuffer19())
        btf.setAbstand(btf.btf_sendBuffer19(), btf.e3Abstand.u3)
        btf.setSensor(btf.btf_sendBuffer19(), btf.eBufferPointer.m0, btf.eSensor.b6, true)
    } else if (sender.isFunktion(sender.eFunktion.mc_md_callibot_beispiele)) {
        btf.setBetriebsart(btf.btf_sendBuffer19(), btf.e0Betriebsart.p0)
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.md, true)
        btf.setByte(btf.btf_sendBuffer19(), btf.eBufferPointer.md, btf.eBufferOffset.b1_Servo, sender.getButtonAB_Counter())
        if (sender.getButtonAB_Counter() == 2) {
            btf.setAbstand(btf.btf_sendBuffer19(), btf.e3Abstand.u1)
            btf.setSensor(btf.btf_sendBuffer19(), btf.eBufferPointer.mc, btf.eSensor.b6, true)
            btf.setByte(btf.btf_sendBuffer19(), btf.eBufferPointer.mc, btf.eBufferOffset.b0_Motor, btf.speedPicker(89))
            btf.setByte(btf.btf_sendBuffer19(), btf.eBufferPointer.md, btf.eBufferOffset.b0_Motor, btf.speedPicker(73))
        } else if (sender.getButtonAB_Counter() == 3) {
            btf.setByte(btf.btf_sendBuffer19(), btf.eBufferPointer.md, btf.eBufferOffset.b1_Servo, sender.getButtonAB_Counter())
        }
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.mc, sender.getButtonAB_Switch(sender.eButtonAB_Switch.B))
    }
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b0, sender.joystickButtonPosition())
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sender.buttonA()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    sender.buttonAB()
})
input.onButtonEvent(Button.B, sender.buttonEventValue(ButtonEvent.Hold), function () {
    btf.setFunkgruppeButton(btf.eFunkgruppeButton.plus)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sender.buttonB()
})
input.onButtonEvent(Button.AB, sender.buttonEventValue(ButtonEvent.Hold), function () {
    sender.setSendReset(true)
})
input.onButtonEvent(Button.A, sender.buttonEventValue(ButtonEvent.Hold), function () {
    btf.setFunkgruppeButton(btf.eFunkgruppeButton.minus)
})
function modell_MKC () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.sendM0(btf.btf_sendBuffer19())
    } else if (sender.isFunktion(sender.eFunktion.m0_m1_s0)) {
        sender.sendM01(btf.btf_sendBuffer19())
    } else if (sender.isFunktion(sender.eFunktion.ma_mb)) {
        sender.sendMAB(btf.btf_sendBuffer19())
    } else if (sender.isFunktion(sender.eFunktion.mc_mb)) {
        sender.sendMCB(btf.btf_sendBuffer19())
    }
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b0, sender.joystickButtonPosition())
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b1, sender.getButtonAB_Switch(sender.eButtonAB_Switch.A))
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b2, sender.getButtonAB_Switch(sender.eButtonAB_Switch.B))
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b3, sender.getButtonAB_Switch(sender.eButtonAB_Switch.AB))
}
sender.beimStart()
loops.everyInterval(400, function () {
    if (sender.isFunktion(sender.eFunktion.ng) && sender.joystickQwiic()) {
        basic.setLedColor(0x007fff)
        btf.comment(sender.multiswitchGrove())
        btf.fill_sendBuffer19()
        if (sender.isModell(sender.eModell.cb2e)) {
            modell_Callibot()
        } else if (sender.isModell(sender.eModell.mkcg) || sender.isModell(sender.eModell.mkck)) {
            modell_MKC()
        }
        btf.sendData(btf.btf_sendBuffer19())
        btf.zeige5x5Buffer(btf.btf_sendBuffer19())
        btf.zeige5x5Joystick(btf.btf_sendBuffer19())
        basic.turnRgbLedOff()
    }
})
