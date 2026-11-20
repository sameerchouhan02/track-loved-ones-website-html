
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
            document.getElementById('tab-' + tabId).classList.add('active');
            
            const btn = Array.from(document.querySelectorAll('.tab-btn')).find((button) => (
                button.getAttribute('data-legacy-onclick') || button.getAttribute('onclick') || ''
            ).includes(tabId));
            if (btn) btn.classList.add('active');
        }

        function toggleExpansionFields(val) {
            const expFields = document.getElementById('expansion-fields');
            if (expFields) {
                expFields.style.display = val === 'expansion' ? 'grid' : 'none';
            }
        }
    