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
        id: 6,
        topic: "Web3 Partnership Announcement",
        detail: "Will Gensyn announce a partnership with a web3 company before January 2026?",
        volume: "1.5M",
        chance: 70,
        endDate: "Jan 1, 2026",
        category: "Growth"
    },
    // New Community/Social Markets
    {
        id: 7,
        topic: "Mod Blazy 1k Followers",
        detail: "Will Gensyn Community Mod blazy reach 1k followers before December 15?",
        volume: "110K",
        chance: 85,
        endDate: "Dec 15, 2025",
        category: "Community"
    },
    {
        id: 8,
        topic: "Mod Saumari Kai 2.5k Followers",
        detail: "Will Gensyn Community Mod Saumari Kai reach 2.5k followers before December 15?",
        volume: "230K",
        chance: 62,
        endDate: "Dec 15, 2025",
        category: "Community"
    },
    {
        id: 9,
        topic: "Mod Gasoline 2k Followers",
        detail: "Will Gensyn Community Mod Gasoline Reach 2k followers before December 15?",
        volume: "180K",
        chance: 78,
        endDate: "Dec 15, 2025",
        category: "Community"
    },
    {
        id: 10,
        topic: "Community Reach 30k Followers",
        detail: "Will Gensyn Community Account Reach 30k followers before December 15?",
        volume: "550K",
        chance: 45,
        endDate: "Dec 15, 2025",
        category: "Social"
    },
    // New Team Member Market
    {
        id: 11,
        topic: "Austin 95k Followers",
        detail: "Will Gensyn team Member Austin Reach 95k followers before December 15?",
        volume: "380K",
        chance: 35,
        endDate: "Dec 15, 2025",
        category: "Social"
    }
];

let state = {
    username: "",
    selectedBetId: null,
    selectedSide: null,
    amount: 0
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
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    const sidebar = document.getElementById('sidebar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileSidebarToggle = document.getElementById('mobile-sidebar-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    let isSidebarOpen = false;

    // Function to toggle sidebar
    function toggleSidebar() {
        isSidebarOpen = !isSidebarOpen;
        if (isSidebarOpen) {
            sidebar.classList.remove('-translate-x-full');
            mobileMenuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            // Change icon to 'X' when open
            const menuIcons = document.querySelectorAll('#mobile-menu-button i, #mobile-sidebar-toggle i');
            menuIcons.forEach(icon => {
                icon.setAttribute('data-lucide', 'x');
                lucide.createIcons();
            });
        } else {
            sidebar.classList.add('-translate-x-full');
            mobileMenuOverlay.classList.add('hidden');
            document.body.style.overflow = '';
            // Change icon back to 'menu' when closed
            const menuIcons = document.querySelectorAll('#mobile-menu-button i, #mobile-sidebar-toggle i');
            menuIcons.forEach(icon => {
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        }
    }

    // Add event listeners if elements exist
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    if (mobileSidebarToggle) {
        mobileSidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', toggleSidebar);
    }

    // Close sidebar when clicking a nav link on mobile
    const navLinks = document.querySelectorAll('#sidebar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                toggleSidebar();
            }
        });
    });

    // Handle window resize
    function handleResize() {
        if (window.innerWidth >= 768) {
            // Desktop view
            sidebar.classList.remove('-translate-x-full');
            if (mobileMenuOverlay) mobileMenuOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        } else if (!isSidebarOpen) {
            // Mobile view and sidebar is closed
            sidebar.classList.add('-translate-x-full');
        }
    }

    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize mobile menu button visibility
    function updateMobileMenuButton() {
        if (mobileMenuButton) {
            mobileMenuButton.style.display = window.innerWidth < 768 ? 'flex' : 'none';
        }
    }

    updateMobileMenuButton();
    window.addEventListener('resize', updateMobileMenuButton);
});

// --- Core Logic ---
// Initialize mobile menu button visibility
function updateMobileMenuButton() {
    if (mobileMenuButton) {
        mobileMenuButton.style.display = window.innerWidth < 768 ? 'flex' : 'none';
    }
}

// Call on page load
updateMobileMenuButton();

