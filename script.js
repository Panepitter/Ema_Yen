class BearLoveGame {
    constructor() {
        this.state = {
            love: 100,
            happiness: 100,
            energy: 100,
            coins: 0,
            timeOfDay: 'day',
            lastUpdate: Date.now(),
            gifts: [],
            dates: 0,
            hugs: 0,
            level: 1,
            experience: 0,
            achievements: [],
            unlockedFeatures: [],
            customization: {
                bearOutfit: 'none',
                girlfriendOutfit: 'none',
                background: 'default',
                music: false
            },
            dailyMission: null,
            lastDailyReset: Date.now(),
            gamesPlayed: { hearts: 0, memory: 0, stars: 0, quiz: 0, match: 0 },
            bestScores: { hearts: 0, memory: 0, stars: 0, quiz: 0, match: 0 }
        };
        
        this.phrases = {
            feed: [
                "Mmm, delicious! 🍯",
                "Thank you love, I was so hungry!",
                "Honey is even sweeter with you! 💕",
                "Yen loves when we share food!"
            ],
            play: [
                "So much fun! 🎮",
                "Playing with you is amazing!",
                "Yen is laughing, look! 😊",
                "We are a perfect team!"
            ],
            date: [
                "A romantic date! 💕",
                "Yen's eyes are shining!",
                "This moment is magical! ✨",
                "I love you so much! ❤️"
            ],
            gift: [
                "A gift for Yen! 🎁",
                "It's beautiful, thank you! 💝",
                "Yen will love it for sure!",
                "You're so thoughtful! 🥰"
            ],
            hug: [
                "A warm hug! 🤗",
                "I feel safe in your arms",
                "Yen is smiling! 😊",
                "Hugs are the best medicine! 💕"
            ]
        };
        
        this.gifts = [
            { icon: "🌹", name: "Rose", price: 10, love: 15, unlock: null },
            { icon: "🍫", name: "Chocolates", price: 15, love: 20, unlock: null },
            { icon: "💐", name: "Bouquet", price: 25, love: 30, unlock: null },
            { icon: "🧸", name: "Teddy Bear", price: 20, love: 25, unlock: null },
            { icon: "🎀", name: "Ribbon", price: 12, love: 18, unlock: null },
            { icon: "✨", name: "Stars", price: 8, love: 12, unlock: null },
            { icon: "🎨", name: "Painting Set", price: 50, love: 35, unlock: "painting" },
            { icon: "🎵", name: "Romantic Radio", price: 60, love: 40, unlock: "music" },
            { icon: "📷", name: "Camera", price: 70, love: 45, unlock: "photos" },
            { icon: "🏠", name: "Little House", price: 100, love: 60, unlock: "house" },
            { icon: "🌺", name: "Hawaiian Lei", price: 45, love: 35, unlock: "outfit_hawaii" },
            { icon: "👑", name: "Crown", price: 80, love: 50, unlock: "outfit_royal" },
            { icon: "🎩", name: "Top Hat", price: 55, love: 40, unlock: "outfit_fancy" },
            { icon: "🦋", name: "Butterfly Wings", price: 65, love: 45, unlock: "outfit_fairy" },
            { icon: "🌈", name: "Rainbow", price: 90, love: 55, unlock: "bg_rainbow" },
            { icon: "🏖️", name: "Beach", price: 85, love: 52, unlock: "bg_beach" },
            { icon: "🌸", name: "Sakura Garden", price: 95, love: 58, unlock: "bg_sakura" },
            { icon: "💍", name: "Engagement Ring", price: 200, love: 100, unlock: "engagement" },
            { icon: "💝", name: "Heart Pendant", price: 40, love: 38, unlock: null },
            { icon: "🎁", name: "Surprise Box", price: 120, love: 70, unlock: "surprise_box" }
        ];
        
        this.achievements = [
            { id: "first_hug", name: "First Hug", icon: "🤗", desc: "Give your first hug", reward: 50 },
            { id: "first_date", name: "First Date", icon: "💕", desc: "Go on your first date", reward: 50 },
            { id: "love_master", name: "Love Master", icon: "❤️", desc: "Reach 100 love", reward: 100 },
            { id: "rich_bear", name: "Rich Bear", icon: "💰", desc: "Accumulate 500 🌸", reward: 200 },
            { id: "gift_giver", name: "Generous", icon: "🎁", desc: "Give 10 gifts", reward: 150 },
            { id: "gamer", name: "Expert Gamer", icon: "🎮", desc: "Play 50 mini-games", reward: 300 },
            { id: "high_score", name: "Record!", icon: "🏆", desc: "Score 500+ points in a game", reward: 250 },
            { id: "romantic", name: "Romantic", icon: "💐", desc: "Go on 20 dates", reward: 200 },
            { id: "level_10", name: "Level 10!", icon: "⭐", desc: "Reach level 10", reward: 500 },
            { id: "daily_streak_7", name: "Perfect Week", icon: "📅", desc: "7 consecutive days", reward: 300 },
            { id: "all_outfits", name: "Fashionista", icon: "👗", desc: "Unlock all outfits", reward: 400 },
            { id: "engagement", name: "Engaged!", icon: "💍", desc: "Buy the engagement ring", reward: 1000 }
        ];
        
        this.miniGames = [
            { id: 'hearts', name: 'Collect Hearts', icon: '💕', duration: 30000 },
            { id: 'memory', name: 'Memory Card', icon: '🎴', duration: 60000 },
            { id: 'stars', name: 'Catch Stars', icon: '⭐', duration: 25000 },
            { id: 'quiz', name: 'Love Quiz', icon: '❓', duration: 45000 },
            { id: 'match', name: 'Find the Pair', icon: '💑', duration: 35000 }
        ];
        
        this.quizQuestions = [
            { q: "What is the color of love?", a: ["Red", "Blue", "Green", "Yellow"], correct: 0 },
            { q: "What does the rose symbolize?", a: ["Love", "Friendship", "Fortune", "Wisdom"], correct: 0 },
            { q: "How many hearts do bears have?", a: ["One big", "Two small", "Three", "Infinite"], correct: 3 },
            { q: "Yen's favorite flower?", a: ["Rose", "Tulip", "Sakura", "Sunflower"], correct: 2 },
            { q: "The secret ingredient of love?", a: ["Time", "Care", "Laughter", "All together"], correct: 3 },
            { q: "Emanuele prefers honey...", a: ["In the morning", "In the evening", "Always!", "Never"], correct: 2 },
            { q: "The perfect moment for a kiss?", a: ["Sunset", "Dawn", "Every moment", "Midnight"], correct: 2 },
            { q: "What makes Yen happy?", a: ["Gifts", "Care", "Hugs", "Everything"], correct: 3 }
        ];
        
        this.init();
    }
    
    init() {
        this.loadGame();
        this.checkDailyMission();
        this.setupEventListeners();
        this.updateUI();
        this.startGameLoop();
        this.updateTimeOfDay();
        this.createStars();
        this.showWelcomeMessage();
    }
    
    setupEventListeners() {
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                this.handleAction(action);
            });
        });
        
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeModal('gameModal');
        });
        
        document.getElementById('closeShop').addEventListener('click', () => {
            this.closeModal('shopModal');
        });
        
        document.getElementById('mainBear').addEventListener('click', () => {
            this.showRandomPhrase('main');
        });
        
        document.getElementById('girlfriendBear').addEventListener('click', () => {
            this.showRandomPhrase('girlfriend');
        });
    }
    
    handleAction(action) {
        if (this.state.energy < 10) {
            this.showStatus('Troppo stanco! Riposa un po... 😴');
            return;
        }
        
        switch(action) {
            case 'feed':
                this.feed();
                break;
            case 'play':
                this.play();
                break;
            case 'date':
                this.date();
                break;
            case 'gift':
                this.openShop();
                break;
            case 'hug':
                this.hug();
                break;
        }
        
        this.state.energy = Math.max(0, this.state.energy - 5);
        this.updateUI();
        this.saveGame();
    }
    
    feed() {
        this.state.happiness = Math.min(100, this.state.happiness + 10);
        this.state.energy = Math.min(100, this.state.energy + 15);
        this.state.coins += 2;
        
        this.addExperience(5);
        
        this.showSpeech(this.getRandomPhrase('feed'));
        this.createParticles('🍯', 5);
        this.triggerAnimation('eating');
    }
    
    play() {
        this.showGameSelection();
    }
    
    date() {
        if (this.state.coins < 20) {
            this.showStatus('Servono 20 🌸 per un appuntamento!');
            return;
        }
        
        this.state.coins -= 20;
        this.state.dates++;
        this.state.love = Math.min(100, this.state.love + 20);
        this.state.happiness = Math.min(100, this.state.happiness + 25);
        
        if (this.state.dates === 1) {
            this.checkAchievement('first_date');
        }
        
        this.addExperience(30);
        
        this.showSpeech(this.getRandomPhrase('date'));
        this.createParticles('💕', 10);
        this.triggerAnimation('dating');
        
        setTimeout(() => {
            this.moveBearsCloser();
        }, 500);
    }
    
    hug() {
        this.state.hugs++;
        this.state.love = Math.min(100, this.state.love + 10);
        this.state.happiness = Math.min(100, this.state.happiness + 15);
        this.state.coins += 3;
        
        if (this.state.hugs === 1) {
            this.checkAchievement('first_hug');
        }
        
        this.addExperience(10);
        
        this.showSpeech(this.getRandomPhrase('hug'));
        this.createParticles('❤️', 8);
        this.triggerAnimation('hugging');
        
        const bears = document.querySelectorAll('.bear');
        bears.forEach(bear => {
            bear.classList.add('hugging', 'blushing');
        });
        
        setTimeout(() => {
            bears.forEach(bear => {
                bear.classList.remove('hugging');
            });
        }, 2000);
        
        setTimeout(() => {
            bears.forEach(bear => {
                bear.classList.remove('blushing');
            });
        }, 3000);
    }
    
    openShop() {
        const modal = document.getElementById('shopModal');
        const shopItems = document.getElementById('shopItems');
        
        shopItems.innerHTML = this.gifts.map((gift, index) => `
            <div class="shop-item" onclick="game.buyGift(${index})">
                <div class="shop-item-icon">${gift.icon}</div>
                <div class="shop-item-name">${gift.name}</div>
                <div class="shop-item-price">
                    <span>${gift.price}</span>
                    <span>🌸</span>
                </div>
            </div>
        `).join('');
        
        modal.classList.add('active');
    }
    
    buyGift(index) {
        const gift = this.gifts[index];
        
        if (this.state.coins < gift.price) {
            this.showStatus('Non hai abbastanza 🌸!');
            return;
        }
        
        this.state.coins -= gift.price;
        this.state.love = Math.min(100, this.state.love + gift.love);
        this.state.happiness = Math.min(100, this.state.happiness + 10);
        this.state.gifts.push(gift.name);
        
        if (gift.unlock && !this.state.unlockedFeatures.includes(gift.unlock)) {
            this.state.unlockedFeatures.push(gift.unlock);
            this.showStatus(`✨ Unlocked: ${gift.name}! ✨`);
            this.handleUnlock(gift.unlock);
        }
        
        this.addExperience(25);
        this.checkAchievement('gift_giver');
        
        if (gift.unlock === 'engagement') {
            this.checkAchievement('engagement');
        }
        
        this.closeModal('shopModal');
        this.showSpeech(`Yen loves ${gift.name}! ${gift.icon}`);
        this.createParticles(gift.icon, 15);
        
        const girlfriendBear = document.getElementById('girlfriendBear');
        girlfriendBear.classList.add('blushing');
        setTimeout(() => {
            girlfriendBear.classList.remove('blushing');
        }, 3000);
        
        this.updateUI();
        this.saveGame();
    }
    
    openMiniGame() {
        const modal = document.getElementById('gameModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="mini-game">
                <h2>Raccogli i Cuori! 💕</h2>
                <div class="game-score">Score: <span id="gameScore">0</span></div>
                <canvas id="gameCanvas" class="game-canvas" width="300" height="400"></canvas>
                <div class="game-controls">
                    <button class="game-btn" onclick="game.startMiniGame()">Inizia</button>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
    }
    
    startMiniGame() {
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const scoreElement = document.getElementById('gameScore');
        
        let score = 0;
        let gameRunning = true;
        let player = { x: 150, y: 350, width: 40, height: 40 };
        let items = [];
        let mouseX = 150;
        
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
        });
        
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            mouseX = e.touches[0].clientX - rect.left;
        });
        
        const spawnItem = () => {
            if (!gameRunning) return;
            
            items.push({
                x: Math.random() * (canvas.width - 30),
                y: -30,
                width: 30,
                height: 30,
                speed: 2 + Math.random() * 2,
                type: Math.random() > 0.2 ? 'heart' : 'bomb'
            });
            
            setTimeout(spawnItem, 1000);
        };
        
        const gameLoop = () => {
            if (!gameRunning) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            player.x = mouseX - player.width / 2;
            player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
            
            ctx.font = '35px Arial';
            ctx.fillText('🐻', player.x, player.y + player.height);
            
            for (let i = items.length - 1; i >= 0; i--) {
                const item = items[i];
                item.y += item.speed;
                
                ctx.font = '25px Arial';
                ctx.fillText(item.type === 'heart' ? '💕' : '💣', item.x, item.y + item.height);
                
                if (item.y < canvas.height &&
                    player.x < item.x + item.width &&
                    player.x + player.width > item.x &&
                    player.y < item.y + item.height &&
                    player.y + player.height > item.y) {
                    
                    if (item.type === 'heart') {
                        score += 10;
                        scoreElement.textContent = score;
                    } else {
                        score = Math.max(0, score - 20);
                        scoreElement.textContent = score;
                    }
                    
                    items.splice(i, 1);
                } else if (item.y > canvas.height) {
                    items.splice(i, 1);
                }
            }
            
            requestAnimationFrame(gameLoop);
        };
        
        spawnItem();
        gameLoop();
        
        setTimeout(() => {
            gameRunning = false;
            this.endMiniGame(score);
        }, 30000);
    }
    
    endMiniGame(score) {
        const coins = Math.floor(score / 10);
        this.state.coins += coins;
        this.state.happiness = Math.min(100, this.state.happiness + 20);
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="mini-game">
                <h2>Gioco Finito! 🎮</h2>
                <div class="game-score">Final Score: ${score}</div>
                <div class="game-score">Earned: ${coins} 🌸</div>
                <div class="game-controls">
                    <button class="game-btn" onclick="game.closeModal('gameModal')">Chiudi</button>
                    <button class="game-btn" onclick="game.startMiniGame()">Gioca Ancora</button>
                </div>
            </div>
        `;
        
        this.updateUI();
        this.saveGame();
    }
    
    moveBearsCloser() {
        const bearContainer = document.getElementById('bearContainer');
        const girlfriendContainer = document.getElementById('girlfriendContainer');
        
        bearContainer.style.transition = 'transform 1s ease';
        girlfriendContainer.style.transition = 'transform 1s ease';
        
        bearContainer.style.transform = 'translateX(10px)';
        girlfriendContainer.style.transform = 'translateX(-10px)';
        
        setTimeout(() => {
            bearContainer.style.transform = 'translateX(0)';
            girlfriendContainer.style.transform = 'translateX(0)';
        }, 2000);
    }
    
    createParticles(emoji, count) {
        const particles = document.getElementById('particles');
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'heart-particle';
                particle.textContent = emoji;
                particle.style.left = Math.random() * 80 + 10 + '%';
                particle.style.bottom = '30%';
                
                particles.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 3000);
            }, i * 100);
        }
    }
    
    showSpeech(text) {
        const bubble = document.getElementById('speechBubble');
        bubble.textContent = text;
        bubble.classList.add('active');
        
        setTimeout(() => {
            bubble.classList.remove('active');
        }, 3000);
    }
    
    showStatus(text) {
        const status = document.getElementById('statusIndicator');
        status.textContent = text;
        status.classList.add('active');
        
        setTimeout(() => {
            status.classList.remove('active');
        }, 2000);
    }
    
    showRandomPhrase(bear) {
        const phrases = bear === 'main' 
            ? [
                "Hi love! 🐻",
                "Yen makes me so happy!",
                "Every day with her is special",
                "I love you Yen! 💕"
            ]
            : [
                "Hi Emanuele! 💕",
                "You're my favorite bear!",
                "You always make me smile! 😊",
                "I love you! ❤️"
            ];
        
        this.showSpeech(phrases[Math.floor(Math.random() * phrases.length)]);
    }
    
    getRandomPhrase(action) {
        const phrases = this.phrases[action];
        return phrases[Math.floor(Math.random() * phrases.length)];
    }
    
    triggerAnimation(type) {
        const bears = document.querySelectorAll('.bear');
        bears.forEach(bear => {
            bear.style.animation = 'none';
            setTimeout(() => {
                bear.style.animation = '';
            }, 10);
        });
    }
    
    updateUI() {
        document.getElementById('loveValue').textContent = Math.round(this.state.love);
        document.getElementById('loveFill').style.width = this.state.love + '%';
        
        document.getElementById('happinessValue').textContent = Math.round(this.state.happiness);
        document.getElementById('happinessFill').style.width = this.state.happiness + '%';
        
        document.getElementById('energyValue').textContent = Math.round(this.state.energy);
        document.getElementById('energyFill').style.width = this.state.energy + '%';
        
        document.getElementById('coinCount').textContent = this.state.coins;
        document.getElementById('levelValue').textContent = this.state.level;
        
        this.checkAchievement('love_master');
        this.checkAchievement('rich_bear');
        this.checkAchievement('romantic');
        
        if (this.state.love < 30) {
            this.showStatus('Yen sembra triste... 💔');
        } else if (this.state.love > 80 && this.state.happiness > 80) {
            if (Math.random() < 0.1) {
                this.createParticles('✨', 3);
            }
        }
    }
    
    showProgress() {
        const modal = document.getElementById('gameModal');
        const modalBody = document.getElementById('modalBody');
        
        const expNeeded = this.state.level * 100;
        const expProgress = (this.state.experience / expNeeded) * 100;
        
        const achievementsUnlocked = this.state.achievements.length;
        const totalAchievements = this.achievements.length;
        
        modalBody.innerHTML = `
            <div class="progress-panel">
                <h2>🐻 Progressi di Emanuele & Yen 💕</h2>
                
                <div class="progress-section">
                    <h3>Level ${this.state.level}</h3>
                    <div class="exp-bar">
                        <div class="exp-fill" style="width: ${expProgress}%"></div>
                    </div>
                    <div class="exp-text">${this.state.experience} / ${expNeeded} EXP</div>
                </div>
                
                <div class="progress-section">
                    <h3>Statistics</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-item-icon">💕</div>
                            <div class="stat-item-label">Dates</div>
                            <div class="stat-item-value">${this.state.dates}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-item-icon">🤗</div>
                            <div class="stat-item-label">Hugs</div>
                            <div class="stat-item-value">${this.state.hugs}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-item-icon">🎁</div>
                            <div class="stat-item-label">Gifts</div>
                            <div class="stat-item-value">${this.state.gifts.length}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-item-icon">🎮</div>
                            <div class="stat-item-label">Games</div>
                            <div class="stat-item-value">${Object.values(this.state.gamesPlayed).reduce((a, b) => a + b, 0)}</div>
                        </div>
                    </div>
                </div>
                
                <div class="progress-section">
                    <h3>Achievements ${achievementsUnlocked}/${totalAchievements}</h3>
                    <div class="achievements-grid">
                        ${this.achievements.map(ach => {
                            const unlocked = this.state.achievements.includes(ach.id);
                            return `
                                <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
                                    <div class="achievement-item-icon">${unlocked ? ach.icon : '🔒'}</div>
                                    <div class="achievement-item-name">${unlocked ? ach.name : '???'}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="progress-section">
                    <h3>Record Mini-Games</h3>
                    <div class="records-list">
                        ${this.miniGames.map(game => `
                            <div class="record-item">
                                <span>${game.icon} ${game.name}</span>
                                <span class="record-score">${this.state.bestScores[game.id]}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <button class="game-btn" onclick="game.closeModal('gameModal')">Chiudi</button>
            </div>
        `;
        
        modal.classList.add('active');
    }
    
    updateTimeOfDay() {
        const hour = new Date().getHours();
        const background = document.getElementById('background');
        const stars = document.getElementById('stars');
        
        if (hour >= 6 && hour < 18) {
            this.state.timeOfDay = 'day';
            background.style.background = 'linear-gradient(180deg, #87ceeb 0%, #e0f6ff 100%)';
            stars.classList.remove('active');
        } else if (hour >= 18 && hour < 21) {
            this.state.timeOfDay = 'evening';
            background.style.background = 'linear-gradient(180deg, #ff9a76 0%, #ffd1ba 100%)';
            stars.classList.remove('active');
        } else {
            this.state.timeOfDay = 'night';
            background.style.background = 'linear-gradient(180deg, #2c3e50 0%, #34495e 100%)';
            stars.classList.add('active');
        }
    }
    
    createStars() {
        const starsContainer = document.getElementById('stars');
        
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 70 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }
    }
    
    startGameLoop() {
        setInterval(() => {
            const now = Date.now();
            const timePassed = (now - this.state.lastUpdate) / 1000;
            
            this.state.love = Math.max(0, this.state.love - timePassed * 0.05);
            this.state.happiness = Math.max(0, this.state.happiness - timePassed * 0.08);
            this.state.energy = Math.min(100, this.state.energy + timePassed * 0.1);
            
            this.state.lastUpdate = now;
            this.updateUI();
            this.saveGame();
        }, 5000);
        
        setInterval(() => {
            this.updateTimeOfDay();
        }, 60000);
    }
    
    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
    }
    
    showGameSelection() {
        const modal = document.getElementById('gameModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="game-selection">
                <h2>Scegli un Mini-Gioco! 🎮</h2>
                <div class="games-grid">
                    ${this.miniGames.map(game => `
                        <div class="game-card" onclick="game.openMiniGame('${game.id}')">
                            <div class="game-card-icon">${game.icon}</div>
                            <div class="game-card-name">${game.name}</div>
                            <div class="game-card-stats">
                                <div>Played: ${this.state.gamesPlayed[game.id]}</div>
                                <div>Record: ${this.state.bestScores[game.id]}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        modal.classList.add('active');
    }
    
    openMiniGame(gameType) {
        const modal = document.getElementById('gameModal');
        const modalBody = document.getElementById('modalBody');
        
        switch(gameType) {
            case 'hearts':
                this.startHeartsGame(modalBody);
                break;
            case 'memory':
                this.startMemoryGame(modalBody);
                break;
            case 'stars':
                this.startStarsGame(modalBody);
                break;
            case 'quiz':
                this.startQuizGame(modalBody);
                break;
            case 'match':
                this.startMatchGame(modalBody);
                break;
        }
        
        modal.classList.add('active');
    }
    
    startHeartsGame(container) {
        const game = this.miniGames.find(g => g.id === 'hearts');
        
        container.innerHTML = `
            <div class="mini-game">
                <h2>${game.name} ${game.icon}</h2>
                <div class="game-score">Score: <span id="gameScore">0</span></div>
                <div class="game-timer">Time: <span id="gameTimer">30</span>s</div>
                <canvas id="gameCanvas" class="game-canvas" width="300" height="400"></canvas>
                <div class="game-controls">
                    <button class="game-btn" onclick="game.startHeartsGameLoop()">Inizia</button>
                </div>
            </div>
        `;
    }
    
    startHeartsGameLoop() {
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const scoreElement = document.getElementById('gameScore');
        const timerElement = document.getElementById('gameTimer');
        
        let score = 0;
        let gameRunning = true;
        let timeLeft = 30;
        let player = { x: 150, y: 350, width: 40, height: 40 };
        let items = [];
        let mouseX = 150;
        
        const timer = setInterval(() => {
            if (!gameRunning) {
                clearInterval(timer);
                return;
            }
            timeLeft--;
            timerElement.textContent = timeLeft;
            if (timeLeft <= 0) {
                gameRunning = false;
                clearInterval(timer);
                this.endGame('hearts', score);
            }
        }, 1000);
        
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
        });
        
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            mouseX = e.touches[0].clientX - rect.left;
        });
        
        const spawnItem = () => {
            if (!gameRunning) return;
            
            items.push({
                x: Math.random() * (canvas.width - 30),
                y: -30,
                width: 30,
                height: 30,
                speed: 2 + Math.random() * 3,
                type: Math.random() > 0.2 ? 'heart' : 'bomb'
            });
            
            if (gameRunning) setTimeout(spawnItem, 800);
        };
        
        const gameLoop = () => {
            if (!gameRunning) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            player.x = mouseX - player.width / 2;
            player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
            
            ctx.font = '35px Arial';
            ctx.fillText('🐻', player.x, player.y + player.height);
            
            for (let i = items.length - 1; i >= 0; i--) {
                const item = items[i];
                item.y += item.speed;
                
                ctx.font = '25px Arial';
                ctx.fillText(item.type === 'heart' ? '💕' : '💣', item.x, item.y + item.height);
                
                if (item.y < canvas.height &&
                    player.x < item.x + item.width &&
                    player.x + player.width > item.x &&
                    player.y < item.y + item.height &&
                    player.y + player.height > item.y) {
                    
                    if (item.type === 'heart') {
                        score += 10;
                        scoreElement.textContent = score;
                    } else {
                        score = Math.max(0, score - 20);
                        scoreElement.textContent = score;
                    }
                    
                    items.splice(i, 1);
                } else if (item.y > canvas.height) {
                    items.splice(i, 1);
                }
            }
            
            requestAnimationFrame(gameLoop);
        };
        
        spawnItem();
        gameLoop();
    }
    
    startMemoryGame(container) {
        const game = this.miniGames.find(g => g.id === 'memory');
        const emojis = ['❤️', '💕', '🌹', '🎀', '🐻', '🌸', '✨', '💝'];
        const cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
        
        let flipped = [];
        let matched = [];
        let score = 0;
        let moves = 0;
        
        container.innerHTML = `
            <div class="mini-game">
                <h2>${game.name} ${game.icon}</h2>
                <div class="game-score">Moves: <span id="gameScore">${moves}</span> | Pairs: <span id="matchedCount">0</span>/8</div>
                <div class="memory-grid" id="memoryGrid"></div>
            </div>
        `;
        
        const grid = document.getElementById('memoryGrid');
        
        cards.forEach((emoji, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.index = index;
            card.dataset.emoji = emoji;
            card.innerHTML = '<div class="card-back">?</div><div class="card-front"></div>';
            
            card.addEventListener('click', () => {
                if (flipped.length >= 2 || flipped.includes(index) || matched.includes(emoji)) return;
                
                card.classList.add('flipped');
                card.querySelector('.card-front').textContent = emoji;
                flipped.push(index);
                
                if (flipped.length === 2) {
                    moves++;
                    document.getElementById('gameScore').textContent = moves;
                    
                    const card1 = cards[flipped[0]];
                    const card2 = cards[flipped[1]];
                    
                    if (card1 === card2) {
                        matched.push(card1);
                        score += 50;
                        document.getElementById('matchedCount').textContent = matched.length;
                        flipped = [];
                        
                        if (matched.length === 8) {
                            setTimeout(() => {
                                const finalScore = Math.max(0, 800 - moves * 10);
                                this.endGame('memory', finalScore);
                            }, 500);
                        }
                    } else {
                        setTimeout(() => {
                            document.querySelectorAll('.memory-card').forEach((c, i) => {
                                if (flipped.includes(i)) {
                                    c.classList.remove('flipped');
                                }
                            });
                            flipped = [];
                        }, 1000);
                    }
                }
            });
            
            grid.appendChild(card);
        });
    }
    
    startStarsGame(container) {
        const game = this.miniGames.find(g => g.id === 'stars');
        
        container.innerHTML = `
            <div class="mini-game">
                <h2>${game.name} ${game.icon}</h2>
                <div class="game-score">Score: <span id="gameScore">0</span></div>
                <div class="game-timer">Time: <span id="gameTimer">25</span>s</div>
                <div class="star-game" id="starGame"></div>
            </div>
        `;
        
        const starGame = document.getElementById('starGame');
        const scoreElement = document.getElementById('gameScore');
        const timerElement = document.getElementById('gameTimer');
        
        let score = 0;
        let timeLeft = 25;
        let gameRunning = true;
        
        const timer = setInterval(() => {
            if (!gameRunning) {
                clearInterval(timer);
                return;
            }
            timeLeft--;
            timerElement.textContent = timeLeft;
            if (timeLeft <= 0) {
                gameRunning = false;
                clearInterval(timer);
                this.endGame('stars', score);
            }
        }, 1000);
        
        const spawnStar = () => {
            if (!gameRunning) return;
            
            const star = document.createElement('div');
            star.className = 'falling-star';
            star.textContent = '⭐';
            star.style.left = Math.random() * 90 + '%';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            
            star.addEventListener('click', () => {
                score += 15;
                scoreElement.textContent = score;
                star.remove();
                this.createParticles('✨', 3);
            });
            
            starGame.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, 4000);
            
            if (gameRunning) {
                setTimeout(spawnStar, 600);
            }
        };
        
        spawnStar();
    }
    
    startQuizGame(container) {
        const game = this.miniGames.find(g => g.id === 'quiz');
        const questions = [...this.quizQuestions].sort(() => Math.random() - 0.5);
        
        let currentQuestion = 0;
        let score = 0;
        
        const showQuestion = () => {
            if (currentQuestion >= questions.length) {
                this.endGame('quiz', score);
                return;
            }
            
            const q = questions[currentQuestion];
            
            container.innerHTML = `
                <div class="mini-game">
                    <h2>${game.name} ${game.icon}</h2>
                    <div class="quiz-progress">Question ${currentQuestion + 1}/${questions.length}</div>
                    <div class="game-score">Score: ${score}</div>
                    <div class="quiz-question">${q.q}</div>
                    <div class="quiz-answers">
                        ${q.a.map((answer, index) => `
                            <button class="quiz-answer" onclick="game.answerQuiz(${index}, ${q.correct})">${answer}</button>
                        `).join('')}
                    </div>
                </div>
            `;
        };
        
        this.answerQuiz = (selected, correct) => {
            if (selected === correct) {
                score += 100;
                this.showStatus('Corretto! +100 🎉');
            } else {
                this.showStatus('Ops! La risposta era sbagliata 😅');
            }
            
            currentQuestion++;
            setTimeout(showQuestion, 1000);
        };
        
        showQuestion();
    }
    
    startMatchGame(container) {
        const game = this.miniGames.find(g => g.id === 'match');
        
        const pairs = [
            { emoji1: '🐻', emoji2: '🧸', name: 'Bears' },
            { emoji1: '❤️', emoji2: '💕', name: 'Hearts' },
            { emoji1: '🌹', emoji2: '💐', name: 'Flowers' },
            { emoji1: '⭐', emoji2: '✨', name: 'Stars' },
            { emoji1: '🎁', emoji2: '🎀', name: 'Gifts' }
        ];
        
        let currentPair = 0;
        let score = 0;
        let timeLeft = 35;
        let gameRunning = true;
        
        const showPair = () => {
            if (!gameRunning || currentPair >= pairs.length) {
                this.endGame('match', score);
                return;
            }
            
            const pair = pairs[currentPair];
            const allEmojis = [pair.emoji1, pair.emoji2, ...this.getRandomEmojis(4)];
            allEmojis.sort(() => Math.random() - 0.5);
            
            container.innerHTML = `
                <div class="mini-game">
                    <h2>${game.name} ${game.icon}</h2>
                    <div class="game-score">Score: <span id="gameScore">${score}</span></div>
                    <div class="game-timer">Time: <span id="gameTimer">${timeLeft}</span>s</div>
                    <div class="match-instruction">Trova la coppia di: ${pair.name}</div>
                    <div class="match-target">${pair.emoji1}</div>
                    <div class="match-options">
                        ${allEmojis.map(emoji => `
                            <button class="match-option" onclick="game.selectMatch('${emoji}', '${pair.emoji2}')">${emoji}</button>
                        `).join('')}
                    </div>
                </div>
            `;
            
            const timerElement = document.getElementById('gameTimer');
            const timer = setInterval(() => {
                if (!gameRunning) {
                    clearInterval(timer);
                    return;
                }
                timeLeft--;
                if (timerElement) timerElement.textContent = timeLeft;
                if (timeLeft <= 0) {
                    gameRunning = false;
                    clearInterval(timer);
                    this.endGame('match', score);
                }
            }, 1000);
        };
        
        this.selectMatch = (selected, correct) => {
            if (selected === correct) {
                score += 100;
                this.showStatus('Perfetto! +100 🎉');
                currentPair++;
                setTimeout(showPair, 800);
            } else {
                score = Math.max(0, score - 25);
                this.showStatus('Non è la coppia giusta! -25 😅');
            }
            document.getElementById('gameScore').textContent = score;
        };
        
        showPair();
    }
    
    getRandomEmojis(count) {
        const emojis = ['🎈', '🎪', '🎭', '🎯', '🎲', '🎸', '🎺', '🎨', '🌈', '🌙', '☀️', '🍀'];
        return emojis.sort(() => Math.random() - 0.5).slice(0, count);
    }
    
    endGame(gameType, score) {
        this.state.gamesPlayed[gameType]++;
        
        if (score > this.state.bestScores[gameType]) {
            this.state.bestScores[gameType] = score;
            this.showStatus('🏆 Nuovo Record! 🏆');
        }
        
        const coins = Math.floor(score / 10);
        this.state.coins += coins;
        this.state.happiness = Math.min(100, this.state.happiness + 20);
        
        this.addExperience(Math.floor(score / 20));
        this.checkAchievement('gamer');
        
        if (score >= 500) {
            this.checkAchievement('high_score');
        }
        
        const modalBody = document.getElementById('modalBody');
        const gameName = this.miniGames.find(g => g.id === gameType).name;
        
        modalBody.innerHTML = `
            <div class="mini-game">
                <h2>Gioco Finito! 🎮</h2>
                <div class="game-final-score">
                    <div class="final-score-title">${gameName}</div>
                    <div class="final-score-value">${score} punti</div>
                    ${score > this.state.bestScores[gameType] ? '<div class="new-record">🏆 Nuovo Record!</div>' : ''}
                    <div class="final-score-reward">Earned: ${coins} 🌸</div>
                </div>
                <div class="game-controls">
                    <button class="game-btn" onclick="game.showGameSelection()">Scegli Gioco</button>
                    <button class="game-btn" onclick="game.openMiniGame('${gameType}')">Gioca Ancora</button>
                    <button class="game-btn" onclick="game.closeModal('gameModal')">Chiudi</button>
                </div>
            </div>
        `;
        
        this.updateUI();
        this.saveGame();
    }
    
    addExperience(amount) {
        this.state.experience += amount;
        const expNeeded = this.state.level * 100;
        
        if (this.state.experience >= expNeeded) {
            this.state.level++;
            this.state.experience -= expNeeded;
            this.showStatus(`🎉 Level ${this.state.level}! 🎉`);
            this.createParticles('⭐', 20);
            
            this.state.coins += this.state.level * 10;
            
            if (this.state.level === 10) {
                this.checkAchievement('level_10');
            }
        }
    }
    
    checkAchievement(achievementId) {
        if (this.state.achievements.includes(achievementId)) return;
        
        const achievement = this.achievements.find(a => a.id === achievementId);
        if (!achievement) return;
        
        let unlock = false;
        
        switch(achievementId) {
            case 'first_hug':
                unlock = this.state.hugs >= 1;
                break;
            case 'first_date':
                unlock = this.state.dates >= 1;
                break;
            case 'love_master':
                unlock = this.state.love >= 100;
                break;
            case 'rich_bear':
                unlock = this.state.coins >= 500;
                break;
            case 'gift_giver':
                unlock = this.state.gifts.length >= 10;
                break;
            case 'gamer':
                const totalGames = Object.values(this.state.gamesPlayed).reduce((a, b) => a + b, 0);
                unlock = totalGames >= 50;
                break;
            case 'high_score':
                unlock = Object.values(this.state.bestScores).some(s => s >= 500);
                break;
            case 'romantic':
                unlock = this.state.dates >= 20;
                break;
            case 'level_10':
                unlock = this.state.level >= 10;
                break;
            case 'engagement':
                unlock = this.state.unlockedFeatures.includes('engagement');
                break;
            case 'all_outfits':
                const outfits = ['outfit_hawaii', 'outfit_royal', 'outfit_fancy', 'outfit_fairy'];
                unlock = outfits.every(o => this.state.unlockedFeatures.includes(o));
                break;
        }
        
        if (unlock) {
            this.state.achievements.push(achievementId);
            this.state.coins += achievement.reward;
            this.showAchievementUnlock(achievement);
        }
    }
    
    showAchievementUnlock(achievement) {
        const modal = document.getElementById('gameModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="achievement-unlock">
                <div class="achievement-icon">${achievement.icon}</div>
                <h2>🎉 Traguardo Sbloccato! 🎉</h2>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.desc}</div>
                <div class="achievement-reward">Reward: ${achievement.reward} 🌸</div>
                <button class="game-btn" onclick="game.closeModal('gameModal')">Fantastico!</button>
            </div>
        `;
        
        modal.classList.add('active');
        this.createParticles('🏆', 15);
    }
    
    handleUnlock(unlock) {
        if (unlock.startsWith('bg_')) {
            this.state.customization.background = unlock;
            this.applyBackground(unlock);
        } else if (unlock.startsWith('outfit_')) {
            this.showOutfitSelection();
        } else if (unlock === 'music') {
            this.state.customization.music = true;
        } else if (unlock === 'engagement') {
            this.showEngagementCutscene();
        } else if (unlock === 'surprise_box') {
            this.openSurpriseBox();
        }
    }
    
    applyBackground(bgType) {
        const background = document.getElementById('background');
        
        switch(bgType) {
            case 'bg_rainbow':
                background.style.background = 'linear-gradient(180deg, #ff9a9e 0%, #fad0c4 25%, #ffecd2 50%, #fcb69f 75%, #ff9a9e 100%)';
                break;
            case 'bg_beach':
                background.style.background = 'linear-gradient(180deg, #48c6ef 0%, #6f86d6 50%, #f4e2d8 100%)';
                break;
            case 'bg_sakura':
                background.style.background = 'linear-gradient(180deg, #fbc2eb 0%, #a6c1ee 50%, #fbc2eb 100%)';
                break;
        }
    }
    
    showEngagementCutscene() {
        this.showSpeech('Yen... vuoi sposarmi? 💍');
        
        setTimeout(() => {
            this.showSpeech('Sì! Sì! Mille volte sì! 💕💕💕');
            this.createParticles('💍', 20);
            this.createParticles('💕', 30);
        }, 3000);
        
        setTimeout(() => {
            this.moveBearsCloser();
        }, 6000);
    }
    
    openSurpriseBox() {
        const surprises = [
            { type: 'coins', amount: 200, msg: 'Hai trovato 200 🌸!' },
            { type: 'exp', amount: 500, msg: 'Hai guadagnato 500 EXP!' },
            { type: 'love', amount: 50, msg: 'Amore +50! ❤️' }
        ];
        
        const surprise = surprises[Math.floor(Math.random() * surprises.length)];
        
        switch(surprise.type) {
            case 'coins':
                this.state.coins += surprise.amount;
                break;
            case 'exp':
                this.addExperience(surprise.amount);
                break;
            case 'love':
                this.state.love = Math.min(100, this.state.love + surprise.amount);
                break;
        }
        
        this.showStatus(surprise.msg);
        this.updateUI();
    }
    
    showOutfitSelection() {
        const modal = document.getElementById('shopModal');
        const shopItems = document.getElementById('shopItems');
        
        const outfits = [
            { id: 'outfit_hawaii', name: 'Hawaii', icon: '🌺', unlocked: this.state.unlockedFeatures.includes('outfit_hawaii') },
            { id: 'outfit_royal', name: 'Royal', icon: '👑', unlocked: this.state.unlockedFeatures.includes('outfit_royal') },
            { id: 'outfit_fancy', name: 'Fancy', icon: '🎩', unlocked: this.state.unlockedFeatures.includes('outfit_fancy') },
            { id: 'outfit_fairy', name: 'Fairy', icon: '🦋', unlocked: this.state.unlockedFeatures.includes('outfit_fairy') }
        ];
        
        shopItems.innerHTML = outfits.map(outfit => `
            <div class="shop-item ${outfit.unlocked ? '' : 'locked'}" ${outfit.unlocked ? `onclick="game.applyOutfit('${outfit.id}')"` : ''}>
                <div class="shop-item-icon">${outfit.icon}</div>
                <div class="shop-item-name">${outfit.name}</div>
                ${outfit.unlocked ? '<div class="unlocked-badge">✓</div>' : '<div class="locked-badge">🔒</div>'}
            </div>
        `).join('');
        
        modal.classList.add('active');
    }
    
    applyOutfit(outfitId) {
        this.state.customization.girlfriendOutfit = outfitId;
        this.showStatus('Outfit applicato! ✨');
        this.saveGame();
    }
    
    checkDailyMission() {
        const now = Date.now();
        const dayInMs = 24 * 60 * 60 * 1000;
        
        if (now - this.state.lastDailyReset > dayInMs) {
            const missions = [
                { task: 'Play 5 mini-games', target: 5, reward: 100, type: 'games' },
                { task: 'Give 3 gifts', target: 3, reward: 80, type: 'gifts' },
                { task: 'Go on 2 dates', target: 2, reward: 120, type: 'dates' },
                { task: 'Reach 200 total points in games', target: 200, reward: 150, type: 'score' }
            ];
            
            this.state.dailyMission = missions[Math.floor(Math.random() * missions.length)];
            this.state.dailyMission.progress = 0;
            this.state.lastDailyReset = now;
            this.saveGame();
        }
    }
    
    showWelcomeMessage() {
        const hour = new Date().getHours();
        let greeting = 'Good morning';
        
        if (hour >= 12 && hour < 18) greeting = 'Good afternoon';
        else if (hour >= 18) greeting = 'Good evening';
        
        setTimeout(() => {
            this.showSpeech(`${greeting}! 🐻💕 Level ${this.state.level}`);
        }, 1000);
    }
    
    saveGame() {
        localStorage.setItem('bearLoveGame', JSON.stringify(this.state));
    }
    
    loadGame() {
        const saved = localStorage.getItem('bearLoveGame');
        if (saved) {
            const loadedState = JSON.parse(saved);
            this.state = { ...this.state, ...loadedState };
            this.state.lastUpdate = Date.now();
        }
    }
}

let game;
window.addEventListener('DOMContentLoaded', () => {
    game = new BearLoveGame();
});
