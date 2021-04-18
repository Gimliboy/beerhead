# DHBW Heidenheim LaTeX Template - Optimiert für Hausarbeiten

Dieses LaTeX Template ist für alle Arbeiten der Fakultät Technik der DHBW geeignet.

Im ersten Moment mag dies ein wenig verwirrend sein, aber in dieser Datei finden Sie die notwendigen Informationen, wo Sie bestimmte Einstellungen machen, und wo Sie Ihre Inhalte niederschreiben. 

### Die Datei main.tex

main.tex ist die Kerndatei des Templates und damit auch die Datei, welche kompiliert werden muss. Durch Importe anderer Datein wird die Dokumentenstruktur beschrieben (kann bei Bedarf geändert werden wenn z.B. kein Sperrvermerk gewünscht wird).

### ads

Im Ordner ads befinden sich folgende vordefinierte Vorlagen, welche nicht angepasst werden müssen (Anpassungen erfolgen automatisch):

* Deckblatt
* Eigenständigkeitserklärung
* LaTeX Document Header

### lang

Im Ordner lang befinden sich alle nötigen Übersetzungen. In der Datei settings/document.tex befindet sich ein Schalter, der entweder auf "de" oder "en" gesetzt wird, um eine deutsche oder englische Version zu erhalten.

### settings

In diesem Ordner gibt es zwei Dateien:

* main.tex
* document.tex

In der Datei general.tex sind grundlegende Einstellungen vordefiniert, welche nicht unbedingt geändert werden müssen.

Die Datei document.tex ist der Ort für die Angaben, die bei allen Arbeiten typischerweise anfallen:

| Variable | Beschreibung | Mögliche Werte |
| -------- | ------------ | -------------- |
| documentLanguage| Sprache der Arbeit | de<br/> en |
| documentType | Art der Arbeit | Frei wählbar wird aber nicht übersetzt |
| documentAuthor | Autor der Arbeit | |
| documentTitle | Titel der Arbeit | |
| documentPeriod | Dauer der Arbeit | |
| locationUniversity | Standort der DHBW | Heidenheim |
| department | Fakultät der DHBW in der sich der Autor befindet | |
| course | Kurs in dem sich der Autor befindet | |
| lecture | Vorlesung, für die die Arbeit angefertigt wird | Frei wählbar wird aber nicht übersetzt |
| releaseDate | Abgabedatum | |
| releaseLocation | Abgabeort | Heidenheim |
| evaluator | Gutachter der Arbeit | |

### content

Hier sind die einzelnen Kapitel als separate Dateien vorhanden. Beim Einfügen einer neuen Datei wird diese automatisch erkannt. Die Reihenfolge der Kapitel ergibt sich aus der Nummerierung in den Dateinamen.

### images


# Komponenten einer Wissenschaftlichen Arbeit

## Acronyms

nur verwendete Akronyme werden letztlich im Abkürzungsverzeichnis des Dokuments angezeigt
Verwendung: 
		\ac{Abk.}   --> fügt die Abkürzung ein, beim ersten Aufruf wird zusätzlich automatisch die ausgeschriebene Version davor eingefügt bzw. in einer Fußnote (hierfür muss in header.tex \usepackage[printonlyused,footnote]{acronym} stehen) dargestellt
		\acs{Abk.}   -->  fügt die Abkürzung ein
		\acf{Abk.}   --> fügt die Abkürzung UND die Erklärung ein
		\acl{Abk.}   --> fügt nur die Erklärung ein
		\acp{Abk.}  --> gibt Plural aus (angefügtes 's'); das zusätzliche 'p' funktioniert auch bei obigen Befehlen
	siehe auch: http://golatex.de/wiki/%5Cacronym
	
example: 
\acro{AGPL}{Affero GNU General Public License}
\acro{WSN}{Wireless Sensor Network}

## Appendix

(Beispielhafter Anhang)
 
Bei mehreren Anhangsteilen kann eine Art Inhaltsverzeichnis der Anhänge vorangestellt werden:

{\Large
\begin{enumerate}[label=\Alph*.]
	\item Assignment 
	\item List of CD Contents
	\item CD 
\end{enumerate}
}
\pagebreak

Mit z.B.:
\section*{A. Auflistung der Begleitmaterial-Archivdatei }
folgen dann die Anhangsteile. "*" verhindert hier die Nummerierung, da Anhänge ja üblicherweise mit Großbuchstaben durchgezählt werden.

# Contributors

 Autor: Tobias Dreher, Yves Fischer
 Date: 06.07.2011

 Autor: Michael Gruben
 Date: 15.05.2013

 Autor: Markus Barthel
 Date: 22.08.2014

 Autor: Prof. Dr. Rolf Assfalg
 Date 23.03.2017

 Autor: Stefan Schneider
 Date: 06.06.2017

 Autor: Jan Stippe
 Date: 13.04.2020
