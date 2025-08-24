<%*
const url = await tp.system.prompt("Вставь ссылку на GitHub репозиторий:");

// Получаем название репозитория из ссылки
// Пример ссылки: https://github.com/username/reponame
let repoName = "";
try {
    const match = url.match(/github\.com\/[^\/]+\/([^\/]+)(\/|$)/);
    if(match){
        repoName = match[1];
    } else {
        repoName = "Не удалось определить название репозитория";
    }
} catch(e){
    repoName = `Ошибка: ${e.message}`;
}

// Формируем Markdown-блок
tR += `# 🐙 GitHub
Название репозитория: ${repoName}
Ссылка: [${repoName}](${url})

## 📝 Описание
- Основное назначение репозитория:
- Ключевые файлы и структуры:
`;
%>
