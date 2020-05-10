# BackRoad Lead
## Описание
Модуль предназначен для концентрирования внимания пользователя на модальном окне, когда он уводит курсор с документа. <br />
Помогает собрать дополнительный фидбэк или вывести сообщение о спец-предложении. <br />
Запоминание посетителя, который увидел модальное окно построено на cookie

## Использование
Импортировать модуль
<br />

    import backRoadLead from "/backroad_lead/backRoad.js";    
    
<br />
А затем просто вызвать класс
 
    new backRoadLead(title, description);
    
### Аргументы
* **title** - Заголовок модального окна
* **description** - Описание модального окна