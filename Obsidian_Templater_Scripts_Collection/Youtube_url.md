<%*
const url = await tp.system.prompt("Вставь ссылку на YouTube:");

const execSync = require("child_process").execSync;

// Получаем название видео через yt-dlp
let title = "";
try {
    const jsonOutput = execSync(`yt-dlp --dump-json --no-playlist "${url}"`, { encoding: 'utf8' });
    const data = JSON.parse(jsonOutput);
    title = data.title;
} catch (e) {
    title = `Ошибка: ${e.message}`;
}

// Получаем превью видео
const videoIdMatch = url.match(/v=([a-zA-Z0-9_-]{11})/);
let thumbnail = "";
if(videoIdMatch){
  thumbnail = `https://img.youtube.com/vi/${videoIdMatch[1]}/0.jpg`;
}

tR += `# 🎥 YouTube
Название: ${title}
Ссылка: [Открыть](${url})
![](${thumbnail})

## 📝 Описание
- Краткое содержание:
- Ключевые моменты:
`;
%>