// Update on window resize
window.addEventListener('resize', updateMobileMenuButton);

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
    
    // Transition with animation
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
        <div class="group bg-neutral-surface border border-neutral-border hover:border-brand/50 rounded-lg p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-elevation-lg cursor-pointer flex flex-col justify-between market-card-animate" onclick="openBetModal(${bet.id})" style="animation-delay: ${index * 0.1}s">
            <!-- Card Header -->
            <div class="flex justify-between items-start mb-3">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-bgElevated text-neutral-textSec border border-neutral-border">
                    ${bet.category.toUpperCase()}
                </span>
                <div class="flex items-center gap-1.5 text-neutral-textTer">
                    <i data-lucide="bar-chart-2" class="w-3.5 h-3.5"></i>
                    <span class="text-xs font-mono">$${bet.volume}</span>
                </div>
            </div>
            
            <!-- Title -->
            <h3 class="text-base font-semibold text-neutral-text mb-4 leading-snug group-hover:text-brand-light transition-colors line-clamp-2 min-h-[48px]">
                ${bet.detail}
            </h3>
            
            <!-- Odds Visualization -->
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
                
                <!-- Probability Bar -->
                <div class="h-1.5 w-full bg-neutral-bgElevated rounded-full overflow-hidden flex">
                    <div class="bg-semantic-success h-full" style="width: ${bet.chance}%"></div>
                    <div class="bg-semantic-error h-full" style="width: ${100 - bet.chance}%"></div>
                </div>
            </div>

            <!-- Footer -->
            <div class="mt-5 pt-4 border-t border-neutral-border flex justify-between items-center">
                <span class="text-xs font-mono text-neutral-textMuted">Ends ${bet.endDate}</span>
                <button class="bg-brand/10 hover:bg-brand/20 text-brand font-medium text-xs px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all duration-200 hover:gap-2 group">
                    <span>Trade Now</span>
                    <i data-lucide="arrow-up-right" class="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                </button>
            </div>
        </div>
    `}).join('');

    // Add community suggestion link
    html += `
        <div class="col-span-full bg-neutral-bgElevated/50 border border-neutral-border/30 hover:border-brand/30 rounded-lg p-6 text-center transition-all duration-200">
            <i data-lucide="lightbulb" class="w-8 h-8 text-brand mx-auto mb-3"></i>
            <h3 class="text-base font-medium text-neutral-text mb-2">Have a market suggestion?</h3>
            <p class="text-sm text-neutral-textMuted mb-4">We'd love to hear your ideas for new prediction markets!</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSePVmcGA94rzvtloph8xP6KoAZgpmiv5zYV3bz2J3FupRen7w/viewform?usp=publish-editor" 
               target="_blank" 
               rel="noopener noreferrer"
               class="inline-flex items-center gap-2 text-brand hover:text-brand-light text-sm font-medium group">
                Suggest a market
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </a>
        </div>`;

    grid.innerHTML = html;
    lucide.createIcons();
    
    // Add entrance animations to cards
    setTimeout(() => {
        const cards = document.querySelectorAll('.market-card-animate');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 100);
}

function openBetModal(id) {
    state.selectedBetId = id;
    state.selectedSide = null;
    const bet = bets.find(b => b.id === id);
    
    document.getElementById('modal-topic').innerText = bet.detail;
    document.getElementById('bet-amount').value = '';
    
    // Reset UI
    resetBtnStyles();

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
    
    const baseClass = "flex-1 py-3 rounded-md text-sm font-bold transition-all flex items-center justify-center gap-2";
    
    if (side === 'yes') {
        btnYes.className = baseClass + " bg-semantic-successDim border border-semantic-success text-semantic-success";
        btnNo.className = baseClass + " border border-neutral-border bg-neutral-bg text-neutral-textMuted hover:text-white";
    } else {
        btnNo.className = baseClass + " bg-semantic-errorDim border border-semantic-error text-semantic-error";
        btnYes.className = baseClass + " border border-neutral-border bg-neutral-bg text-neutral-textMuted hover:text-white";
    }
}

function resetBtnStyles() {
    const baseClass = "flex-1 py-3 rounded-md text-sm font-bold transition-all flex items-center justify-center gap-2 border border-neutral-border bg-neutral-bg text-neutral-textMuted hover:text-white";
    document.getElementById('btn-yes').className = baseClass;
    document.getElementById('btn-no').className = baseClass;
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
    const amount = document.getElementById('bet-amount').value;
    if (!state.selectedSide || !amount) {
        // Shake animation
        const input = document.getElementById('bet-amount');
        input.classList.add('animate-shake');
        setTimeout(() => input.classList.remove('animate-shake'), 500);
        return;
    }
    state.amount = amount;
    
    closeModal();
    setTimeout(() => {
        generateCard();
        const cardView = document.getElementById('view-card');
        cardView.classList.remove('hidden');
        cardView.classList.add('animate-fade-in');
    }, 250);
}

// --- Canvas Generation (Converge Style) ---
function generateCard() {
    const canvas = document.getElementById('bet-card-canvas');
    const ctx = canvas.getContext('2d');
    const bet = bets.find(b => b.id === state.selectedBetId);

    // Setup
    const width = canvas.width;
    const height = canvas.height;
    
    // 1. Background (Professional Dark)
    ctx.fillStyle = '#0F1117';
    ctx.fillRect(0, 0, width, height);

    // 2. Technical Grid Background
    ctx.strokeStyle = '#1A1D29';
    ctx.lineWidth = 1;
    const gridSize = 30;
    for(let x=0; x<width; x+=gridSize) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,height); ctx.stroke(); }
    for(let y=0; y<height; y+=gridSize) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(width,y); ctx.stroke(); }

    // 3. Card Container Style
    const margin = 20;
    const cardW = width - (margin*2);
    const cardH = height - (margin*2);
    
    // Outer Border with Brand Accent Top
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#1A1D29'; // bgElevated
    ctx.fillRect(margin, margin, cardW, cardH);
    ctx.shadowBlur = 0;

    // Brand Accent Line
    ctx.fillStyle = '#9e4e37';
    ctx.fillRect(margin, margin, cardW, 6);

    // 4. Content
    // Header
    ctx.font = 'bold 24px Inter, sans-serif';
    ctx.fillStyle = '#F9FAFB';
    ctx.textAlign = 'left';
    ctx.fillText("TRADE RECEIPT", margin + 25, margin + 50);

    ctx.font = '500 13px JetBrains Mono, monospace';
    ctx.fillStyle = '#6B7280'; // muted
    ctx.fillText("GENSYN NETWORK // PREDICTION LAYER", margin + 25, margin + 70);

    // Divider
    ctx.strokeStyle = '#3A3D4A';
    ctx.beginPath(); ctx.moveTo(margin, margin + 90); ctx.lineTo(width-margin, margin + 90); ctx.stroke();

    // Trader Info
    const sectionY = margin + 130;
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = '#9CA3AF'; // textTer
    ctx.fillText("TRADER", margin + 25, sectionY);
    
    ctx.font = '600 16px JetBrains Mono, monospace';
    ctx.fillStyle = '#F9FAFB';
    ctx.fillText(state.username.toUpperCase(), margin + 25, sectionY + 25);

    // Date
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = '#9CA3AF';
    ctx.textAlign = 'right';
    ctx.fillText("DATE", width - margin - 25, sectionY);
    
    ctx.font = '500 14px JetBrains Mono, monospace';
    ctx.fillStyle = '#D1D5DB';
    ctx.fillText(new Date().toLocaleDateString(), width - margin - 25, sectionY + 25);

    // Market Details
    const marketY = margin + 200;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#23262F'; // Surface
    ctx.fillRect(margin + 20, marketY, cardW - 40, 100);
    ctx.strokeStyle = '#3A3D4A';
    ctx.strokeRect(margin + 20, marketY, cardW - 40, 100);

    // Topic Text Wrapping
    ctx.font = '500 16px Inter, sans-serif';
    ctx.fillStyle = '#F9FAFB';
    const words = bet.detail.split(' ');
    let line = '';
    let ly = marketY + 35;
    for(let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        if (ctx.measureText(testLine).width > cardW - 80 && n > 0) {
            ctx.fillText(line, margin + 40, ly);
            line = words[n] + ' ';
            ly += 24;
        } else { line = testLine; }
    }
    ctx.fillText(line, margin + 40, ly);

    // Position & Amount
    const statsY = margin + 350;
    const sideColor = state.selectedSide === 'yes' ? '#10B981' : '#EF4444';
    const sideText = state.selectedSide === 'yes' ? 'LONG (YES)' : 'SHORT (NO)';
    
    // Side Badge
    ctx.fillStyle = sideColor + '20'; // dim
    ctx.fillRect(margin + 25, statsY, 120, 40);
    ctx.strokeStyle = sideColor;
    ctx.strokeRect(margin + 25, statsY, 120, 40);
    
    ctx.font = 'bold 16px JetBrains Mono, monospace';
    ctx.fillStyle = sideColor;
    ctx.textAlign = 'center';
    ctx.fillText(sideText, margin + 85, statsY + 26);

    // Amount
    ctx.textAlign = 'right';
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = '#9CA3AF';
    ctx.fillText("POSITION SIZE", width - margin - 25, statsY + 12);
    
    ctx.font = 'bold 24px JetBrains Mono, monospace';
    ctx.fillStyle = '#F9FAFB';
    ctx.fillText(`${state.amount} ETH`, width - margin - 25, statsY + 38);

    // Footer / Verification
    const footerY = height - margin - 60;
    ctx.strokeStyle = '#3A3D4A';
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(margin, footerY); ctx.lineTo(width-margin, footerY); ctx.stroke();
    ctx.setLineDash([]);

    ctx.textAlign = 'center';
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.fillStyle = '#4B4E5C';
    const txHash = "0x" + Math.random().toString(16).substr(2, 40);
    ctx.fillText(`TX: ${txHash}`, width/2, footerY + 30);
    
    // Logo watermark small
    ctx.fillStyle = '#9e4e37';
    ctx.globalAlpha = 0.5;
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText("GENSYN // CONVERGE", width/2, footerY + 45);
    ctx.globalAlpha = 1.0;
}

function downloadCard() {
    const canvas = document.getElementById('bet-card-canvas');
    const link = document.createElement('a');
    link.download = `Gensyn_Trade_${state.username}.png`;
    link.href = canvas.toDataURL();
    link.click();
}

function returnToMarket() {
    document.getElementById('view-card').classList.add('hidden');
}

