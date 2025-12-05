// --- Data ---
const bets = [
    // Existing Markets (Infrastructure/Product Focus)
    {
        id: 1,
        topic: "Gensyn Mainnet Launch",
        detail: "Will Gensyn launch Mainnet before January 2026?",
        volume: "1.2M",
        chance: 65,
        endDate: "Jan 1, 2026",
        category: "Product"
    },
    {
        id: 2,
        topic: "Research Publication",
        detail: "Will Gensyn publish a new research article before December 15, 2025?",
        volume: "320K",
        chance: 75,
        endDate: "Dec 15, 2025",
        category: "Research"
    },
    {
        id: 3,
        topic: "CodeAssist Milestone",
        detail: "Will Gensyn CodeAssist cross 70K models trained before January 2026?",
        volume: "1.8M",
        chance: 60,
        endDate: "Jan 1, 2026",
        category: "AI"
    },
    {
        id: 4,
        topic: "BlockAssist Achievement",
        detail: "Will Gensyn BlockAssist cross 1.5 million models trained?",
        volume: "2.5M",
        chance: 45,
        endDate: "Jan 1, 2026",
        category: "AI"
    },
    {
        id: 5,
        topic: "Community Growth",
        detail: "Will Gensyn Hub cross over 15K followers before February 2026?",
        volume: "950K",
        chance: 70,
        endDate: "Feb 1, 2026",
        category: "Social"
    },
    {
        id: 6,
        topic: "Node Expansion",
        detail: "Will Gensyn Active nodes exceed 40k before January 2026?",
        volume: "2.8M",
        chance: 42,
        endDate: "Jan 1, 2026",
        category: "Infrastr."
    },
    {
        id: 7,
        topic: "Testnet User Base",
        detail: "Will Gensyn Users on the testnet cross over 200k users before 2026?",
        volume: "890K",
        chance: 55,
        endDate: "Jan 1, 2026",
        category: "Growth"
    },
    {
        id: 8,
        topic: "Transaction Volume",
        detail: "Will Gensyn transactions exceed over 100M before January 2026?",
        volume: "3.1M",
        chance: 30,
        endDate: "Jan 1, 2026",
        category: "Network"
    },
    // New Partnership Market
    {
        id: 9,
        topic: "Web3 Partnership Announcement",
        detail: "Will Gensyn announce a partnership with a web3 company before January 2026?",
        volume: "1.5M",
        chance: 70,
        endDate: "Jan 1, 2026",
        category: "Growth"
    },
    // New Community/Social Markets
    {
        id: 10,
        topic: "Mod Blazy 1k Followers",
        detail: "Will Gensyn Community Mod blazy reach 1k followers before December 15?",
        volume: "110K",
        chance: 85,
        endDate: "Dec 15, 2025",
        category: "Community"
    },
    {
        id: 11,
        topic: "Mod Saumari Kai 2.5k Followers",
        detail: "Will Gensyn Community Mod Saumari Kai reach 2.5k followers before December 15?",
        volume: "230K",
        chance: 62,
        endDate: "Dec 15, 2025",
        category: "Community"
    },
    {
        id: 12,
        topic: "Mod Gasoline 2k Followers",
        detail: "Will Gensyn Community Mod Gasoline Reach 2k followers before December 15?",
        volume: "180K",
        chance: 78,
        endDate: "Dec 15, 2025",
        category: "Community"
    },
    {
        id: 13,
        topic: "Community Mod Reach 30k Followers",
        detail: "Will Gensyn Community Mod JoVar reach 30k followers before December 15?",
        volume: "550K",
        chance: 45,
        endDate: "Dec 15, 2025",
        category: "Social"
    },
    // New Team Member Market
    {
        id: 14,
        topic: "Austin 95k Followers",
        detail: "Will Gensyn team Member Austin Reach 95k followers before December 15?",
        volume: "380K",
        chance: 35,
        endDate: "Dec 15, 2025",
        category: "Social"
    },
    // New AI Training Milestones
    {
        id: 15,
        topic: "2M Models Trained",
        detail: "Will Gensyn train over 2 Million Models before January 2, 2026?",
        volume: "1.2M",
        chance: 55,
        endDate: "Jan 2, 2026",
        category: "AI"
    },
    {
        id: 16,
        topic: "RLSwarm Node Growth",
        detail: "Will Gensyn RLSwarm exceed 60k Nodes before February 1, 2026?",
        volume: "1.8M",
        chance: 65,
        endDate: "Feb 1, 2026",
        category: "Infrastr."
    },
    {
        id: 17,
        topic: "RLSwarm Model Training",
        detail: "Will Gensyn RLSwarm exceed 300k Models trained before February 1, 2026?",
        volume: "2.1M",
        chance: 48,
        endDate: "Feb 1, 2026",
        category: "AI"
    },
    // New Event Bet
    {
        id: 18,
        topic: "Lagos Meetup Event",
        detail: "Will Gensyn Host a Meetup Event in Lagos before January 2026?",
        volume: "680K",
        chance: 40,
        endDate: "Jan 1, 2026",
        category: "Community"
    }
];

