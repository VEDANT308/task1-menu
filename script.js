const _pl = document.getElementById('pl');
const _mn = document.getElementById('mn');
const _ks = document.querySelectorAll('.k');

function move(t) {
    const r = t.getBoundingClientRect();
    const p = _mn.getBoundingClientRect();
    _pl.style.opacity = '0.15';
    _pl.style.width = r.width + 'px';
    _pl.style.height = r.height + 'px';
    _pl.style.left = (r.left - p.left) + 'px';
    _pl.style.top = (r.top - p.top) + 'px';
}

_ks.forEach(k => k.onmouseenter = (e) => move(e.target));
_mn.onmouseleave = () => _pl.style.opacity = '0';

window.onload = () => {
    if (_ks.length > 0) {
        move(_ks[0]);
        _pl.style.opacity = '0';
    }
};