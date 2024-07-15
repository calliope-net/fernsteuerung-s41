
> Diese Seite bei [https://calliope-net.github.io/fernsteuerung-s41/](https://calliope-net.github.io/fernsteuerung-s41/) öffnen

### Bedienung der Fernsteuerung 'Sender mit Joystick'

> Bedienung mit den Tasten A und B **geklickt** (kurz drücken und loslassen - nicht 'halten')

* 0 Auswahl des Modells, welches ferngesteuert wird
  * **A geklickt** oder **B geklickt** Modell umschalten (wird als Bild angezeigt)
    * 1.1 Calli:bot 2
    * 1.2 Maker Kit Car mit Calliope v3 (Leiterplatte) optional auch mit Gabelstapler
    * 1.3 Maker Kit Car mit Calliope v3 (Leiterplatte) mit Kran (3 Motoren an I²C)
    * 1.4 CaR 4 (Calliope auf Rädern Version 4)
  * **A+B geklickt** Modell im Flash speichern, wird beim Einschalten ausgewählt
  * in die Menüebene 0 zurück schalten ist nur mit Reset möglich

* 1 jedes Modell kann eine oder mehrere Funktionen haben
* 1 Standard Funktionen der Tasten, wenn beim Modell nichts anderes angegeben
  * **A geklickt** 
    * Block *Knopf A Schalter* wechselt zwischen true und false
  * **B geklickt**
    * Block *Knopf B Schalter* wechselt zwischen true und false
  * **A+B geklickt**
    * Block *Knopf A+B Schalter* wechselt zwischen true und false
    * *Funktion* wird auf Standardwert *Fahren und Lenken* eingestellt

* 1.1 Calli:bot 2
  * 1.1.1 *Fahren und Lenken* mit Joystick
    * **A geklickt** oder **B geklickt**
      * kann im Block *Knopf A|B Schalter* abgefragt werden
    * **A+B geklickt**
      * umschalten auf Funktion *Calli:bot Beispiele*
  * 1.1.2 *Calli:bot Beispiele*: auf Calli:bot gespeicherters Programm starten
    * **A geklickt**
      * beendet ein laufendes Beispiel (z.B. hält an)
      * zählt die Beispiel Nummer 1 2 3 1 2 3 ...
      * wird in der 5x5 Matrix rechts binär angezeigt
        * 1 Spurfolger
        * 2 ___
        * 3 ___
    * **B geklickt**
      * startet das Beispiel (z.B. fährt los)
      * wiederholt **B geklickt**
        * beendet das Beispiel



## Dieses Projekt bearbeiten ![Build status badge](https://github.com/calliope-net/fernsteuerung-s41/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/calliope-net/fernsteuerung-s41** ein und klicke auf Importieren

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/calliope-net/fernsteuerung-s41/raw/master/.github/makecode/blocks.png)