let state = {
    username: "",
    selectedBetId: null,
    selectedSide: null
};

// --- Init ---
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Re-initialize icons after any dynamic content is added
    const observer = new MutationObserver(() => {
        lucide.createIcons();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// --- Mobile Sidebar ---
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileSidebarToggle = document.getElementById('mobile-sidebar-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    let isSidebarOpen = false;

    function toggleSidebar() {
        isSidebarOpen = !isSidebarOpen;
        if (isSidebarOpen) {
            sidebar.classList.remove('-translate-x-full');
            mobileMenuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            const menuIcons = document.querySelectorAll('#mobile-menu-button i, #mobile-sidebar-toggle i');
            menuIcons.forEach(icon => {
                icon.setAttribute('data-lucide', 'x');
                lucide.createIcons();
            });
        } else {
            sidebar.classList.add('-translate-x-full');
            mobileMenuOverlay.classList.add('hidden');
            document.body.style.overflow = '';
            const menuIcons = document.querySelectorAll('#mobile-menu-button i, #mobile-sidebar-toggle i');
            menuIcons.forEach(icon => {
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        }
    }

    if (mobileMenuButton) mobileMenuButton.addEventListener('click', (e) => { e.stopPropagation(); toggleSidebar(); });
    if (mobileSidebarToggle) mobileSidebarToggle.addEventListener('click', (e) => { e.stopPropagation(); toggleSidebar(); });
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', toggleSidebar);

    const navLinks = document.querySelectorAll('#sidebar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => { if (window.innerWidth < 768) toggleSidebar(); });
    });

    function handleResize() {
        if (window.innerWidth >= 768) {
            sidebar.classList.remove('-translate-x-full');
            if (mobileMenuOverlay) mobileMenuOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        } else if (!isSidebarOpen) {
            sidebar.classList.add('-translate-x-full');
        }
        if (mobileMenuButton) mobileMenuButton.style.display = window.innerWidth < 768 ? 'flex' : 'none';
    }

    handleResize();
    window.addEventListener('resize', handleResize);
});

// --- Core Logic ---
function enterMarket() {
    const input = document.getElementById('username-input');
    if (!input.value.trim()) {
        input.classList.add('walkwin-input-error');
        input.style.borderColor = '#EF4444';
        setTimeout(() => {
            input.classList.remove('walkwin-input-error');
            input.style.borderColor = '';
        }, 500);
        return;
    }
    state.username = input.value.trim();
    document.getElementById('sidebar-username').innerText = state.username;
    document.getElementById('sidebar-avatar').innerText = state.username.substring(0, 2).toUpperCase();
    document.getElementById('headerUsername').innerText = state.username;
    document.getElementById('username').innerText = state.username;
    
    // Transition
    const intro = document.getElementById('view-intro');
    intro.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    intro.style.opacity = '0';
    intro.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        intro.classList.add('hidden');
        const marketView = document.getElementById('view-market');
        marketView.classList.remove('hidden');
        marketView.classList.add('animate-scale-in');
        renderMarket();
    }, 400);
}

