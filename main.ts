input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sender.buttonA()
    storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sender.buttonB()
    storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
    basic.showNumber(sender.storageBufferGet())
})
radio.comment(input.temperature())
basic.showNumber(storage.getNumber(StorageSlots.s1))
sender.startAuswahl(storage.getNumber(StorageSlots.s1))
storage.putNumber(StorageSlots.s1, sender.storageBufferGet())
