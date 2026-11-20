
        // 24h Countdown Timer logic
        let secondsLeft = 14 * 3600 + 28 * 60 + 45;
        const timerEl = document.getElementById('expiry-timer');
        const timerBar = document.getElementById('timer-bar');

        function formatTime(s) {
            const hrs = String(Math.floor(s / 3600)).padStart(2, '0');
            const mins = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
            const secs = String(s % 60).padStart(2, '0');
            return `${hrs}:${mins}:${secs}`;
        }

        setInterval(() => {
            if (secondsLeft > 0) {
                secondsLeft--;
                timerEl.textContent = formatTime(secondsLeft);
                const pct = (secondsLeft / (24 * 3600)) * 100;
                timerBar.style.width = pct + '%';
            } else {
                timerEl.textContent = 'EXPIRED (00:00:00)';
                timerEl.style.color = '#EF4444';
                timerBar.style.width = '0%';
            }
        }, 1000);

        function resetTimer() {
            secondsLeft = 24 * 3600;
            timerEl.textContent = '24:00:00';
            timerEl.style.color = 'var(--accent-gold)';
            timerBar.style.width = '100%';
            alert('Fresh 24-hour mutual consent token active! Sharing will automatically expire in exactly 24 hours.');
        }

        function expireNow() {
            secondsLeft = 0;
            timerEl.textContent = 'EXPIRED (00:00:00)';
            timerEl.style.color = '#EF4444';
            timerBar.style.width = '0%';
            alert('Location sharing permission immediately revoked! Zero background transmission running.');
        }


        // Emergency SOS Countdown Simulator
        let sosCountdownTimer = null;
        function triggerSOS() {
            const btn = document.getElementById('sos-btn');
            const countdownWrap = document.getElementById('sos-countdown');
            const numEl = document.getElementById('countdown-num');
            const statusTitle = document.getElementById('sos-status-title');
            const statusDesc = document.getElementById('sos-status-desc');

            countdownWrap.style.display = 'block';
            let count = 5;
            numEl.textContent = count;
            statusTitle.textContent = 'EMERGENCY BEACON ARMED!';
            statusDesc.textContent = 'Broadcasting high-priority distress signal to emergency contacts and emergency services.';

            if (sosCountdownTimer) clearInterval(sosCountdownTimer);
            sosCountdownTimer = setInterval(() => {
                count--;
                if (count > 0) {
                    numEl.textContent = count;
                } else {
                    clearInterval(sosCountdownTimer);
                    countdownWrap.style.display = 'none';
                    statusTitle.textContent = '🚨 DISTRESS SIGNAL DISPATCHED';
                    statusDesc.textContent = 'Coordinates (28.6139° N, 77.2090° E) sent to 3 primary contacts. Responders\' silent ringers overridden.';
                    alert('SOS BROADCAST CONFIRMED!\n\nLocation transmitted to Circle Responders with turn-by-turn routing initiated.');
                }
            }, 1000);
        }

        function cancelSOS() {
            if (sosCountdownTimer) clearInterval(sosCountdownTimer);
            document.getElementById('sos-countdown').style.display = 'none';
            document.getElementById('sos-status-title').textContent = 'Ready for Emergency Dispatch';
            document.getElementById('sos-status-desc').textContent = 'Press the red button to simulate a 5-second countdown panic alert with emergency contact notification.';
            alert('SOS alert safely cancelled.');
        }

        // FAQ Toggle Accordion
        function toggleFaq(el) {
            const ans = el.nextElementSibling;
            const isVisible = ans.style.display === 'block';
            ans.style.display = isVisible ? 'none' : 'block';
            el.querySelector('span:last-child').textContent = isVisible ? '▾' : '▴';
        }
    