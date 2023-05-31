# MODSEN CINEMA APP

## Содержание

- [Используемые технологии](#Используемые-технологии)
- [API](#API)
- [Техническое задание](#Техническое-задание)
- [Тестирование](#Тестирование)

## Используемые технологи

- ***yarn*** - менеджер пакетов.
- ***react*** - JavaScript-библиотека для создания пользовательских интерфейсов.
- ***redux*** - инструмент управления состоянием приложения.
- ***react-native*** - JavaScript-фреймворк для создания нативных мобильных приложений.
- ***typescript*** - типизированный язык над JS.
- ***react-navigation*** - набор навигационных компонентов.
- ***styled-components*** - система стилизации react компонентов.
- ***detox*** — e2e тестирование для мобильных приложений.
- ***jest*** — unit тестирование приложений.
- ***eslint*** - статический анализатор кода.
- ***prettier*** - форматирует код.
- ***husky*** - позволяет выполнять некоторые действия во время коммита или пуша кода в ветку.
- ***firebase*** - платформа для разработки приложений, предоставляет облачное хранилище, аналитику и многое другое.
- ***react-native-splash-screen*** - библиотека для интеграции splash screen.
- ***react-hook-forms / formik*** - для работы с формами.
- ***react-native-youtube / react-native-video*** - для работы с видео.
- ***@react-navigation/bottom-tabs*** - навигация для нижней панели приложения.
- ***@react-navigation/material-top-tabs*** - навигация для верхней панели приложения.
- ***react-native-push-notification*** - модуль для push нотификаций.
- ***react-native-calendars*** - позволяет использовать нативный календарь и кастомизировать его.
- ***react-native-image-colors*** - модуль, выделяющий цветовую гамму изображения.
- ***react-native-reanimated*** - модуль для работы с анимацией.
- ***react-native-image-crop-picker*** - модуль для работы с изображением.
- ***react-native-encrypted-storage*** - приватный storage. Использует Keychain для iOS и EncryptedSharedPreferences для Android.


## API
- ***[IMDb Top 100 Movies](https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/)*** - топ фильмов по рейтингу imdb.
- ***[Movie Details](https://rapidapi.com/goodmoviesaps/api/movie-details1/)*** - поиск фильмов по imdb id.
- ***[OTT details](https://rapidapi.com/gox-ai-gox-ai-default/api/ott-details/)*** - продвинутый поиск фильмов по параметрам.

## Техническое задание
Необходимо реализовать приложение, схожее по своей функциональности с кинопоиском, также с возможностью букинга билетов в кинотеатр. 
[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=0%3A1&t=75XQVWVQB8mtZDfJ-0) <br>
Приложение состоит из множества скринов, каждый из которых обладает определенным функционалом.

### Общие требования
- Реализовать обработку ошибок через паттерн *"Error Boundaries"*
- Реализация светлой и тёмной темы с использованием *styled-components*
- Использование TypeScript для типизирования и уменьшения количества потенциальных багов.
- Для управления состоянием используется redux.
- Использование алиасов для импортирования файлов.
- Покрытие тестами всего приложения.
- Для форматирование кода использовать eslint + pretter.
<br>
!!! Для реализации карусели запрещается использовать пользовательские пакеты rn.<br>Данный функционал нужно реализовать, используя FlatList или ScrollView.


### 1. Splash Screen
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=31%3A153&t=zsLwh7g9o7je2Svc-0)<br>
![Splash screen](./images/splash.png)
</details>

 <details>
<summary>Description</summary>
 
Splash screen - первый экран, который пользователь видит, открыв приложение, не находящееся в оперативной памяти. Как правило, это лого приложения/компании. Используется для загрузки данных (api, asyncStorage и тд), в том числе для подгрузки скриптового бандла react-native.

Необходимо использовать библиотеку [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen). Обращаю внимание на то, что вам помимо всего прочего необходимо конфигурировать ваш splash на [нативном уровне](https://github.com/crazycodeboy/react-native-splash-screen#getting-started). 
Также вам необходимо реализовать простую анимацию, например skeleton, glow или индикатор загрузки.

</details>

### 2. Welcome screen
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=52%3A753&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/welcome.png)
</details>

 <details>
<summary>Description</summary>

Авторизоваться можно через сервисы или через приложение, нажав на Create an Account.
Для реализации данного функционала необходимо использовать [firebase](https://rnfirebase.io/). 

</details>

### 3. Sign up modal
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=60%3A345&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/sign_up.png)
</details>

 <details>
<summary>Description</summary>

Для регистрации необходимы 4 поля: имя, фамилия, почта и пароль.
Для форм можно использовать [react-hook-forms](https://react-hook-form.com/) или [formik](https://formik.org/docs/overview).
Каждое поле должно содержать [валидацию](https://github.com/jquense/yup). 
Пароль должен быть скрыт при вводе.
При вводе пароля следует отображать индикатор сложности:
- Low: 4-8 символов.
- Mediunm: 8-12 символов + верхний регистр.
- High: 12-16 символов + верхний регистр + иные символы (.,!?/).

</details>

### 4. Sign in modal
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=60%3A652&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/sign_in.png)
</details>

 <details>
<summary>Description</summary>

Форма логина должна содержать валидацию данных, если пользователь вводит одно из полей неверно - это должно визуально отображаться на инпутах и сопровождаться соотвестствующим сообщением для пользователя (один из вариантов - тосты).

</details>

### 5. Home screen
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=2%3A688&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/home.png)
</details>

 <details>
<summary>Description</summary>

После успешного логина пользователь попадает на основной экран.

Здесь вам предлагается использовать [OTT details API](https://rapidapi.com/gox-ai-gox-ai-default/api/ott-details/) для поиска фильмов по параметрам.
Для фильмов в кинотеатре берем 10 любых картин текущего года с рейтингом выше 7 и один фильм для секции Coming soon.
<br>

 **Секция Cooming Soon** <br>
 В данной секции пресутсвует плеер с трейлером, кнопка поделиться, кнопка play и кнопка Tickets Available.
 Для плеера рекомендуется использовать [react-native-youtube](https://github.com/davidohayon669/react-native-youtube) или [react-native-video](https://github.com/react-native-video/react-native-video/blob/master/API.md)

**Секция Now showing** <br>
Фильтрация работает для данной секции, в карусели отображаются фильмы выбранного жанра. <br>
</details>

### 6. Details screen
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=2%3A850&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/details.png)
</details>

 <details>
<summary>Description</summary>

После клика на карточку какого-либо фильма, пользователь попадает на страницу Film Details, где он может прочитать описание фильма, посмотреть комментарии и забукать билет.

Для комментариев необходимо использовать [Cloud Firestore](https://rnfirebase.io/firestore/usage).
Комментарии обновляются в режиме реального времени. Появление комментария сопровождается звуком (работает, только если пользователь находится на данном скрине)

</details>

### 7. Choose seats screen
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=2%3A730&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/chooose_cinema.png)
</details>

 <details>
<summary>Description</summary>
 
 На данном скрине пользователю для букинга необходимо выбрать:
 + Дату сеанса.
 + Время сеанса.
 + Места в кинотеатре.

Только после выбора всех трех позиций, ему доступен букинг билетов.

 Все данные о букингах должны храниться в [secureStorage](https://reactnative.dev/docs/security).

 За день до сеанса пользователь должен быть оповещен push уведомлением, содержащим фильм, дату и время сеанса. Для подключения нотификаций можно использовать любой удобный модуль. Один из вариантов [react-native-push-notification](https://github.com/zo0r/react-native-push-notification).

</details>

### 8. Calendar modal
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=49%3A172&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/choose_date.png)
</details>

 <details>
<summary>Description</summary>
 
 В модальном окне необходимо реализовать календарь. Для этого разрешается использовать [react-native-calendars](https://github.com/wix/react-native-calendars).
 Также должны соблюдаться условия: 
 + Нельзя выбрать дату в прошлом. 
 + Букинг доступен не более чем за месяц до сеанса.
 + Выбранный день выделяется цветом и меняется в life режиме на скрине под модальным окном.

</details>


### 9. Top films screen
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=2%3A722&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/top_films.png)
</details>

 <details>
<summary>Description</summary>

 Содержит строку поиска, фильтрацию и список лучших фильмов.
 В качестве списка фильмов рекомендуется использовать [IMDb Top 100 Movies](https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/).

Поиск осуществляется по названию фильма, пробелы перед и после названия игнорируются.
После поиска скролл всегда в начале списка фильмов.

</details>

### 10. Top films filters
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=49%3A345&t=zsLwh7g9o7je2Svc-0)<br
![Welcome screen](./images/filters.png)
</details>

 <details>
<summary>Description</summary>

Фильтрация осуществляется по году выпуска и рейтингу фильма.
Также самостоятельно нужно добавить фильтрацию по жанру и автору фильма.

</details>


### 11. More film screen
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=63%3A766&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/more_film.png)
</details>

 <details>
<summary>Description</summary>

Здесь пользователь может посмотреть информацию о выбранном фильме.
Фон формируется динамически градиентно в зависимости от [цветовой гаммы постера](https://github.com/osamaqarem/react-native-image-colors).
Например у постера Аватара цветовая гамма - голубой + белый, следовательно формируется background с градиентом соотв. цветов.

Также на этой странице необходимо реализовать свайпер вверх.<br>
Следует использовать анимацию react-native или [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/). 

</details>

### 12. More film Details screen
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=64%3A944&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/more_film_details.png)
</details>

 <details>
<summary>Description</summary>

Скрин содержит полную информацию о фильме:
+ Трейлер.
+ Описание. Часть должна быть скрыта с эффектом shadow. При нажатии на кнопку Read more оно раскрывается и показывается полностью без эффекта shadow. Необходимо использовать анимацию для плавности действия hide/show.
+ Cписок актеров.
+ Отзывы кинокритиков. Брать можно из [OTT details](https://rapidapi.com/gox-ai-gox-ai-default/api/ott-details/) вкладка Additional Title Details.

</details>

### 13. Tickets screen
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=28%3A520&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/tickets.png)
</details>

 <details>
<summary>Description</summary>

Содержит информацию о букингах пользователя. 
Раздел upcoming - предстоящие сеансы в кинотеатре.
Past - прошедшие сеансы, которые пользователь посетил.
Missed - забуканные сеансы, которые пользователь пропустил (дата в прошлом).

Upcomings букинги можно отменить, нажав на кнопку cancel. Пользователь должен увидеть модально окно с подтверждением.

Для top tabs рекомендуется использовать [@react-navigation/material-top-tabs](https://reactnavigation.org/docs/material-top-tab-navigator/)

</details>


### 14. Profile screen
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=29%3A892&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/profile.png)
</details>

 <details>
<summary>Description</summary>

Профиль содержит информацию о пользователе. 
Обязательными являются поля: имя, фамилия, userID. Также вы можете добавить иную информацию.<br>
Пользователю предоставляется возможность сменить тему приложения.
Дизайн светлой должен быть разработан самостоятельно.
<br>
Private policy - ссылка на сайт https://www.modsen-software.com/
</details>

### 15. Edit profile modal
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=71%3A1084&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/edit_profile.png)
</details>

 <details>
<summary>Description</summary>

Форма изменения профиля состоит из 4 инпутов. 
Изменение пароля должно быть подтверждено текущим паролем.
Также вам самостоятельно необходимо реализовать загрузку [изображения в приложение](https://github.com/ivpusic/react-native-image-crop-picker) и отображать фото пользователя в профиле.
</details>

### 16. Settings modal
<details>
<summary>Screenshot</summary>

[Figma](https://www.figma.com/file/2AWAMpSYwOAaJBFfOAyXyo/Movie's-App-%2F-Modsen?node-id=71%3A1153&t=zsLwh7g9o7je2Svc-0)<br>
![Welcome screen](./images/settings.png)
</details>

 <details>
<summary>Description</summary>
    В настройках пользователь может поменять язык, в приложении их должно быть минимум 2. Также ему доступна опция отключения  уведомлений.
</details>

## Тестирование 
### E2E тестирование
Реализовать e2e тестирование c полным покрытием функционала приложения. Каждый скрин приложения должен содержать тесты Detox (кроме splash screen).
- Все кнопки должны работать и обладать эффектами (opacity, ripple).
- Заполнение формы должно содержать визуализацию валидации,  пароль должен быть скрыт.
- Все кнопки видеоплеера (пауза, play и т.д.) должны корректно отрабатывать. При двойном нажатии на видео, происходит смена состояния play/pause.
- Навигация по скринам в bottom tabs, вложенным скринам должна вести на экраны. Кнопка back возвращает нас на предыдущий скрин. Навигация не ломается.
- Выбор мест в кинотеатре: ячейки должны менять цвет в зависимости от состояния. Нет возможности выбирать уже занятые места.
- Выбор даты в календаре: дни в прошлом не должны быть доступны для выбора.
- Поиск и фильтрация должны работать в соответсвии с выбранными значениями. При поиске скролл должен всегда быть вверху.
- Все кнопки в деталях о фильме должны работать в соответствии с заявленным функционалом.
- Cмена языка и темы должны работать во всем приложении.
Также остальную визуальную составляющую приложения, не описанную выше, необходимо покрыть e2e тестами.

### Unit тестирование
- Весь функционал приложения должен быть покрыт тестами jest (минимум 90%).

