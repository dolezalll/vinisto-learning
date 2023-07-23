1.  **Co je Promise**: Promise je objekt reprezentující potenciální dokončení nebo selhání asynchronní operace. Může se nacházet ve třech stavech: "pending" (operace probíhá), "fulfilled" (operace byla úspěšně dokončena) nebo "rejected" (operace selhala).
    
2.  **Konzumace Promises**: Spotřebitelé (consumers) promise mohou přidat zpětná volání (callbacks), která se provedou, až se promise naplní (fulfill) nebo odmítne (reject). Toto se obvykle provádí pomocí metody `then()`.
    
3.  **Řetězení Promises**: Promises umožňují řetězit asynchronní operace dohromady, vytvářet sekvenci kroků, které závisí na výsledku předchozího kroku. Tímto se zabrání tzv. "callback pyramid of doom".
    
4.  **Zpracování chyb**: Chyby lze zachytit a zpracovat pomocí metody `catch()`. Pokud nastane chyba v řetězci promise, propaguje se až k nejbližšímu bloku `catch()`.
    
5.  **Skládání Promises**: Existuje několik metod pro skládání (composition) promise, například `Promise.all()`, `Promise.allSettled()`, `Promise.any()` a `Promise.race()`, které umožňují spouštět několik promise souběžně nebo sekvenčně.
    
6.  **Async/Await**: Syntaxe `async` a `await` poskytuje pohodlnější způsob práce s promise, což zlepšuje čitelnost a srozumitelnost kódu.
    
7.  **Vytváření Promises**: Promise lze vytvořit pomocí konstruktoru `Promise`, který přijímá funkci executoru (executor function). Toto je užitečné, pokud chcete obalit staré API založené na zpětných voláních do promise.
    
8.  **Časování**: Promises poskytují záruky ohledně časování volání registrovaných zpětných volání, což zajistí předvídatelný a řízený tok vykonávání kódu.
    

Pamatujte si, že Promises jsou zásadním nástrojem v moderním JavaScriptu pro zpracování asynchronních operací organizovaným a efektivním způsobem. Pomáhají vyhnout se zmatení s vnořenými zpětnými voláními (callback hell) a zlepšují čitelnost a udržovatelnost asynchronního kódu.