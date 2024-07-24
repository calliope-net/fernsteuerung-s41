function modell_Callibot () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.send00M0Joystick(
        btf.btf_sendBuffer19(),
        sender.sender_xmotor(),
        sender.sender_servo16(),
        sender.sender_ButtonA_Switch(),
        btf.e3Abstand.u2
        )
        btf.setSensor(btf.btf_sendBuffer19(), btf.eBufferPointer.m0, btf.eSensor.b5Spur, sender.sender_ButtonB_Switch())
    } else if (sender.isFunktion(sender.eFunktion.mc_md_callibot_beispiele)) {
        sender.send10Spurfolger(
        btf.btf_sendBuffer19(),
        192,
        160,
        31,
        0,
        sender.sender_ButtonA_Switch(),
        btf.e3Abstand.u2
        )
        btf.comment(btf.btf_text("MC dauerhaft Schleife"))
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.mc, sender.sender_ButtonB_Switch())
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.md, sender.sender_ButtonB_Switch())
    } else if (sender.isFunktion(sender.eFunktion.m1abcd_fahrplan) && sender.sender_ButtonA_Switch()) {
        sender.send20Strecken(
        btf.btf_sendBuffer19(),
        sender.sender_Strecke(192, 31, 40),
        sender.sender_Strecke(64, 31, 40),
        sender.sender_Strecke(255, 16, 20),
        sender.sender_Strecke(192, 1, 150),
        sender.sender_Strecke(1, 16, 20)
        )
        btf.setAbstand(btf.btf_sendBuffer19(), btf.e3Abstand.u2)
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.m1, true)
    } else if (sender.isFunktion(sender.eFunktion.m1abcd_fahrplan) && sender.sender_ButtonB_Switch()) {
        btf.setBetriebsart(btf.btf_sendBuffer19(), btf.e0Betriebsart.p2Fahrplan)
        btf.setByte(btf.btf_sendBuffer19(), btf.eBufferPointer.ma, btf.eBufferOffset.b0_Motor, 192)
        btf.setByte(btf.btf_sendBuffer19(), btf.eBufferPointer.mb, btf.eBufferOffset.b0_Motor, 64)
        btf.setByte(btf.btf_sendBuffer19(), btf.eBufferPointer.ma, btf.eBufferOffset.b2_Fahrstrecke, 25)
        btf.setByte(btf.btf_sendBuffer19(), btf.eBufferPointer.mb, btf.eBufferOffset.b2_Fahrstrecke, 25)
        btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.ma, true)
    } else if (sender.isFunktion(sender.eFunktion.m1abcd_fahrplan)) {
        btf.setBetriebsart(btf.btf_sendBuffer19(), btf.e0Betriebsart.p2Fahrplan)
    }
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b0, sender.joystickButtonPosition())
}
input.onButtonEvent(Button.AB, btf.buttonEventValue(ButtonEvent.Hold), function () {
    sender.setSendReset(true)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sender.buttonA()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    sender.buttonAB()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sender.buttonB()
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonBhold()
})
function modell_MKC () {
    if (sender.isFunktion(sender.eFunktion.m0_s0)) {
        sender.send00M0Joystick(
        btf.btf_sendBuffer19(),
        sender.sender_xmotor(),
        sender.sender_servo16(),
        sender.sender_ButtonA_Switch(),
        btf.e3Abstand.u2
        )
    } else if (sender.isFunktion(sender.eFunktion.m0_m1_s0)) {
        sender.send00M01Gabelstapler(
        btf.btf_sendBuffer19(),
        sender.sender_xmotor(),
        sender.sender_ButtonAB_Counter(),
        sender.sender_ymotor(),
        sender.sender_ButtonA_Switch(),
        btf.e3Abstand.u2
        )
    } else if (sender.isFunktion(sender.eFunktion.ma_mb)) {
        sender.send00MABKran(btf.btf_sendBuffer19(), sender.sender_xmotor(), sender.sender_ymotor())
    } else if (sender.isFunktion(sender.eFunktion.mc_mb)) {
        sender.send00MCBKran(btf.btf_sendBuffer19(), sender.sender_xmotor(), sender.sender_ymotor())
    }
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b0, sender.joystickButtonPosition())
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b1, sender.sender_ButtonA_Switch())
    btf.setSchalter(btf.btf_sendBuffer19(), btf.e0Schalter.b2, sender.sender_ButtonB_Switch())
}
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
})
sender.beimStart()
loops.everyInterval(400, function () {
    if (sender.isFunktion(sender.eFunktion.ng) && sender.joystickQwiic()) {
        basic.setLedColor(0x007fff)
        btf.fill_sendBuffer19()
        if (sender.isModell(sender.eModell.cb2e)) {
            modell_Callibot()
        } else if (sender.isModell(sender.eModell.mkcg)) {
            modell_MKC()
        } else if (sender.isModell(sender.eModell.mkck)) {
            btf.comment(sender.multiswitchGrove(true))
            modell_MKC()
        }
        btf.sendData(btf.btf_sendBuffer19())
        btf.zeige5x5Buffer(btf.btf_sendBuffer19())
        btf.zeige5x5Joystick(btf.btf_sendBuffer19())
        basic.turnRgbLedOff()
    } else if (!(btf.simulator())) {
        btf.sendData(btf.createBuffer(4))
    }
})
