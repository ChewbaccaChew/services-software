# Services-Software

## Требования к проекту

- [Node 18.16.0](https://nodejs.org/download/release/v18.16.0/)
- [NVM/MacOC](https://tecadmin.net/install-nvm-macos-with-homebrew/)
- [NVM/Windows](https://github.com/coreybutler/nvm-windows/releases)

---

## Использование

Клонировать репозиторий:
```properties
git clone https://github.com/ChewbaccaChew/services-software
```
Удалить папку .git:
```properties
rm -rf .git
```
---

## GitHub

Нужно инициализировать git проект:
```properties
git init -b main
```
Добавить все изменения и сделать первый коммит:
```properties
git add . && git commit -m "initial commit"
```
Соединить git удаленный с локальным, *USER* (пользователь) и *REPO* (репозиторий):
```properties
git remote add origin https://github.com/USER/REPO.git
```
Проверить на то что есть соединение:
```properties
git remote -v
```
Отправить изменения в удаленный репозиторий:
```properties
git push origin main
```
---

## Проверка версии

```properties
node -v
```
```properties
npm -v
```
```properties
nvm -v
```
---

## Переключение версии Node

```properties
nvm list
```
```properties
nvm use <version>
```
---

## Установка зависимостей

```properties
npm install
```
---

## Запуск приложения

```properties
npm run start
```
---

## Загрузка на Github Pages

```properties
npm run deploy
```
---
