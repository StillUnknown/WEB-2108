## Projekt

I detta projektet ska ni göra en enkel backend med ett RESTapi som har automatiska tester i backend samt i Insomnia Rest Client eller Postman. Er Backend ska därefter kopplas till en enklare frontend.

Ert API ska hantera TODOs där ni ska kunna skapa, läsa ut, redigera samt radera TODOs enligt CRUD principen. Era TODOs ska existera i en "in memory database".

### Projektplanering:

Har som vanligt gjorts i Trello och här kommer länken: [TRELLO](https://trello.com/invite/b/MDeIRsB4/901dddb97b983b8489846f1d7f175484/webbserverprogrammering-1/ "Trello")


### Beskriv lite olika lösningar du gjort:

Jag har i min frontend för API IS ALIVE valt att lägga en useEffect för att på så sätt direkt se att min backend når ut till min frontend då texten "Api is Alive!"
automatiskt kommer ut på min frontend, dvs jag behöver inte trycka på en knapp.  
  
Jag har valt att lägga ett fireEvent på min delete knapp och skickar med ett namn jag vet inte finns. Detta gjorde jag då jag inte helt hundra har koll på hur fireEventtester  
fungerar och det var det testet jag trodde skulle vara "enklast" att få att fungera. Se: "Beskriv något som var besvärligt att få till" för mer info om varför så inte var fallet.



### Beskriv något som var besvärligt att få till:

fireEventtestet på min deletefunktionalitet var inte alls så enkel att få till som jag trodde. Jag trodde i princip att det räckte med att knapptrycket och sen det förväntade svaret
men det var inte så lätt. Efter lite huvudbry frågade jag dig (Lars) om varför det inte fungerade och du tipsade om att en delay kanske skulle funka så jag började söka efter  
olika delayer och hittade setTimeout som jag försökte implementera och efter lite trixande gick testet igenom. Efter lite funderande om varför kom jag fram till detta:  
Då knapptrycket görs måste det gå några millisekunder för att infon ska hinna skickas från frontend till backend, hämta svaret och skicka tillbaka det till frontend.  
Jag fick också hårdkoda in "Mats" istället för att försöka lägga en expect på inputen som innehåller name.  
  
"UPDATE"  
  
Då jag inte ville ha Mats hårdkodat på frontend valde jag att bara ha en tom sträng då det funkar lika bra.  
Svaret från backend blir detsamma fast utan Mats, det kommer bara could not find "" in database istället.

### Beskriv om du fått byta lösning och varför i sådana fall:

Jag fick byta lösning på min createData i frontend när vi valde att göra om min funktion "createTask" från att skicka hela  
arrayen med info till att bara skicka den precis skapade datan med hjälp av (TaskData[TaskData.length -1]).  
Min frontend var skriver på ett sätt som gjorde att den bara kunde ta emot en array från backend så jag fick först ändra  
det till att kunna ta emot ett object istället. Sen fick jag också addera en turnery till min return som antingen skriver ut  
den nya skapade datan eller lägger en tom sträng.

### Beskriv hur du felsökt ditt program när det uppstått problem:

Med hjälp av console.log() och via inspektorn. Det har krävts en hel del felsökningar för att vad jag får för svar från backend.  

### Vad gick bra:

Här måste jag svara väldigt mycket. För första gången på hela utbildningen ahr jag varit frisk och mina barn har varit friska  
så jag har kunnat lägga all min tid på att lära mig det vi gått igenom och jag tror att det har visat sig under lektionerna.  

### Vad gick dåligt:

Får jag svara ingenting här? Jag hoppas att du har märkt att väldigt mycket av det vi gått igenom har satt sig hos mig.  
FireEventet var lite krångligt att få till men jag löste det själv efter att ha fått tipset om en delay.

### Vad har du lärt dig:

Massor. Som jag har sagt tidigare, jag tror det har märkts att jag verkligen har lärt mig mycket. Det beror till stor del på att  
det vi gjort har vi upprepat flera gånger. Vi har byggt upp backenden flera gånger vilket gör att man hinner lära sig.  
I backendtesterna byggde vi flera test vilket gör att man hinner lära sig det. 

### Vilka möjligheter ser du med de kunskaper du fått under kursen:

Avskyr den här frågan. Det är så svårt att säga då vi egentligen bara skrapar på ytan i våra kurser.  
Det är väl först nu jag förstår skillnaden på frontend och backend. 

### Motivera varför du valt en specifik lösning:

Jag har medvetet valt att låta mina funktioner ligga var för sig nu i inlämningen.  
Vid alla de andra inlämningarna har jag varit så sjukt stressad de sista veckorna att jag tidigt bestämde mig för att inte gå  
igenom samma sak igen, även om det betyder ett lägre betyg och oj vilken skillnad det har gjort!

### Lämna förslag på förbättringar av din kod:

Som alltid, svårt att säga. Jag tror faktiskt att jag har rätt så bra kod denna gången.  
Men en sak jag kan säga nu när jag sitter här och reflekterar är att jag kanske borde ha använt samma namn på frontend  
som på backend. Om du jämför mina exporter i UserController så borde jag ha använt samma namn på mina .jsxfiler i frontend  
för att riktigt hålla ihop hur jag namngivet olika saker i projektet.

### Lämna exempel på kod du valde att inte implementera:

Jag vet att detta är ett tråkigt svar men jag har använt all den kod jag såg framför mig när vi fick inlämningen till oss.  
Men om jag ska nämna en sak jag kanske skulle ha provat är ett annat fireEvent som testar att skapa ny data. Men då det  
inte är något jag ville implementera så kanske det inte faller under kod jag valde att inte ha med heller. 

### Lämna förslag på förbättringar av din UI/UX design eller reflektera över den:

UI/UX har aldrig och kommer aldrig vara min grej. Jag vet att den inte är speciellt avancerad eller på något sätt supertilltalande denna gången.  
Jag börjar inse mer och mer att backend är det håll jag troligtvis vill gå åt. Och det är också medvetet gjort denna gånger för att spara mig massor  
av onödig stress. Det krävs nästan mer av mig med UI/UX än att skriva all annan kod tyvärr.  
  
"UPDATE"  
  
Efter mycket tänkande valde jag att försöka snygga till inlämningen genom att ändra färger.

### Egna tankar:

ÄNTLIGEN en kurs där jag har kunnat lägga allt mitt fokus och inte behöva vara sjuk eller ha sjuka barn hemma. Jag fick mycket hjälp med reactinlämningen  
och jag lovade att denna gången skulle jag om jag kunde vara till stor hjälp för mina klasskamrater och det har iallafall jag märkt av!  
Vi har repeterat flera av momenten i kursen vilket gör att mam hinner lära sig. Detta har uppskattats enormt av mig! Jag hoppas att resterande kurser är  
uppbyggda på samma satt. Det har varit lite otydligheter med vad exakt som ska lämnas in tycker jag då det inte specifikt står att alla funktioner ska ligga i en  
"superfunktion" som kan hantera alla funktioner. Det står "Produkten är av god kvalitet när det gäller funktion, vilket eleven kontrollerar med hjälp av flera tester,  
även manuella. Dessutom kontrollerar eleven med säkerhet, produktens tillgänglighet med automatiserade tester och simuleringar samt manuella tester" för betyget A.  
Jag tycker att min kod är av god kvalitet när det gäller funktion.  
Jag tycker denna kursen har varit riktigt rolig!!