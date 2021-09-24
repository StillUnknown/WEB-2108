# Webbutveckling 1
### September 2021
## Projektuppgift: *Att bygga en hemsida med sex sidor*
### Innehåll:
- [1. Projektplan](#1-general-projektplan-)
- [2. Dokumentation](#2-dokumentation--)
    - [Steg 1: about.html](#steg-1-abouthtml)
    - [Steg 2: courses.html](#steg-2-courseshtml)
    - [Steg 3: index.html](#steg-3-indexhtml)
    - [Steg 4: blogg.html](#steg-4-blogghtml)
    - [Steg 5: products.html](#steg-5-productshtml)
    - [Steg 6: other.html](#steg-6-otherhtml)

# 1. Projektplan:  

I projektuppgiften ingår det att göra en projektplan. Denna har jag gjort via [Trello](https://trello.com/invite/b/oYZrdi9E/cbaeb4a387ca538fb30c929193cbbf9b/webbutveckling-1).  
Följer ni länken kommer ni till min Trello och kan se min projektplanering. I Trello kan man strukturera uppgifter på ett tydligt sätt  
och se vad som håller på att göras och vad som ska göras senare. Man börjar med att skapa listor. Dessa listor har jag döpt till:  

- Backlog  
- Att göra  
- Gör  
- Gjort  

I listan backlog skapade jag sedan 10st kort varav sex av dom är namnen på de sex sidor vi fick i uppgift att skapa.  
De fyra andra är skapade för att jag ska hålla koll på vad som bör göras efter hemsidan är klar, t.ex, att gå igenom all kodning,  
se över designen och att göra en projektdokumentation. I dessa kort kan man även göra en checklista och i den la jag de krav  
de olika sidorna i projektet bestod av. När jag gjort ett av kraven är det smidigt att bocka av att man är klar med det.  
Då jag generellt är rätt dålig på att planera är detta ett bra hjälpmedel för mig att enkelt ha en struktur på vad som ska göras.  
  
# 2. Dokumentation  
  

Här kommer jag beskriva mina tankar kring hur jag valde att bygga de olika sidorna och layouten på dessa. Alla sidor är testade  
på Iphone 6/7/8, Ipad och desktop i Chrome, Firefox oxh Edge.

## Layout

Jag planerar att bygga upp HTML-koden i filerna en åt gången. När jag känner mig nöjd med hur grunden ser ut kommer jag ge mig på stylingen.  
Jag har redan valt den bakgrundsbild jag kommer använda. Länk till bild: [Waves](https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 "Waves")  

Jag började med att skapa de sex filerna vi ska använda oss utav. Med hjälp av genomgången vi hade idag skapade jag navbaren.  
Jag la in samma värden som i genomgången men planerar att revidera detta ju längre fram i projektet jag kommer för att få alla färger att matcha.  
Jag hade problem med att få in bilden som bakgrund men med hjälp av Mohammad Haydar och en [Youtube](https://www.youtube.com/watch?v=TbThMW3UK_w "Fixing broken url")-video  
lyckades jag tillslut felsöka problemet och åtgärda det.  
  
Jag valde att först använda mig av en style.css som skulle ligga till grund för alla sidor men efter att ha börjat med navbaren och footern valde jag  
att använda mig av en style.css per sida. Så nu har sidorna en navbar.css, en footer.css och en "name.css".  
Jag har valt att använda mig av < div > < section > < article > och < p >. Bortsett från dessa finns det även img-taggar och länkar. 
 
## Steg 1: about.html  
  
Den här sidan har gjorts om flera gånger för att få den bra. Den första designen jag valde visade sig vara helt fel för projektet.  
Den blev klar först efter att jag valde att lägga en vit bakgrund i mina < div > i products och när jag hade valt layout i blogg.html.  
  
## Steg 2: courses.html  
  
Här valde jag att bara göra en div med hela tabellen och tre < th > varav jag döljer den ena i mobilläge för att få det atrt se bättre ut i mobilläge.  
Har försökt att ha samma färger som den bilden vi fick på alla kurser vi ska gå. Jag valde att även lägga till en länk i alla kurser till skolverket.  
  
## Steg 3: index.html  
  
Valde att först hålla denna väldigt enkel med bara en text som välkomnade till min hemsida och som bad användaren att navigera via navbaren.  
Jag la även till en bild med ett meme. I slutet fick index en uppfräschning likt about.  
  
## Steg 4: blogg.html  
  
Här valde jag att först lägga upp fyra st < div > bredvid varandra för att få till ett bloggliknande utseende. Var först nöjd med hur allt såg ut men efter  
att ha sett några olika bloggar valde jag att göra om den så att de istället för att ligga bredvid varandra nu ligger under varandra vilket ger en mer  
bloggliknande effekt. Denna lika de andra gjordes klar först efter jag gjort klart products.  
  
## Steg 5: products.html  
  
Denna sida gjorde jag först av alla då jag tänkt ut de två produkterna jag ville ha med. Det första jag gjorde var att bygga en div med två sections  
där jag la text i den ena och bild i den andra och bygga upp enligt grid, repeat: (2, 1fr). Därefter kopierade jag helt enkelt hela diven men flyttade  
bilden till att ligga först. Jag hade problem med att få den att spegelvända helt och fick tillslut hjälp av min lärare, Lars Strömberg att fixa problemet. 
Jag behövde skapa två olika classes för de två olika < div > och helt enkelt ändra på förhållandet i repeat i desktopläge.  
När jag fick reda på att vi skulle ha tre produkter var den enkelt att bara kopiera den första < div > och lägga underst. Bara att byta bild och länk.  
Jag valde först att ha mina < div > utan bakgrund men efter att ha bett Aram och Michaela kolla så tyckte båda två att den blev bättre med en vit bakgrund.  
Efter detta valde jag att också ändra flera andra sidor till att likna products layout.

## Steg 6: other.html  
  
Här valde jag att lägga in en video från Linus Tech Tips på den skärm jag har i products. Jag valde senare att lägga till ytterligare två videor som har att  
göra med de andra två produkterna jag har i products.  
  
## Slutord  
 
Såhär i efterhand är det en hel del jag hade ändrat på om jag fick börja om på nytt igen. Jag hade för det första börjat med att gör en skiss på ett papper  
för att få till en design jag gillade istället för att bara börja och inte veta hur jag egentligen vill att designen ska se ut. Jag borde alltså ha ritat  
upp de sex sidorna på papper och sedan försökt överföra den designen till projektet. Jag hade sedan när jag väl börjat jobba på datorn gjort klart en av  
sidorna innan jag började med en annan. Det blev väldigt hoppigt när jag väl fått till products som jag blev väldigt nöjd med.