input.onButtonEvent(Button.B, ButtonEvent.Click, function () {
    sender.buttonB(storage.getNumber(StorageSlots.s1))
    storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
})
radio.comment(input.temperature())
