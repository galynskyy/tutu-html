# tutu-html

## Используемые технологии
- Gulp с плагинами (concat, autoprefixer, postcss)
- Linux (Ubuntu)

## Адаптивный дизайн
- Есть

## Отправка данных

Получение данных с формы сделал в консоль с помощью метода serialize, как самого быстрого.

## Дополнительный вопрос про blur:

Эффекта blur можно добиться несколькими способами:

- CSS-свойство filter (разрабатываемая технология, плохая поддержка браузерами (IE > 11, webkit'ы с префиксом -webkit-, FF > 50 поддерживает полностью))
- svg-фильтр (хорошая поддержка всеми браузерами, простой в реализации)
- webGL и Canvas (помимо поддержки браузером, необходима поддержка графическим процессором клиента, сложный в реализации)

SVG-фильтр является наиболее приемлемым способом добиться эффекта Blur. В будущем, думаю, использование CSS-свойства filter станет поддерживаться всеми браузерами.
