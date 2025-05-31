// Обработка действий с видео
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация плеера
    const player = document.getElementById('mainPlayer');
    
    // Обработка кнопок лайков/дизлайков
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const countSpan = this.querySelector('span');
            
            if (countSpan) {
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    let count = parseInt(countSpan.textContent);
                    countSpan.textContent = count - 1;
                } else {
                    this.classList.add('active');
                    let count = parseInt(countSpan.textContent);
                    countSpan.textContent = count + 1;
                }
            }
        });
    });
    
    // Обработка рейтинга комментариев
    document.addEventListener('click', function(e) {
        if (e.target.closest('.rating-btn')) {
            const btn = e.target.closest('.rating-btn');
            const icon = btn.querySelector('i');
            const span = btn.querySelector('span');
            
            if (span) {
                let count = parseInt(span.textContent);
                
                if (btn.classList.contains('liked')) {
                    btn.classList.remove('liked');
                    span.textContent = count - 1;
                } else if (btn.classList.contains('disliked')) {
                    btn.classList.remove('disliked');
                    span.textContent = count - 1;
                } else {
                    if (icon.classList.contains('fa-thumbs-up')) {
                        btn.classList.add('liked');
                        span.textContent = count + 1;
                    } else if (icon.classList.contains('fa-thumbs-down')) {
                        btn.classList.add('disliked');
                        span.textContent = count + 1;
                    }
                }
            }
        }
    });
    
    // Обработка отправки комментария
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const textarea = this.querySelector('textarea');
            const comment = textarea.value.trim();
            
            if (comment) {
                addNewComment(comment);
                textarea.value = '';
            }
        });
    }
});

// Добавление нового комментария
function addNewComment(text) {
    const commentsContainer = document.getElementById('commentsContainer');
    const userEmail = document.querySelector('.user-info span')?.textContent || 'Гость';
    
    const commentElement = document.createElement('div');
    commentElement.className = 'comment animated';
    commentElement.innerHTML = `
        <div class="comment-header">
            <div class="comment-user">
                <div class="user-avatar">${userEmail.charAt(0).toUpperCase()}</div>
                <span>${userEmail}</span>
            </div>
            <span>Только что</span>
        </div>
        <div class="comment-content">${text}</div>
        <div class="comment-rating">
            <button class="rating-btn">
                <i class="fas fa-thumbs-up"></i> <span>0</span>
            </button>
            <button class="rating-btn">
                <i class="fas fa-thumbs-down"></i> <span>0</span>
            </button>
        </div>
    `;
    
    commentsContainer.prepend(commentElement);
}