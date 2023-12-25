# Dashboard

Uppgiften var krävande, och jag lade ned många timmar på den.

Vi gick grundligt igenom alla delar som ingick i uppgiften, så det fanns inget helt nytt. Utmaningen låg i att sammanfoga alla delar, inklusive local storage, API-hämtning, geolocation, och att komma ihåg alla de metoder vi hade lärt oss. Jag behövde gå igenom varje del på nytt, söka en del på internet och titta på YouTube-tutorials. Trots detta var det en rolig och spännande uppgift – det var inte bara påfrestande.

Mina styrkor och utvecklingsområden i denna uppgift låg i min generella kunskap. Jag visste hur jag skulle gå tillväga och ungefär hur koden skulle se ut. HTML och CSS flöt ganska smidigt, men jag behövde justera stilen och HTML-koden en aning i efterhand. Å andra sidan var det JavaScript-delen som tog mest tid. Jag stötte på en del problem med att hämta API:n på rätt sätt, men jag hade tillgång till Google och en hjälpsam klasskamrat.

Local storage för weather API var särskilt utmanande. Först använde jag en string interpolation för alla dagar, vilket resulterade i samma väderprognos för alla tre dagarna – vilket självklart inte var önskat. För första dagen visades 'current', och för de två kommande dagarna skapade jag varsin klass och ändrade egenskapen så att de visade prognosen för de två följande dagarna med hjälp av en for-loop och if-sats.

I alla mina fetch-anrop använde jag `.then` och `.catch` metoden. Inte för att imponera på någon, utan helt enkelt för att det var enklare än `async/await`. Jag kommer självklart att lära mig det också.
