# 🎥 YouTube Link Template for Obsidian Templater
**Версия:** 1.0.0  
**Автор:** ElvenRivendil + Днева (ИИ-ассистент)  
**Дата:** 2025-08-24  

## 📌 Назначение
Шаблон для [Obsidian Templater](https://github.com/SilentVoid13/Templater), позволяющий по ссылке на YouTube-видео автоматически:
- Получать название ролика (через `yt-dlp`);
- Добавлять ссылку на ролик;
- Подтягивать превью-изображение;
- Генерировать структурированный блок заметки.

## ⚙️ Требования
- Установленный [yt-dlp](https://github.com/yt-dlp/yt-dlp);
- Рабочая оболочка с поддержкой UTF-8 (`chcp 65001` в PowerShell);
- Плагин **Templater** в Obsidian.

## 🚀 Установка
1. Скопируй скрипт в каталог `Templates` в своем Vault.
2. Вставь вызов шаблона через Templater (`<% tp.user.youtube() %>`).
3. При вставке ссылки YouTube скрипт создаст заготовку для заметки.

## 📝 Пример результата
```markdown
# 🎥 YouTube
Название: Obsidian Гайд #1: Первые шаги
Ссылка: [{video.title}](https://www.youtube.com/watch?v=CKRgUveNZx8)
![](https://img.youtube.com/vi/CKRgUveNZx8/0.jpg)

## 📝 Описание
- Краткое содержание:
- Ключевые моменты:

