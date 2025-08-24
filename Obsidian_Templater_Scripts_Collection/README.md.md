# 📚 Obsidian Templater Scripts Collection
**Версия:** 1.0.0  
**Автор:** ElvenRivendil + Днева (ИИ-ассистент)  
**Дата:** 2025-08-24  

## 📌 О проекте
Набор скриптов-шаблонов для [Obsidian Templater](https://github.com/SilentVoid13/Templater), позволяющий автоматически формировать заметки по различным типам ссылок (YouTube, GitHub, GitLab).  

Каждый шаблон:
- Подтягивает название и метаданные;
- Создаёт структурированный блок заметки;
- Упрощает ведение базы знаний в Obsidian.

## 📂 Состав
- [`youtube_template.js`](./youtube_template.js)  
  ➝ [README_YOUTUBE.md](./README_YOUTUBE.md) — вставка YouTube-ссылок с названием, превью и ссылкой.  

- [`github_template.js`](./github_template.js)  
  ➝ [README_GITHUB.md](./README_GITHUB.md) — шаблон для GitHub-репозиториев.  

- [`gitlab_template.js`](./gitlab_template.js)  
  ➝ [README_GITLAB.md](./README_GITLAB.md) — шаблон для GitLab-репозиториев.  

## ⚙️ Требования
- [Obsidian](https://obsidian.md) с установленным плагином **Templater**  
- Для YouTube-шаблона: установленный [yt-dlp](https://github.com/yt-dlp/yt-dlp)  

## 🚀 Установка
1. Скопируй нужные шаблоны в папку `Templates` в своем Obsidian Vault.  
2. Подключи их через команду Templater (`<% tp.user.NAME() %>`).  
3. Вставь ссылку — и получишь структурированный блок для заметки.  

## 📝 Примеры
- YouTube-шаблон формирует блок с названием видео, ссылкой и картинкой-превью.  
- GitHub- и GitLab-шаблоны формируют карточку с названием репозитория и ссылкой.  

## 🔖 Лицензия
MIT — свободное использование и модификация.  

---
