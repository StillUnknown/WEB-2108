## Projekt

Hur kan vi implementera en databas till en backend med tillhörande API som vi testar med API-tester. Detta ska göras med
hjälp av Docker, Node.js, MongoDB, Mongoose och React.js

### Projektplanering:

Har som vanligt gjorts i Trello och här kommer
länken: [TRELLO](https://trello.com/invite/b/kpCDxOoB/59a8df1f9d8069a3ba2300ff373705ec/datalagring "Trello")

### Beskriv lite olika lösningar du gjort:

Jag använder ett globalt id i backendtesterna för att kunna köra hela testet utan att behöva krångla med att klippa och
klistra in från databasen. Jag valde också av den anledningen att lägga "createTask" som första test så id:t skapas.

### Beskriv något som var besvärligt att få till:

ToggleTaskDone var riktigt krånglig att få till. Jag försökte först med samma som vi använde i förra kursen och såg att
det gick igenom till frontend när man ändrade i databasen men man kunde inte klicka och få det att funka. Sen byggde jag
om den till att ha .findByIdAndUpdate och skriva om funktionen till att passa den koden istället. Det funkade återigen
från backend men inte att klicka. Jag fick i slutändan be Lars komma in och kolla på koden och med hjälp av honom löste
vi den tillsammans.

### Beskriv om du fått byta lösning och varför i sådana fall:

Har problem med backendtesterna i testet där man söker på namn. Testen som ska komma ut går inte att få ut i testet så
jag fick kommentera bort den. Ändrar jag i TaskController så funkar inte frontend.

### Beskriv hur du felsökt ditt program när det uppstått problem:

Med hjälp av console.log() och via inspektorn. Det har krävts en hel del felsökningar för att vad jag får för svar från
backend.  
Dessutom valde jag att ha med en logger i backend för att enklare svaret från backend. Har även tagit hjälp av Michaela
när något inte funkat som jag vill.

### Vad gick bra:

Att bygga upp hela backend gick bra. Backendtesterna gick bra.

### Vad gick dåligt:

GetTaskByName gick dåligt. Hur jag än vände och vred så fick jag antingen ut Taskobjektet eller errormeddelandet. Efter
mycket om och men såg jag att det saknades en boxparantes runt errormeddelandet i backendfunktionen och när jag lagt
till den så funkade det att få ut båda.

### Vad har du lärt dig:

Att bygga en backend med mongodb och mongoose.

### Vilka möjligheter ser du med de kunskaper du fått under kursen:

Att bygga en backend och databas med hjälp av MongoDB och Mongoose. I övrigt är det fortfarande svårt att se vad mer det
kan användas till då vi bara skrapar på ytan. Men jag antar att man med hjälp av detta ska kunna koppla upp flera
stycken som använder samma databas.

### Motivera varför du valt en specifik lösning:

Jag valde att använda LOGGER som en extra hjälp att utläsa svaren som kommer från backend. Det gjorde det lättare att se
vad som faktiskt skulle skrivas ut på frontend.

### Lämna förslag på förbättringar av din kod:

Frontend kan vara bättre och med det menar jag inte koden utan att alla CRUD-operationer ligger var för sig. Jag har
åter valt att låta dom ligga på detta viset för att spara mig onödig stress.

### Lämna exempel på kod du valde att inte implementera:

Tråkigt svar men jag har använt all kod jag såg framför mig när vi fick inlämningen.

### Lämna förslag på förbättringar av din UI/UX design eller reflektera över den:

Jag valde att ha samma frontend som i förra inlämningen då jag tyckte den såg helt ok ut. Frontend intresserar mig inte
som backend gör. Frontend fungerar och ser bra ut, det räcker för mig.

### Egna tankar:

Återigen en kul kurs. Kul att äntligen få se mongodb och mongoose som man hört så mycket om.
