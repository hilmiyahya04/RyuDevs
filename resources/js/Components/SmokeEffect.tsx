// src/js/component/SmokeEffect.ts

interface Particle {
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
    alpha: number;
    decay: number;
    color: { r: number; g: number; b: number };
}

export class SmokeEffect {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private particles: Particle[] = [];
    private isMouseDown: boolean = false;
    private mouseX: number = 0;
    private mouseY: number = 0;
    private animationFrameId: number | null = null;

    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d')!;

        // Overlay canvas di atas seluruh area layar
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none'; // Memastikan klik tetap menembus ke tombol/elemen di bawahnya
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);

        this.resizeCanvas();
        this.initEvents();
        this.animate();
    }

    private resizeCanvas = (): void => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    };

    private createParticles(x: number, y: number, count: number = 2): void {
        for (let i = 0; i < count; i++) {
            const r = 255;
            const g = Math.random() * 80;  // Merah-oranye khas api naga
            const b = Math.random() * 30;

            this.particles.push({
                x: x + (Math.random() - 0.5) * 35,   // Titik muncul menyebar lebih lebar (renggang)
                y: y + (Math.random() - 0.5) * 35,
                size: Math.random() * 18 + 12,       // Ukuran awal sedang
                vx: (Math.random() - 0.5) * 4,       // Kecepatan menyebar ke samping
                vy: -Math.random() * 3 - 0.8,        // Melayang ke atas
                alpha: Math.random() * 0.2 + 0.15,   // Transparansi lebih tipis/halus
                decay: Math.random() * 0.015 + 0.01, // Memudar lebih cepat agar tidak menumpuk tebal
                color: { r, g, b }
            });
        }
    }

    private initEvents(): void {
        window.addEventListener('resize', this.resizeCanvas);

        window.addEventListener('mousedown', (e: MouseEvent) => {
            this.isMouseDown = true;
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.createParticles(this.mouseX, this.mouseY, 6); // Semburan awal yang ringan saat ditekan
        });

        window.addEventListener('mouseup', () => {
            this.isMouseDown = false;
        });

        window.addEventListener('mousemove', (e: MouseEvent) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            if (this.isMouseDown) {
                this.createParticles(this.mouseX, this.mouseY, 1); // Memunculkan partikel tipis saat kursor digeser
            }
        });
    }

    private animate = (): void => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            p.x += p.vx;
            p.y += p.vy;
            p.size += 0.4;        // Ukuran asap mengembang secara halus
            p.alpha -= p.decay;   // Memudar seiring waktu

            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
                continue;
            }

            // Membentuk gradien radial berpendar transparan
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
            gradient.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`);
            gradient.addColorStop(0.4, `rgba(${p.color.r * 0.7}, ${p.color.g * 0.5}, 0, ${p.alpha * 0.4})`);
            gradient.addColorStop(1, `rgba(${p.color.r}, 0, 0, 0)`);

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        }

        this.animationFrameId = requestAnimationFrame(this.animate);
    };

    public destroy(): void {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        window.removeEventListener('resize', this.resizeCanvas);
        this.canvas.remove();
    }
}