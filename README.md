
> Diese Seite bei [https://calliope-net.github.io/fernsteuerung-s41/](https://calliope-net.github.io/fernsteuerung-s41/) öffnen

### Einstellen der Funkgruppe (am Sender und Empfänger)

> Bedienung mit den Tasten A oder B **halten** (drücken und halten bis sich die Anzeige ändert)

* Funkgruppe ändern ist in allen Modellen und Funktionen möglich
* wird (immer) in der 5x5 Matrix links als 2 HEX Ziffern angezeigt
* kann Werte von 0xA0 = 160 bis 0xBF = 191 annehmen
* geänderte Funkgruppe wird sofort aktiviert und im Flash gespeichert
* wird beim Einschalten aus dem Flash wieder hergestellt
* eine Fernsteuerung kann mehrere Modelle (Calli:bot) mit verschiedenen Funkgruppen steuern

### Empfänger (Calliope im ferngesteuerten Modell) zurücksetzen

> am Sender Tasten **A+B halten**, wenn eine Bluetooth Verbinduung besteht

* Modelle mit Relais schalten aus
* Calli:bot startet neu

### Bedienung der Fernsteuerung 'Sender mit Joystick'

> Bedienung mit den Tasten A und B **geklickt** (kurz drücken und loslassen - nicht 'halten')

* 0 Auswahl des Modells, welches ferngesteuert wird
  * **A geklickt** (-) oder **B geklickt** (+)
    * Modell umschalten (wird als Bild angezeigt):
    * 1.1 Calli:bot 2
    * 1.2 Maker Kit Car mit Calliope v3 (Leiterplatte) optional auch mit Gabelstapler
    * 1.3 Maker Kit Car mit Calliope v3 (Leiterplatte) mit Kran (3 Motoren an I²C)
    * 1.4 CaR 4 (Calliope auf Rädern Version 4)
  * **A+B geklickt**
    * geändertes Modell im Flash speichern, wird beim Einschalten wieder hergestellt
    * nach dem Einschalten muss nur einmal **A+B geklickt** werden
    * Sender beginnt kontinuierlich über Bluetooth zu senden (aller 400 ms)
    * in die Menüebene 0 zurück schalten ist nur mit Reset möglich

* jedes Modell kann eine oder mehrere Funktionen haben
* Standard Funktionen der Tasten, wenn beim Modell nichts anderes angegeben ist
  * **A geklickt** 
    * Block *Knopf A Schalter* wechselt zwischen true und false
  * **B geklickt**
    * Block *Knopf B Schalter* wechselt zwischen true und false
  * **A+B geklickt**
    * Block *Knopf A+B Schalter* wechselt zwischen true und false
    * *Funktion* wird auf Standardwert *Fahren und Lenken mit Joystick* eingestellt

* 1 Modell: Calli:bot 2
  * 1.1 Calli:bot: *Fahren und Lenken mit Joystick*
    * **A geklickt** oder **B geklickt**
      * kann im Block *Knopf A\|B Schalter* abgefragt werden
    * **A+B geklickt**
      * umschalten auf Funktion *Calli:bot Beispiele*
  * 1.2 Calli:bot: *Beispiele*: auf Calli:bot gespeicherters Programm starten
    * **A geklickt**
      * beendet ein laufendes Beispiel (z.B. hält an)
      * zählt die Beispiel Nummer 1 2 3 1 2 3 ...
      * wird in der 5x5 Matrix rechts binär angezeigt
        * 1 Spurfolger
        * 2 ___
        * 3 ___
    * **B geklickt**
      * startet das Beispiel (z.B. fährt los)
        * fährt ab jetzt auch ohne Bluetooth Verbindung
        * Sender kann Funkgruppe ändern und anderes Modell fernsteuern
      * wiederholt **B geklickt**
        * beendet das Beispiel
        * zurück zu 1.2 (A Beispiel wählen, B starten)
    * **A+B geklickt**
      * zurück zu 1.1 *Fahren und Lenken mit Joystick*

* 2 Modell: Maker Kit Car mit Calliope v3, optional auch mit Gabelstapler
  * 2.1 *Fahren und Lenken mit Joystick*
    * **A geklickt**
      * kann im Block *Knopf A Schalter* abgefragt werden
    * **B geklickt**
      * schaltet Licht am Modell an/aus
    * **A+B geklickt**
      * umschalten auf Funktion *Gabelstapler*
  * 2.2 (langsam) *Fahren und Gabelstapler mit Joystick*
    * **A geklickt** oder **B geklickt**
      * links und rechts lenken (Servo fernsteuern) zum rangieren
    * **A+B geklickt**
      * zurück zu 2.1 *Fahren und Lenken mit Joystick*

* 3 Modell: Maker Kit Car mit Calliope v3, mit Kran (3 Motoren, Elektromagnet an I²C)
  * 3.1 Kran *Fahren und Lenken mit Joystick*
    * **A geklickt**
      * schaltet Elektromagnet am Kran an/aus
    * **B geklickt**
      * schaltet Licht am Modell an/aus
    * **A+B geklickt**
      * umschalten auf Funktion *Seilrolle und Drehkranz*
  * 3.2 Kran *Seilrolle und Drehkranz mit Joystick*
    * **A geklickt**
      * schaltet Elektromagnet am Kran an/aus
    * **B geklickt**
      * schaltet Licht am Modell an/aus
    * **A+B geklickt**
      * umschalten auf Funktion *Zahnstange und Drehkranz*
  * 3.3 Kran *Zahnstange und Drehkranz mit Joystick*
    * **A geklickt**
      * schaltet Elektromagnet am Kran an/aus
    * **B geklickt**
      * schaltet Licht am Modell an/aus
    * **A+B geklickt**
      * zurück zu 3.1 *Fahren und Lenken mit Joystick*

* 4 Modell: CaR 4 (Calliope auf Rädern Version 4)
  * 4.1 CaR 4 *Fahren und Lenken mit Joystick*


## Dieses Projekt bearbeiten ![Build status badge](https://github.com/calliope-net/fernsteuerung-s41/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/calliope-net/fernsteuerung-s41** ein und klicke auf Importieren

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/calliope-net/fernsteuerung-s41/raw/master/.github/makecode/blocks.png)

