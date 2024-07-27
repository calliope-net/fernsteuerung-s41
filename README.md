
> Diese Seite bei [https://calliope-net.github.io/fernsteuerung-s41/](https://calliope-net.github.io/fernsteuerung-s41/) öffnen

Mit einem Calliope mini (jede Version) und einem Joystick können über Bluetooth 8 Modelle ferngesteuert werden. Durch Umschaltung der Funkgruppe kann ein Modell ausgewählt werden. 
Die anderen Modelle können inzwischen autonom fahren, bis die Fernsteuerung wieder übernommen wird. Modelle können mehrere Calli:bot sein, aber auch selbst gebaute Modelle mit 
fischertechnik Motor und Servo. Bei einem Modell können bis 6 Motoren ferngesteuert werden.

Für den Sender wird nur ein Calliope und ein Joystick benötigt. Die Bedienung erfolgt mit den zwei Tasten A und B. Der aktuelle Status wird im 5x5 Display und der RGB LED binär angezeigt.
Die selbe Anzeige ist auch beim Empfänger zu sehen. Für die Tasten **Knopf A** und **Knopf B** werden die Ereignisse **geklickt** und **halten** genutzt.

Beim Einschalten wird aus dem Flash die zuletzt gewählte Funkgruppe und das Modell wieder hergestellt. Vor dem ersten Start kann noch das Modell geändert werden.
Das Senden der Daten über Bluetooth (aller 400 ms) beginnt nach **A+B geklickt** mit der Funktion *Fahren und Lenken mit Joystick*.
Mit **A+B geklickt** wird bei dem selben Modell die Funktion weiter geschaltet. Mit **A geklickt** oder **B geklickt** wird die gewählte Funktion bedient. So kann Licht oder der Ultraschallsensor an und aus geschaltet werden.

Der Wechsel der Funkgruppe, um ein anderes Modell fernzusteuern, ist jederzeit möglich mit **A halten** oder **B halten**. Die Funkgruppe wird im Display links durch die Anzahl der rot leuchtenden (1-8) LEDs angezeigt. 
Vor dem ersten Start kann noch das Modell geändert werden, nach **A+B geklickt** nicht mehr. Bei dem gewählten Modell leuchten die selben (1-8) LEDs und die RGB LED blinkt blau wenn Bluetooth Daten von der Fernsteuerung ankommen.

Der Wechsel zwischen den Modellen ist besonders einfach, weil der Sender die Funktion und den Status der Schalter von jeder Funkgruppe speichert und nach dem zurück schalten wieder in dem selben Zustand ist wie das Modell verlassen wurde.
Die Bedienung kann lückenlos fortgesetzt werden und beginnt nicht von vorn.




### Ändern der Funkgruppe (am Sender und Empfänger)

> Bedienung mit den Tasten **A halten** oder **B halten** (etwa 4 Sekunden nicht loslassen)

* **A halten** (gedrückt halten bis sich die Funkgruppe in der Anzeige geändert hat)
  * Funkgruppe -1
* **B halten** (gedrückt halten bis sich die Funkgruppe in der Anzeige geändert hat)
  * Funkgruppe +1
* Funkgruppe ändern ist in allen Modellen und Funktionen möglich
* wird (immer) in der 5x5 Matrix links als 2 HEX Ziffern angezeigt
* kann Werte von 0xA0 = 160 bis 0xBF = 191 annehmen
* geänderte Funkgruppe wird sofort aktiviert und im Flash gespeichert
* wird beim Einschalten aus dem Flash wieder hergestellt
* eine Fernsteuerung kann mehrere Modelle mit verschiedenen Funkgruppen steuern
* nach dem Ändern der Funkgruppe
  * Funktion (Sender) wird auf *nicht gestartet* gestellt, wie nach Reset
  * Empfänger mit der gleichen Funkgruppe blinkt grün, reagiert aber nicht
  * Funkgruppe kann bis zum richtigen Empfänger weiter geschaltet werden
  * erst nach **A+B geklickt** blinkt der Empfänger blau und kann ferngesteuert werden
  * *Funktion* wird auf Standardwert *Fahren und Lenken mit Joystick* eingestellt

### Empfänger (Calliope im ferngesteuerten Modell) zurücksetzen

> am Sender Tasten **A+B halten**, wenn eine Bluetooth Verbindung besteht

* Modelle mit Relais schalten aus
* Calli:bot startet neu

### Bedienung der Fernsteuerung 'Sender mit Joystick'

> Bedienung mit den Tasten A und B **geklickt** (kurz drücken und loslassen - nicht 'halten')

* 0 Auswahl des Modells, welches ferngesteuert wird
  * **A geklickt** (-) oder **B geklickt** (+)
    * ist nur unmittelbar nach Reset möglich
    * Modell umschalten (wird als Bild angezeigt):
    * 1.1 Calli:bot 2
    * 1.2 Maker Kit Car mit Calliope v3 (Leiterplatte) optional auch mit Gabelstapler
    * 1.3 Maker Kit Car mit Calliope v3 (Leiterplatte) mit Kran (3 Motoren an I²C)
    * 1.4 CaR 4 (Calliope auf Rädern Version 4)
  * **A+B geklickt**
    * geändertes Modell im Flash speichern, wird beim Einschalten wieder hergestellt
    * nach dem Einschalten muss nur einmal **A+B geklickt** werden
    * Sender beginnt kontinuierlich über Bluetooth zu senden (aller 400 ms)
    * zurück zu *0 Auswahl des Modells* nur mit Reset

* jedes Modell kann eine oder mehrere Funktionen haben
* Standard Funktionen der Tasten, wenn beim Modell nichts anderes angegeben ist
  * **A geklickt** 
    * Block *Knopf A Schalter* wechselt zwischen true und false
  * **B geklickt**
    * Block *Knopf B Schalter* wechselt zwischen true und false
  * **A+B geklickt**
    * Block *Knopf A Schalter* = false
    * Block *Knopf B Schalter* = false
    * *Funktion* wird auf Standardwert *Fahren und Lenken mit Joystick* eingestellt

* 1 Modell: Calli:bot 2
  * 1.1 Calli:bot: *Fahren und Lenken mit Joystick*
    * **A geklickt**
      * schaltet Ultraschall Sensor an und aus (fährt bei Hindernis nicht vorwärts)
    * **B geklickt**
      * schaltet Spursensor an und aus (fährt auf schwarzer Linie nicht weiter)
    * **A+B geklickt**
      * umschalten auf Funktion Calli:bot: *Programm fernstarten*
      * schaltet Ultraschall Sensor an und Spursensor aus
  * 1.2 Calli:bot: *Programm fernstarten*:
    * auf Calli:bot gespeicherters *Programm fernstarten*
      * Programm wird mit den Parametern vom Sender einmal gestartet
      * fährt ohne Bluetooth Verbindung vom Sender autonom weiter
      * Sender kann die Funkgruppe ändern und andere Modelle fernsteuern
      * Fernsteuerung kann jederzeit wieder übernommen werden
    * zur Zeit gibt es nur ein Programm: Spurfolger
    * **A geklickt**
      * schaltet Ultraschall Sensor an und aus (fährt bei Hindernis nicht vorwärts)
    * **B geklickt**
      * Start und Stop: auf Calli:bot gespeicherters Programm Spurfolger
      * 1 Spurfolger
        * fährt geradeaus bis zu einer schwarzen Linie
        * folgt dann dieser Linie, hält bei Hindernissen an und fährt weiter
        * so können mehrere Calli:bot hintereinander fahren, ohne aneinander zu stoßen
        * Fernsteuerung mit Joystick kann jederzeit wieder übernommen werden
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

### Anzeige in der 5x5 Matrix (25 LED Display)

> Anzeige ist beim Sender und Empfänger identisch

y0|y1|aktiviert|↕ Motor|↔ Servo/Motor
---|---|---|---|---
<code>b5</code>|<code>b4</code>|M1|16|16
<code>x80</code>|<code>x08</code>|MA|8|8
<code>x40</code>|<code>x04</code>|MB|4|4
<code>x20</code>|<code>x02</code>|MC|2|2
<code>x10</code>|<code>x01</code>|MD|1|1

* 8 LEDs <code>x80</code> bis <code>x01</code> zeigen als 2 HEX Ziffern die Funkgruppe an: 0xA0 bis 0xBF

> alle anderen LEDs zeigen Daten aus dem Datenpaket (19 Byte Buffer *sendData* oder *receivedData*)

* 2 Bit Betriebsart <code>b5 b4</code> aus Steuer Byte 0 <code>..xx....</code>

hex|bit|Funktion|bei Ereignis von einem Sensor
---|---|---|---
0x00|<code>..00....</code>|mit Joystick fernsteuern|Stop bei Hindernis
0x10|<code>..01....</code>|Programm fernstarten|wie beim Empfänger programmiert
0x20|<code>..10....</code>|Fahrplan senden|Stop bei Hindernis
0x30|<code>..11....</code>|Sensoren fernprogrammieren|wechselt zum Ereignis-Block

* 5 Bit aktivierte Motoren (M1 MA MB MC MD) aus Steuer-Byte 3 <code>..xxxxxx</code>
  * zeigt in der Regel an, an welchen Motor die Daten vom Joystick gesendet werden
  * M0 wird nicht angezeigt (Platzmangel), ist in der Regel aktiv, wenn alle 5 LEDs aus sind
* 5 Bit **↕ Motor** zeigt binär das aktivierte Motor-Byte (0..128..255) gemapt auf (0..16..31)
  * zeigt in der Regel den gesendeten Wert vom Joystick (vorwärts / rückwärts) an
  * in Joystick Ruhestellung leuchtet nur die obere LED (16)
* 5 Bit **↔ Servo/Motor** zeigt binär das aktivierte Servo-Byte (0..16..31) an
  * zeigt in der Regel den gesendeten Wert vom Joystick (links / rechts) an
  * kann für den Servo (bzw. die Lenkung) oder einen 2. Motor gelten
  * in Joystick Ruhestellung leuchtet nur die obere LED (16)


## Dieses Projekt bearbeiten ![Build status badge](https://github.com/calliope-net/fernsteuerung-s41/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/calliope-net/fernsteuerung-s41** ein und klicke auf Importieren

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/calliope-net/fernsteuerung-s41/raw/master/.github/makecode/blocks.png)

