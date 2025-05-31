// Инициализация данных
document.addEventListener('DOMContentLoaded', function() {
    // Загрузка новостей
    loadNews();
    
    // Загрузка комментариев
    loadComments();
    
    // Показать/скрыть админ-панель
    const isAdmin = false; // В реальности нужно проверять авторизацию
    document.getElementById('adminActions').style.display = isAdmin ? 'flex' : 'none';
    
    // Настройка формы комментариев
    const isLoggedIn = false; // В реальности проверять статус входа
    const commentForm = document.getElementById('commentForm');
    if (isLoggedIn) {
        commentForm.querySelector('textarea').removeAttribute('disabled');
        commentForm.querySelector('button').removeAttribute('disabled');
    }
});

// Загрузка новостей
function loadNews() {
    const newsContainer = document.getElementById('newsContainer');
    const news = [
        {
            title: "Новый сезон One Piece уже скоро!",
            date: "15 июня 2023",
            excerpt: "Команда озвучки Anihuyna готовит для вас новый сезон легендарного аниме. Ожидайте скоро на нашем сайте!"
        },
        {
            title: "Топ-10 аниме лета 2023",
            date: "10 июня 2023",
            excerpt: "Мы подготовили для вас рейтинг самых ожидаемых аниме этого лета. Не пропустите премьеры!"
        },
        {
            title: "Конкурс комментаторов",
            date: "5 июня 2023",
            excerpt: "Участвуйте в нашем конкурсе и выигрывайте мерч от Anihuyna! Лучшие комментаторы получат призы."
        }
    ];
    
    newsContainer.innerHTML = '';
    
    news.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card animated';
        newsCard.innerHTML = `
            <div class="news-image">Аниме Новость</div>
            <div class="news-content">
                <h3 class="news-title">${item.title}</h3>
                <span class="news-date">${item.date}</span>
                <p class="news-excerpt">${item.excerpt}</p>
                <a href="#" class="news-link">Читать полностью <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });
}

// Загрузка комментариев
function loadComments() {
    const commentsContainer = document.getElementById('commentsContainer');
    const comments = [
        {
            user: "Алексей",
            avatar: "A",
            time: "2 часа назад",
            content: "Отличная озвучка, как всегда! Спасибо команде Anihuyna за качественную работу.",
            likes: 12,
            dislikes: 1
        },
        {
            user: "Мария",
            avatar: "M",
            time: "5 часов назад",
            content: "Очень жду продолжения! Когда выйдет следующая серия?",
            likes: 8,
            dislikes: 0
        },
        {
            user: "Дмитрий",
            avatar: "Д",
            time: "Вчера",
            content: "Лучший сайт для просмотра аниме с русской озвучкой! Интерфейс удобный, всё работает без лагов.",
            likes: 24,
            dislikes: 2
        }
    ];
    
    commentsContainer.innerHTML = '';
    
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment animated';
        commentElement.innerHTML = `
            <div class="comment-header">
                <div class="comment-user">
                    <div class="user-avatar">${comment.avatar}</div>
                    <span>${comment.user}</span>
                </div>
                <span>${comment.time}</span>
            </div>
            <div class="comment-content">${comment.content}</div>
            <div class="comment-rating">
                <button class="rating-btn">
                    <i class="fas fa-thumbs-up"></i> <span>${comment.likes}</span>
                </button>
                <button class="rating-btn">
                    <i class="fas fa-thumbs-down"></i> <span>${comment.dislikes}</span>
                </button>
            </div>
        `;
        commentsContainer.appendChild(commentElement);
    });
}