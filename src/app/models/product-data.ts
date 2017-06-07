import { Product } from './Product';

  export const PRODUCTS: Product[] = [
      { id: 1, name: 'Narty', src: '/assets/img/skis/big_a48c82e99ec94d4d967ff56b84e2bb50.jpg', price: 99.99, size: 170,
        info: 'Jeszcze lepsze narty, czyli jeszcze więcej frajdy z jazdy - tak prezentują się narty Vandal 2.0 marki Majesty. Jest to ulepszony, wszechstronny model, który doskonale się sprawdzi do jazdy po trasie, w parku i backcountry.'},
      { id: 2, name: 'Narty biegowe', src: '/assets/img/skis/meskie-narty-biegowe.jpg', price: 109.99, size: 180,
        info: 'Z nartami Thrasher JR - Freestyle Park&Pipe marki Majesty całkowicie zdominujesz snowpark, i to bez względu na to, czy wybierzesz skocznię, czy half-pipe. Model ten wyposażony jest w rdzeń odznaczający się długą żywotnością flex oraz trwały i szybki ślizg IS7200, który idealnie się sprawdzi do jazdy freeride dla młodszych miłośników szusowania .'},
      { id: 3, name: 'Narty atomic redster', src: '/assets/img/skis/narty-atomic-redster-doubledack-xt.jpg', price: 89.99, size: 180,
        info: 'Narty RocknRolla marki Majesty to model true twin-tip przeznaczony do street jibbingu i jazd w snowparku. Posiadają konstrukcję 2D hybrid, która łączy w sobie luz wykonywania butterów i ostrość camebra. Oznacza to, że narty wybaczają błędy podczas lądowania, a prawdopodobieństwo złapania krawędzi jest znikome - zamiast tego masz zapewnioną doskonałą kontrolę na najeździe i świetna amortyzację podczas lądowania.'},
      { id: 4, name: 'Narty biegowe fischer', src: '/assets/img/skis/narty-biegowki-klasyk-fischer_n43616_fibre_crown.jpg', price: 129.99, size: 190,
        info: 'Narty Vandal 2.0 posiadają konstrukcję 2D hybrid + eliptyczny rocker, który odpowiada za perfekcyjną kombinację pływania w śniegu i łatwość jazdy przy w zróżnicowanym terenie. To prawdziwe twin-tipy z podwójnym promieniem, flexem i dynamiką drewnianego rdzenia. Podwójne taliowanie zapewnia doskonałe właściwości skrętne, natomiast konstrukcja camber gwarantuje reakcję na całej długości narty, przyczepność na oblodzonych stokach, płynne przekazywanie energii, ale przede wszystkim niezawodną amortyzację podczas lądowania. Buttery i jazda po poduszkach śnieżnych nie były jeszcze tak łatwe.'},
      { id: 5, name: 'Narty local hero', src: '/assets/img/skis/narty-local-hero-jr.jpg', price: 109.99, size: 170,
        info: 'Narty Wolf marki Majesty to świetny model freetourowy o konstrukcji semi hybrid, która idealnie zachowuje się w puchu i na bardziej wymagającym terenie. Za dobrą przyczepność na oblodzonych stokach i szybką reakcję odpowiada camber, tak więc narty Wolf doskonale się sprawdzą jako wszechstronny model freerideowy.'},
      { id: 6, name: 'Narty salomon x-race', src: '/assets/img/skis/narty-salomon-x-race-sw.jpg', price: 139.99, size: 160,
        info: 'Narty Destroyer marki Majesty łączą w sobie wszystkie cechy nowoczesnych nart freerideowych i freetouringowych. To uniwersalne narty, które mają wiele do zaoferowania narciarzom pozatrasowym, niezależnie od ich stylu jazdy.'},
      { id: 7, name: 'Narty', src: '/assets/img/skis/narty-volkl-nanuq.jpg', price: 109.99, size: 165,
        info: 'Narty Destroyer Carbon marki Majesty to odpowiedź na potrzebę posiadania jednej pary lekkich i niezwykle wytrzymałych nart, które doskonale się sprawdzą przy zmieniających się warunkach terenowych i śniegowych. Model ten zaprojektowany został w technologii Carbon Lighten Technology, która łączy niską wagę niezbędną podczas dłuższych tur z freerideowymi właściwościami niezbędnymi do jazdy w zróżnicowanym śniegu - zarówno w puchu, jak i na oblodzonych żlebach.'},
      { id: 8, name: 'Narty biegowe rekreacyjne', src: '/assets/img/skis/nartybiegowe_rekreacyjne.jpg', price: 119.99, size: 175,
        info: 'Wszechstronne narty Superior marki Majesty to najlepszy wybór do jazdy w backcountry. Zaprojektowane zostały w technologii hybrydowej 2D, która dzięki ostrości camebra zapewnia doskonałą kontrolę na najeździe i świetną amortyzację podczas lądowania.'},
      { id: 9, name: 'Gogle rekreacyjne', src: '/assets/img/gogles/gogle1.jpg', price: 109.99, size: 160,
        info: 'Gogle Fire Race marki Uvex to klasyczny model, który stanowi doskonały wybór dla wymagających uniwersalności!' +
        'Przede wszystkim jest wygodny, stabilnie dopasowany i nie powoduje zaparowania szkieł. To zasługa systemu Supravision, który gwarantuje, że nawet podczas wielu godzin intensywnego wysiłku na stoku nie będziesz musiał przecierać gogli. Zresztą w ogóle czyszczenie ich jest proste, szybkie i efektywne, więc brak smug masz jak w banku. Na szczególną uwagę zasługuje 100% ochrona przed UVA, UVB i UVC, która sprawia, że Twoje oczy będą w pełni bezpieczne przez cały aktywny dzień.' +
        'Szusuj więc wygodnie i bezpiecznie przez cały dzień.'},
      { id: 10, name: 'Gogle profesjonalne', src: '/assets/img/gogles/gogle2.jpg', price: 89.99, size: 165,
        info: 'Gogle Apache II LTM marki Uvex łączą w sobie wygodę użytkowania i maksymalne bezpieczeństwo dla oczu. Widoczność na stoku to podstawa, dlatego nie mogło tu zabraknąć technologii, które ją wspierają.' +
        'W modelu zastosowano system zapobiegający zaparowaniu Supravision, co gwarantuje, że nawet podczas wielu godzin intensywnego wysiłku na stoku będziesz widzieć wyraźnie bez konieczności przecierania gogli. Na szczególną uwagę zasługuje system Litemirror chroniący oczy przed szkodliwym promieniowaniem podczerwonym. To w połączeniu ze 100% ochroną przed UVA, UVB i UVC sprawia, że model Apache II LTM nie ma sobie równych.' +
        'Szusuj więc wygodnie i bezpiecznie przez cały dzień.'},
      { id: 11, name: 'Gogle turystyczne', src: '/assets/img/gogles/gogle3.jpg', price: 69.99, size: 175,
        info: 'Gogle Patrol marki Majesty to idealny kompromis pomiędzy funkcjonalnością a wyglądem. Model ten posiada ramkę stylizowaną na gogle motocyklowe i będą idealnie pasować do większości kasków. Dodatkowe zawiasy zwiększają komfort podczas noszenia gogli razem z kaskiem, natomiast sferyczna szyba oferuje szeroki zakres widzenia i jest osadzona w ramce dla dodatkowej ochrony przed zarysowaniami i uderzeniami.'},
      { id: 12, name: 'Gogle amatorskie', src: '/assets/img/gogles/gogle4.jpg', price: 59.99, size: 180,
        info: 'Sporty zimowe to jest to, w czym czujesz się najlepiej? W takim razie nie może zabraknąć w Twoim ekwipunku męskich gogli GGD001 marki 4F!' +
        'Dzięki temu, że zostały wykonane z wysokiej jakości termoplastycznego poliuretanu, masz pewność, że są maksymalnie trwałe i odporne na przypadkowe uszkodzenia. Do tego gogle są bardzo wygodne - idealnie przylegają do głowy i twarzy i pasują do większości kasków.' +
        'Soczewka zrobiona jest z trwałego poliwęglanu i posiada filtr UV 400, dzięki któremu masz zapewnioną wysoką ochronę przed szkodliwymi promieniami słonecznymi. Dodatkową zaletą jest to, że w goglach GGD001 nic nie będzie ograniczać Twojej widoczności - a to dzięki temu, że posiadają specjalną powłokę, która zapobiega parowaniu.'},
      { id: 13, name: 'Kijki rekreacyjne', src: '/assets/img/kijki/kijki1.jpg', price: 99.99, size: 160,
        info: 'Multifunkcjonalne kije narciarskie Telescopic Majesticks marki Majesty przeznaczone są do jazdy freestyle i backcountry. Możesz dopasować je do swojego wzrostu dzięki teleskopowej budowie, która umożliwia regulację wysokości w zakresie 100-140cm. Kije wykonano we Włoszech z anodyzowanego aluminium lotniczego 7075, który jest bardzo lekki, a przy tym niezwykle trwały i wytrzymały, a do tego całkowicie podlega procesowi recyklingu.'},
      { id: 14, name: 'Kijki profesjonalne', src: '/assets/img/kijki/kijki2.jpg', price: 89.99, size: 165,
        info: 'Ski-alpinistyczne kije narciarskie Element Majesticks marki Majesty stworzone zostały do jazdy na stromym terenie. Dzięki teleskopowej budowie możesz wyregulować ich wysokość w zakresie 100-140cm i tym samym bez trudu dopasować do swoich potrzeb. Kije wykonano we Włoszech z anodyzowanego aluminium lotniczego 7075, który jest bardzo lekki i trwały, a do tego całkowicie podlega procesowi recyklingu.'},
      { id: 15, name: 'Kijki turystyczne', src: '/assets/img/kijki/kijki3.jpg', price: 109.99, size: 175,
        info: 'Kije Element Majesticks posiadają wygodną rączkę z pianki o dużej gęstości ze specjalną owalną głowicą, która może zostać użyta jako element do zakotwiczenia się w śniegu podczas wspinania się po stromym zboczu. Gruba aluminiowa rura o średnicy 18mm zapewnia wytrzymałość i dodatkową sztywność, natomiast dolna aluminiowa rura jest węższa i jej średnica wynosi 16mm. Została ona zaprojektowana w taki sposób, aby zminimalizować efekt bujania się kija - kij jest cięższy przy rączce, przez co jest lepiej wyważony.'},
      { id: 16, name: 'Kijki amatorskie', src: '/assets/img/kijki/kijki4.jpg', price: 59.99, size: 180,
        info: 'Ruszaj na stok z kijami narciarskimi Touring Majesticks marki Majesty! Przeznaczone są do skitouru i jazdy freeride, a dzięki ich teleskopowej budowie bez trudu dopasujesz je do swoich potrzeb. Kije Touring Majesticks wykonano we Włoszech z anodyzowanego aluminium lotniczego 7075, który jest bardzo lekki, a przy tym niezwykle trwały, wytrzymały, a do tego całkowicie podlega procesowi recyklingu.' +
        'Kije Touring Majesticks posiadają wygodną rączkę z pianki o dużej gęstości z plastykową wytrzymałą głowicą, która ułatwia pokonywanie stromych podejść. Gruba aluminiowa rura o średnicy 18mm zapewnia wytrzymałość i dodatkową sztywność, natomiast dolna aluminiowa rura o węższej średnicy 16mm została zaprojektowana i wyważona w taki sposób, aby zminimalizować efekt bujania się kija.' +
        'Kolejną zaletą kijów Touring Majesticks jest plastikowa końcówka z grotem vidia, nagwintowana do wkręcania śnieżek, a także wygodny pasek na nadgarstek oraz stylowe matowe wykończenie. W zestawie razem z kijami znajdziesz 2 komplety talerzyków freeride i freestyle.'},
      { id: 17, name: 'Kask rekreacyjny', src: '/assets/img/kaski/kask1.jpg', price: 199.99, size: 180,
        info: 'Nowoczesny kask narciarski Andor marki Head stawia na sprawdzone rozwiązania i maksymalną wygodę, dzięki której nawet wielogodzinne szaleństwo na stoku nie będzie powodować dyskomfortu. Wszystko dzięki wykorzystaniu wysokiej klasy materiałów i niezawodnych technologii opracowanych przez markę Head, które zapewniają to, co najważniejsze, czyli bezpieczeństwo.' +
        'Kask Andor posiada niezwykle lekką skorupę ABS, która gwarantuje świetną ochronę przed uderzeniami. Wkładka Sympatex zapewnia utrzymanie odpowiedniego klimatu wewnątrz kasku i chroni przed zewnętrznymi wpływami atmosferycznymi. Aktywna wentylacja to gwarancja suchej skóry nawet podczas intensywnych zjazdów. Kask posiada odpinane nauszniki, tak więc możesz je ściągnąć w cieplejsze dni albo w celu wyczyszczenia. Idealne dopasowanie i komfort użytkowania zapewnia system BOA 360 Fit.'},
      { id: 18, name: 'Kask profesjonalny', src: '/assets/img/kaski/kask2.jpg', price: 189.99, size: 175,
        info: 'O tym, że doskonały kask to podstawowy element wyposażenia każdego rozsądnego narciarza i snowboardzisty, nikogo nie trzeba przekonywać. Stivot marki Head jest kaskiem, który dopasowuje się do Ciebie i spełnia wszelkie wymogi, jakie postawić może przed nim ambitny amator sportów zimowych. ' +
        'Wewnątrz kasku zaprojektowano specjalną miękką wyściółkę, która zapobiega wszelkim uciskom skorupy na głowę i zapewnia najwyższy komfort podczas noszenia. Nie ryzykujesz też przegrzania ani wychłodzenia - strefy z siateczki zapewniają optymalną oddychalność. Umożliwiają wydalenie nadmiaru wilgoci na zewnątrz, dzięki czemu nie wychłodzisz ani nie przegrzejesz głowy. Nie tylko będziesz czuć się świeżo i wygodnie, ale też do minimum ograniczasz ryzyko przeziębienia i innych chorób typowych dla zimowej aury. Również dzięki miękkim poduszkom na uszy Twoja głowa chroniona jest przed przewianiem i niebezpiecznym zapaleniem ucha. Możesz więc szusować bez żadnych obaw!' +
        'Jak wiadomo, śnieg odbija promienie słoneczne, które nie tylko oślepiają i ograniczają widoczność, ale są też groźne dla zdrowia oczu, dlatego zawsze miej na sobie gogle. W kasku Stivot zaprojektowano specjalne zaczepy na gogle, dzięki którym nawet przy najszybszych zjazdach pozostaną one na swoim miejscu. Kask oczywiście również zawsze będzie tam, gdzie ma być, czyli na Twojej głowie - nie przemieści się ani nie opadnie, gdyż idealnie dostosujesz go do rozmiaru głowy. Posiada on regulowane zapięcie pod głową, które uniemożliwia zsunięcie, do tego pokrętło rozmiaru kasku pozwoli Ci dopasować Stivot do swojej głowy tak precyzyjnie, by stanowił idealną ochronną barierę całkowicie absorbującą ewentualne uderzenia.' +
        'Szusuj bezpiecznie, zjeżdżaj szybko i komfortowo. Kask Stivot to gwarancja bezpieczeństwa najwyższej klasy!'},
      { id: 19, name: 'Kask turystyczny', src: '/assets/img/kaski/kask3.jpg', price: 149.99, size: 165,
        info: ' To więcej niż bezpieczeństwo i wygoda. To lekkość, jakość i doskonała ochrona przed chłodem przy ' +
        'jednoczesnym utrzymaniem wysokiego poziomu słyszalności. Czyli kask doskonały! ' +
        'Zastosowano tu więc liczne technologie, dzięki którym bezpieczeństwo masz jak w banku. Wyjątkowa mocna, a ' +
        'przy tym lekka skorupa z pianką EPS nakładana była z siłą 420 ton, co sprawia, że całość jest jednością, ' +
        'której niestraszne są siła tarcia ani uderzenia. Tym samym chronisz nie tylko głowę przed urazem podczas ' +
        'wypadku, ale też np. w czasie zjazdu, o który nietrudno przy upadku z dużą prędkością. Ważnym udogodnieniem ' +
        'jest też innowacyjna technologia Natural Sound System. To ona sprawia, że usłyszysz wszystko, co Cię otacza, ' +
        'i zwiększysz tym samym swoje bezpieczeństwo. Wyściółka jest antyalergiczna i wyjmowana, więc z łatwością ją ' +
        'wypierzesz, by służyła Ci przez długi czas. Twoje gogle również pozostaną na swoim miejscu, a ich poprawianie' +
        ' i uporczywe przesuwanie nie wchodzą w grę. ' +
        'Całość wieńczy idealne dopasowanie do głowy - co do milimetra. Bo w kwestii bezpieczeństwa to precyzja ma największe znaczenie.'},
      { id: 20, name: 'Kask amatorski', src: '/assets/img/kaski/kask4.jpg', price: 129.99, size: 188,
        info: 'Doskonale chroni głowę przed obrażeniami, a jednocześnie jest lekki i funkcjonalny jak mało który.' +
        'Specjalna konstrukcja InMould gwarantuje idealną współpracę skorupy wewnętrznej i zewnętrznej, dzięki czemu ' +
        'zapewnia Ci maksymalne bezpieczeństwo. Wstrząsy są amortyzowane, a ty czujesz się bezpiecznie. I komfortowo - ' +
        'odpinane uszy, wentylacja, uchwyt na gogle i doskonałe dopasowanie dają pewność, że jazda przez wiele godzin ' +
        'będzie czystą przyjemnością. Do tego elementy odblaskowe, które zwiększą Twoje bezpieczeństwo także po zmroku,' +
        ' i... możesz szusować, jak tylko długo chcesz!'}
  ]

  export const Narty160180: Product[] = [
        { id: 1, name: 'Narty', src: '/assets/img/skis/big_a48c82e99ec94d4d967ff56b84e2bb50.jpg', price: 99.99, size: 170,
          info: 'Jeszcze lepsze narty, czyli jeszcze więcej frajdy z jazdy - tak prezentują się narty Vandal 2.0 marki Majesty. Jest to ulepszony, wszechstronny model, który doskonale się sprawdzi do jazdy po trasie, w parku i backcountry.'},
        { id: 2, name: 'Narty biegowe', src: '/assets/img/skis/meskie-narty-biegowe.jpg', price: 109.99, size: 180,
          info: 'Z nartami Thrasher JR - Freestyle Park&Pipe marki Majesty całkowicie zdominujesz snowpark, i to bez względu na to, czy wybierzesz skocznię, czy half-pipe. Model ten wyposażony jest w rdzeń odznaczający się długą żywotnością flex oraz trwały i szybki ślizg IS7200, który idealnie się sprawdzi do jazdy freeride dla młodszych miłośników szusowania .'},
        { id: 3, name: 'Narty atomic redster', src: '/assets/img/skis/narty-atomic-redster-doubledack-xt.jpg', price: 89.99, size: 180,
          info: 'Narty RocknRolla marki Majesty to model true twin-tip przeznaczony do street jibbingu i jazd w snowparku. Posiadają konstrukcję 2D hybrid, która łączy w sobie luz wykonywania butterów i ostrość camebra. Oznacza to, że narty wybaczają błędy podczas lądowania, a prawdopodobieństwo złapania krawędzi jest znikome - zamiast tego masz zapewnioną doskonałą kontrolę na najeździe i świetna amortyzację podczas lądowania.'},
        { id: 5, name: 'Narty local hero', src: '/assets/img/skis/narty-local-hero-jr.jpg', price: 109.99, size: 170,
          info: 'Narty Wolf marki Majesty to świetny model freetourowy o konstrukcji semi hybrid, która idealnie zachowuje się w puchu i na bardziej wymagającym terenie. Za dobrą przyczepność na oblodzonych stokach i szybką reakcję odpowiada camber, tak więc narty Wolf doskonale się sprawdzą jako wszechstronny model freerideowy.'},
        { id: 6, name: 'Narty salomon x-race', src: '/assets/img/skis/narty-salomon-x-race-sw.jpg', price: 139.99, size: 160,
          info: 'Narty Destroyer marki Majesty łączą w sobie wszystkie cechy nowoczesnych nart freerideowych i freetouringowych. To uniwersalne narty, które mają wiele do zaoferowania narciarzom pozatrasowym, niezależnie od ich stylu jazdy.'},
        { id: 7, name: 'Narty', src: '/assets/img/skis/narty-volkl-nanuq.jpg', price: 109.99, size: 165,
          info: 'Narty Destroyer Carbon marki Majesty to odpowiedź na potrzebę posiadania jednej pary lekkich i niezwykle wytrzymałych nart, które doskonale się sprawdzą przy zmieniających się warunkach terenowych i śniegowych. Model ten zaprojektowany został w technologii Carbon Lighten Technology, która łączy niską wagę niezbędną podczas dłuższych tur z freerideowymi właściwościami niezbędnymi do jazdy w zróżnicowanym śniegu - zarówno w puchu, jak i na oblodzonych żlebach.'},
        { id: 8, name: 'Narty biegowe rekreacyjne', src: '/assets/img/skis/nartybiegowe_rekreacyjne.jpg', price: 119.99, size: 175,
          info: 'Wszechstronne narty Superior marki Majesty to najlepszy wybór do jazdy w backcountry. Zaprojektowane zostały w technologii hybrydowej 2D, która dzięki ostrości camebra zapewnia doskonałą kontrolę na najeździe i świetną amortyzację podczas lądowania.'}
    ]
