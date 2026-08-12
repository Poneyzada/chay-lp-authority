/**
 * rf.js — Fatherflow Intelligence Layer
 * Versão: 3.1 (Dra. Chayanne Setup)
 */

const RF_CONFIG = {
    PROJECT_ID: "dra",               // Projeto Dra. Chayanne
    NICHO: "Saúde Hormonal",          // Nicho específico
    API_URL: "http://164.90.138.233:8000/v1", // Servidor de Produção Fatherflow
    DEBUG: false                     // Desativado para produção
};

function _rfGetCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

function _rfGetUTMs() {
    const p = new URLSearchParams(window.location.search);
    return {
        utm_source: p.get('utm_source') || 'direto',
        utm_medium: p.get('utm_medium') || '',
        utm_campaign: p.get('utm_campaign') || '',
        utm_content: p.get('utm_content') || '',
        utm_term: p.get('utm_term') || '',
        gclid: p.get('gclid') || '',
        ad_id: p.get('ad_id') || p.get('adid') || p.get('ad.id') || ''
    };
}

function _rfGetMetaCookies() {
    const _p = new URLSearchParams(window.location.search);
    const fbclid = _p.get('fbclid');
    return {
        fbp: _rfGetCookie('_fbp') || '',
        fbc: _rfGetCookie('_fbc') || (fbclid ? `fb.1.${Date.now()}.${fbclid}` : '')
    };
}

function _rfGetDevice() {
    const ua = navigator.userAgent;
    if (/iPad|tablet/i.test(ua)) return 'tablet';
    if (/iPhone|Android|Mobile/i.test(ua)) return 'smartphone';
    return 'desktop';
}

function _rfGetPageInfo() {
    return {
        page_url: window.location.href,
        page_title: document.title,
        referrer: document.referrer || '',
        screen: `${screen.width}x${screen.height}`,
        language: navigator.language || ''
    };
}

async function trackLeadIndustrial(dados) {
    if (!dados.nome) {
        console.warn('[RF] nome é obrigatórios.');
        return;
    }

    let whats = (dados.whats || '').replace(/\D/g, '');
    if (whats && whats.length <= 11 && !whats.startsWith('55')) {
        whats = '55' + whats;
    }

    const utms = _rfGetUTMs();
    const meta = _rfGetMetaCookies();
    const page = _rfGetPageInfo();

    const payload = {
        project_id: RF_CONFIG.PROJECT_ID,
        nicho: dados.nicho || RF_CONFIG.NICHO,
        nome: dados.nome,
        whats: whats,
        mensagem: dados.mensagem || '',
        email: dados.email || '',
        ...utms,
        ...meta,
        device: _rfGetDevice(),
        user_agent: navigator.userAgent,
        ...page,
        ...Object.fromEntries(
            Object.entries(dados).filter(([k]) =>
                !['nome', 'whats', 'mensagem', 'email', 'nicho'].includes(k)
            )
        ),
        captured_at: new Date().toISOString()
    };

    if (RF_CONFIG.DEBUG) console.log('[RF] Enviando Payload:', payload);

    try {
        const res = await fetch(`${RF_CONFIG.API_URL}/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            mode: 'cors'
        });
        const json = await res.json();
        
        // Disparo de Conversão Google Ads (Global)
        if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
                'send_to': 'AW-11337402877',
                'value': 1.0,
                'currency': 'BRL'
            });
            if (RF_CONFIG.DEBUG) console.log('[RF] Google Ads Conversion Triggered');
        }

        if (RF_CONFIG.DEBUG) console.log('[RF] Resposta:', json);
        return json;
    } catch (e) {
        if (RF_CONFIG.DEBUG) console.warn('[RF] Falha silenciosa:', e);
        return null;
    }
}

// Global exposure for React/Vite
window.trackLeadIndustrial = trackLeadIndustrial;