function renderMarket() {
    const grid = document.getElementById('market-grid');
    let html = bets.map((bet, index) => {
        const yesColor = 'text-semantic-success';
        const noColor = 'text-semantic-error';
        
        return `
        <div class="group bg-neutral-surface border border-neutral-border hover:border-brand/50 rounded-lg p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-elevation-lg cursor-pointer flex flex-col justify-between market-card-animate" onclick="openBetModal(${bet.id})" style="animation-delay: ${index * 0.05}s">
            <div class="flex justify-between items-start mb-3">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-bgElevated text-neutral-textSec border border-neutral-border">
                    ${bet.category.toUpperCase()}
                </span>
                <div class="flex items-center gap-1.5 text-neutral-textTer">
                    <i data-lucide="bar-chart-2" class="w-3.5 h-3.5"></i>
                    <span class="text-xs font-mono">$${bet.volume}</span>
                </div>
            </div>
            
            <h3 class="text-base font-semibold text-neutral-text mb-4 leading-snug group-hover:text-brand-light transition-colors line-clamp-2 min-h-[48px]">
                ${bet.detail}
            </h3>
            
            <div class="space-y-3">
                <div class="flex justify-between items-baseline font-mono">
                    <div class="flex flex-col">
                        <span class="text-xs text-neutral-textMuted uppercase">Yes</span>
                        <span class="text-xl font-bold ${yesColor}">${bet.chance}%</span>
                    </div>
                    <div class="flex flex-col items-end">
                        <span class="text-xs text-neutral-textMuted uppercase">No</span>
                        <span class="text-xl font-bold ${noColor}">${100 - bet.chance}%</span>
                    </div>
                </div>
                
                <div class="h-1.5 w-full bg-neutral-bgElevated rounded-full overflow-hidden flex">
                    <div class="bg-semantic-success h-full" style="width: ${bet.chance}%"></div>
                    <div class="bg-semantic-error h-full" style="width: ${100 - bet.chance}%"></div>
                </div>
            </div>

            <div class="mt-5 pt-4 border-t border-neutral-border flex justify-between items-center">
                <span class="text-xs font-mono text-neutral-textMuted">Ends ${bet.endDate}</span>
                <button class="bg-brand/10 hover:bg-brand/20 text-brand font-medium text-xs px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all duration-200 hover:gap-2 group">
                    <span>Speculate Now</span>
                    <i data-lucide="arrow-up-right" class="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                </button>
            </div>
        </div>
    `}).join('');

    grid.innerHTML = html;
    lucide.createIcons();
    
    setTimeout(() => {
        const cards = document.querySelectorAll('.market-card-animate');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.05}s`;
        });
    }, 100);
}

function openBetModal(id) {
    state.selectedBetId = id;
    state.selectedSide = null;
    const bet = bets.find(b => b.id === id);
    
    document.getElementById('modal-topic').innerText = bet.detail;
    
    // Reset selection styles
    document.getElementById('btn-yes').className = "hyper-btn group relative h-32 flex flex-col items-center justify-center border-2 border-hyper-border hover:border-hyper-green bg-hyper-bgDark transition-all duration-200";
    document.getElementById('btn-no').className = "hyper-btn group relative h-32 flex flex-col items-center justify-center border-2 border-hyper-border hover:border-hyper-orange bg-hyper-bgDark transition-all duration-200";

    const modal = document.getElementById('bet-modal');
    const content = document.getElementById('bet-modal-content');
    
    modal.classList.remove('hidden');
    modal.classList.add('animate-fade-in');
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100', 'animate-bounce-in');
    }, 10);
}

function selectSide(side) {
    state.selectedSide = side;
    
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    
    // Base classes (Protocol style)
    const baseClassYes = "hyper-btn group relative h-32 flex flex-col items-center justify-center border-2 border-hyper-border hover:border-hyper-green bg-hyper-bgDark transition-all duration-200";
    const baseClassNo = "hyper-btn group relative h-32 flex flex-col items-center justify-center border-2 border-hyper-border hover:border-hyper-orange bg-hyper-bgDark transition-all duration-200";

    if (side === 'yes') {
        btnYes.className = baseClassYes + " hyper-btn-selected-yes";
        btnNo.className = baseClassNo;
    } else {
        btnYes.className = baseClassYes;
        btnNo.className = baseClassNo + " hyper-btn-selected-no";
    }
}

function closeModal() {
    const modal = document.getElementById('bet-modal');
    const content = document.getElementById('bet-modal-content');
    
    content.classList.remove('scale-100', 'opacity-100', 'animate-bounce-in');
    content.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('animate-fade-in');
    }, 200);
}

function confirmBet() {
    if (!state.selectedSide) {
        // Shake animation on grid if no side selected
        const grid = document.querySelector('.grid.grid-cols-2');
        grid.classList.add('animate-shake');
        setTimeout(() => grid.classList.remove('animate-shake'), 500);
        return;
    }
    
    closeModal();
    setTimeout(() => {
        generateCard();
        const cardView = document.getElementById('view-card');
        cardView.classList.remove('hidden');
        cardView.classList.add('animate-fade-in');
    }, 250);
}

// --- Canvas Generation (Gensyn Protocol Style Receipt) ---
function generateCard() {
    const canvas = document.getElementById('bet-card-canvas');
    const ctx = canvas.getContext('2d');
    const bet = bets.find(b => b.id === state.selectedBetId);

    // Setup
    const width = canvas.width;
    const height = canvas.height;
    
    // 1. Background (Navy)
    ctx.fillStyle = '#1A1F3A';
    ctx.fillRect(0, 0, width, height);

    // 2. Technical Grid Background
    ctx.strokeStyle = '#2D3748';
    ctx.lineWidth = 1;
    const gridSize = 25;
    for(let x=0; x<width; x+=gridSize) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,height); ctx.stroke(); }
    for(let y=0; y<height; y+=gridSize) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(width,y); ctx.stroke(); }

    // 3. Card Container Style (Sharp corners)
    const margin = 20;
    const cardW = width - (margin*2);
    const cardH = height - (margin*2);
    
    // Outer Border
    ctx.strokeStyle = '#FF9500';
    ctx.lineWidth = 2;
    ctx.strokeRect(margin, margin, cardW, cardH);
    
    // Inner Glow
    ctx.shadowColor = "rgba(0, 255, 136, 0.2)";
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'rgba(15, 20, 36, 0.8)'; 
    ctx.fillRect(margin + 2, margin + 2, cardW - 4, cardH - 4);
    ctx.shadowBlur = 0;

    // 4. Content
    // Header
    ctx.font = 'bold 24px JetBrains Mono, monospace';
    ctx.fillStyle = '#00FF88';
    ctx.textAlign = 'left';
    ctx.fillText("SIGNAL TRANSMITTED", margin + 25, margin + 50);

    ctx.font = '500 12px JetBrains Mono, monospace';
    ctx.fillStyle = '#FF9500'; 
    ctx.fillText("GENSYN PROTOCOL // V1.0", margin + 25, margin + 70);

    // Divider
    ctx.strokeStyle = '#00FF88';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(margin, margin + 90); ctx.lineTo(width-margin, margin + 90); ctx.stroke();

    // Trader Info
    const sectionY = margin + 130;
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.fillStyle = '#6B7280'; // muted
    ctx.fillText("AGENT IDENTITY", margin + 25, sectionY);
    
    ctx.font = 'bold 16px JetBrains Mono, monospace';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(state.username.toUpperCase(), margin + 25, sectionY + 25);

    // Date
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.fillStyle = '#6B7280';
    ctx.textAlign = 'right';
    ctx.fillText("TIMESTAMP", width - margin - 25, sectionY);
    
    ctx.font = '500 14px JetBrains Mono, monospace';
    ctx.fillStyle = '#D1D5DB';
    ctx.fillText(new Date().toLocaleDateString(), width - margin - 25, sectionY + 25);

    // Market Details - Dynamic Height Calculation
    const marketY = margin + 200;
    
    // Pre-calculate lines to determine box height
    ctx.font = 'bold 16px JetBrains Mono, monospace'; // Set font first
    const words = bet.detail.split(' ');
    const maxLineWidth = cardW - 80; // Margin+40 each side
    let line = '';
    let lines = [];

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxLineWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    // Calculate Box Height
    const lineHeight = 24;
    const padding = 20;
    const contentHeight = (lines.length * lineHeight);
    const boxHeight = Math.max(100, contentHeight + (padding * 2)); // Minimum 100px

    // Draw Box
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(0, 255, 136, 0.05)'; 
    ctx.fillRect(margin + 20, marketY, cardW - 40, boxHeight);
    ctx.strokeStyle = '#00FF88';
    ctx.strokeRect(margin + 20, marketY, cardW - 40, boxHeight);

    // Draw Text lines
    ctx.fillStyle = '#FFFFFF';
    let ly = marketY + 35; // Start offset
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], margin + 40, ly + (i * lineHeight));
    }

    // Position & Verification (Dynamic Y based on Box)
    const statsY = marketY + boxHeight + 30; // 30px gap below box

    const sideColor = state.selectedSide === 'yes' ? '#00FF88' : '#FF9500';
    const sideText = state.selectedSide === 'yes' ? 'LONG SIGNAL (YES)' : 'SHORT SIGNAL (NO)';
    
    // Side Badge
    ctx.fillStyle = state.selectedSide === 'yes' ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 149, 0, 0.1)';
    ctx.fillRect(margin + 25, statsY, 200, 40);
    ctx.strokeStyle = sideColor;
    ctx.strokeRect(margin + 25, statsY, 200, 40);
    
    ctx.font = 'bold 16px JetBrains Mono, monospace';
    ctx.fillStyle = sideColor;
    ctx.textAlign = 'left';
    ctx.fillText(sideText, margin + 40, statsY + 26);

    // Verification Status
    ctx.textAlign = 'right';
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.fillStyle = '#6B7280';
    ctx.fillText("STATUS", width - margin - 25, statsY + 12);
    
    ctx.font = 'bold 14px JetBrains Mono, monospace';
    ctx.fillStyle = '#00FF88';
    ctx.fillText("ONCHAIN", width - margin - 25, statsY + 30);

    // Footer / Encryption Visuals
    const footerY = height - margin - 60;
    ctx.strokeStyle = '#2D3748';
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(margin, footerY); ctx.lineTo(width-margin, footerY); ctx.stroke();
    ctx.setLineDash([]);

    ctx.textAlign = 'center';
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.fillStyle = '#4B4E5C';
    const txHash = "0x" + Math.random().toString(16).substr(2, 40);
    ctx.fillText(`HASH: ${txHash}`, width/2, footerY + 30);
    
    // Logo watermark small
    ctx.fillStyle = '#FF9500';
    ctx.globalAlpha = 0.5;
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText("GENSYN // PROTOCOL", width/2, footerY + 45);
    ctx.globalAlpha = 1.0;
}

function downloadCard() {
    const canvas = document.getElementById('bet-card-canvas');
    const link = document.createElement('a');
    link.download = `Gensyn_Signal_${state.username}.png`;
    link.href = canvas.toDataURL();
    link.click();
}

function returnToMarket() {
    document.getElementById('view-card').classList.add('hidden');
}
